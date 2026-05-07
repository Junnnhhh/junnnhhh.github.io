## 🔥 Storage (Volume / PV / PVC)
#### 📦 Volume
👉 왜 필요할까?
Pod는 **휘발성(ephemeral)** 이라서 컨테이너 재시작되면 데이터가 날아감.

➡️ 그래서 **데이터를 유지하려고 Volume 사용**

👉 구조
```text
Container ↔ Volume ↔ Storage
```

👉 가장 기본 예제(emtyDir)
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: volume-pod
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: data-volume
      mountPath: /data

  volumes:
  - name: data-volume
    emptyDir: {}
```

👉 핵심 포인트
- `volumes` : Pod 전체에서 정의
- `volumeMounts` : 컨테이너에서 연결
- `mountPath` : 컨테이너 내부 경로

👉 emptyDir 특징
- Pod 생성 시, 생성
- Pod 삭제 시 같이 삭제
- **임시 데이터용**

___

#### 📦 Persistent Volume (PV)
👉 클러스터가 관리하는 실제 저장소
➡️ Pod랑 직접 연결 안함

##### 👉 개념
```text
[ 실제 디스크 / NFS / 클라우드 스토리지 ] = PV
```

##### 👉 특징
- 관리자(Cluster)가 생성
- Pod와 독립적
- 재사용 가능

##### 👉 예시
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-test
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /tmp/data
```
___

#### Persistent Volume Claim (PVC)
👉 Pod가 "스토리지 주세요" 요청하는 객체

##### 👉 구조 핵심
```text
Pod → PVC → PV → 실제 스토리지
```

##### 👉 예시
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-test
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```

##### 👉 연결과정
1. PVC 생성
2. 조건 맞는 PV 자동 매칭
3. Pod에서 PVC 사용

___

#### 📦 Pod에서 PVC 사용
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pvc-pod
spec:
  containers:
  - name: app
    image: nginx
    volumeMounts:
    - name: pvc-volume
      mountPath: /data

  volumes:
  - name: pvc-volume
    persistentVolumeClaim:
      claimName: pvc-test
```

___
#### 🔥 핵심정리
✔️ Volume = Pod 내부 임시 저장
✔️ PV = 실제 저장소 (관리자 영역)
✔️ PVC = 사용자 요청 (Pod가 사용)

##### 👉 한 줄 흐름
```text
Pod → PVC → PV → Storage
```