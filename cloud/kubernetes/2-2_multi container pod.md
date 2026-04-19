## 🔥 Multi Container Pod
#### 🚩개념
👉 하나의 Pod 안에 **컨테이너를 여러 개** 넣는 구조
- Pod 1개
- 그 안에 컨테이너 A, 컨테이너 B, 컨테이너 C ...

Pod 안의 컨테이너들은 다음을 공유
- 네트워크(IP, Port 공간)
- Volume
- Pod 생명주기

👉 즉 같은 Pod 안에서는
- 같은 IP 사용
- `localhost`로 서로 통신 가능
- 같은 volume mount 가능
___

#### ❓사용하는 이유?
👉 컨테이너를 굳이 여러 개 한 Pod에 넣는 이유는
**서로 강하게 결합된 기능을 함께 실행하기 위함**
ex:
- 메인 앱 + 로그 수집 컨테이너
- 메인 앱 + 프록시 컨테이너
- 메인 앱 + 보조 처리 컨테이너

___
#### 🔷 핵심 특징
##### 1) 네트워크 공유
👉 같은 Pod 안 컨테이너끼리는 `localhost`로 접근 가능
ex:
- 컨테이너 A가 8080 포트를 open
- 컨테이너 B가 `http://localhost:8080` 접근 가능

##### 2) 스토리지 공유
👉 같은 Pod 안에서 동일한 volume을 mount하면 파일 공유 가능
ex:
- 컨테이너 A가 `/shared`에 파일 생성
- 컨테이너 B가 `/shared`에서 읽기 가능

##### 3) 운명 공동체
👉 Pod 단위로 스케줄링되고 관리
- 같은 노드에 같이 뜸
- 같이 삭제됨
- 같이 재생서됨
❌ 완전히 독립적인 앱끼리는 같은 Pod에 넣으면 안됨
___

#### ❓ 언제 같은 Pod에 넣고, 언제 분리하니?
##### 같은 Pod에 넣는 경우
- 서로 항상 같이 떠야 함
- 강하게 연결되어 있음
- localhost 통신이 필요함
- 파일 공유가 필요함

##### 분리해야 하는 경우
- 각각 독립 배포가 필요함
- 따로 스케일아웃 해야함
- 장애 영향 분리가 필요함

ex:
= `web + db`는 보통 같은 Pod에 안 넣음
- `app + log-agent`는 같은 Pod 가능
___

#### 📖 기본 YAML 예제
> 아래는 하나의 Pod 안에 nginx와 busybox를 같이 넣는 예제
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  container:
    - name: nginx
      image: nginx:1.25
      ports:
      - containerPort: 80

    - name: side-tool
      image: busybox:1.36
      command: ["sh", "-c", "while true; do echo hello from busybox; sleep 5; done"]
```
##### 해석
- `containers:` 아래에 두 개가 있음
- `nginx` 컨테이너
- `side-tool` 컨테이너
___
