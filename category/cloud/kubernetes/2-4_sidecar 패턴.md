## 🔥 Sidecar 패턴
#### 1️⃣ 정의
**Sidecar 패턴 = 하나의 Pod 안에서 "보조 역할 컨테이너"를 붙이는 구조**
- 메인 컨테이너: 실제 서비스
- Sidecar 컨테이너: 보조 기능 담당

👉 즉, **같은 Pod 안에서 협업하는 구조**
___
#### 2️⃣ 사용 이유
메인 컨테이너를 수정하지 않고, 기능을 추가하기 위해
대표적으로:
- 로그 수집
- 프록시
- 보안
- 데이터 동기화

👉 **"애플리케이션 코드는 건드리지 않고 기능 확장"**
___
#### 3️⃣ 구조 이해
```text
Pod
 ├── app container (main)
 └── sidecar container (helper)
```
✔️ 특징:
- 같은 네트워크 (localhost 공유)
- 같은 볼륨 공유 가능
- 생명주기 같이 감 (같이 죽고 같이 살아남)
___
#### 4️⃣ 대표 사용 사례
📌 1. 로그 수집 (제일 중요)
- app → 파일로 로그 남김
- sidecar → 그 파일 읽어서 외부로 전송

📌 2. nginx 프록시
- app 앞단에 nginx 붙여서
- 로드밸런싱
- SSL 처리

📌 3. config reload
- sidecar가 config 감시해서 변경되면 reload

___
#### 5️⃣ 예시 YAML
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: sidecar-pod
spec:
  containers:
  - name: app
    image: busybox
    command: ["sh", "-c", "while true; do echo hello >> /var/log/app.log; sleep 5; done"]
    volumeMounts:
    - name: log-volume
      mountPath: /var/log

  - name: sidecar
    image: busybox
    command: ["sh", "-c", "tail -f /var/log/app.log"]
    volumeMounts:
    - name: log-volume
      mountPath: /var/log

  volumes:
  - name: log-volume
    emptyDir: {}
```
___
#### 6️⃣ 핵심 포인트 정리
✔️ Sidecar는 같은 Pod 안의 컨테이너
✔️ 메인 기능을 보조하는 역할
✔️ volume 공유해서 데이터 전달 많이 함
✔️ lifecycle 동일 (같이 죽음)
✔️ 대표: 로그 수집, 프록시, 보안
___
#### ⚠️ Init Container와 차이
| 구분 | Sidecar | Init Container |
|------|----------------|---------------|
|실행시점|항상 같이 실행|시작 전에만 실행|
|지속성|계속 살아있음|끝나면 종료|
|용도|보조 기능|초기 세팅|

❗**Sidecar는 특별한 문법이 있는 게 아니라 그냥 `containers`에 하나 더 추가하면 된다.**
👉 **Sidecar = containers 배열에 그냥 하나 더 넣고, 역할만 보조로 쓰는 것**