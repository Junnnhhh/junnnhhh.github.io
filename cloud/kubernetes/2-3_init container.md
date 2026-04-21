## 🔥 Init Container
#### 📖 개념
👉 Init Container = "메인 컨테이너 실행 전에 먼저 실행되는 컨테이너"
- Pod 안에 포함됨
- 반드시 순서대로 실행됨
- 하나라도 실패하면 → Pod 실행 안됨
- 성공해야 다음 컨테이너 실행됨
___
#### 📌 사용 시점
👉 Init Container는 "준비 작업" 담당
ex:
1️⃣ 앱 실행 전에 데이터 준비
- DB 연결 확인
- config 파일 다운로드
- 외부 API에서 데이터 가져오기

2️⃣ 의존성 체크
- 다른 서비스가 살아있는지 확인
- ex) DB, Redis 기다리기

3️⃣ 권한/환경 세팅
- 디렉토리 생성
- 파일 권한 변경

___
#### 📌 일반 컨테이너랑 차이
| 구분 | Init Container | 일반 Container |
|------|----------------|---------------|
|실행시점|먼저 실행|이후 실행|
|실행방식|순차 실행|병렬 실행|
|재시작|실패 시 재시도|정책 따름|
|역할|준비 작업|실제 서비스|
___
#### 📌 YAML 구조
👉 `initContainers` 필드가 핵심
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: init-example
spec:
  initContainers:
  - name: init-myservice
    image: busybox
    command: ['sh', '-c', 'echo init start && sleep 5']

  containers:
  - name: main-container
    image: nginx
```
##### 🏃‍♂️‍➡️ 실행 흐름
```text
1. initContainers 실행
2. 성공하면 다음 initContainer 실행 (여러 개면 순서대로)
3. 전부 성공하면
4. containers 실행 (메인 컨테이너)
```
___
#### 🔴 정리
👉 Init Container는 메인 컨테이너 실행 전에 필요한 준비 작업을 수행하는 컨테이너