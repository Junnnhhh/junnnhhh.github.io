## 🔥 Storage (Volume / PV / PVC)
#### 📦 Volume
👉 왜 필요할까?
Pod는 **휘발성(ephemeral)**이라서 컨테이너 재시작되면 데이터가 날아감.

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