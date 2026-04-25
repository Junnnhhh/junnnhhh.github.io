## 🔥 Service & Networking
#### 1️⃣ Service란?
👉 Pod는 IP가 계속 바뀜 (재생성되면 변경됨)
👉 그래서 **고정된 접근 지점**이 필요
➡️ 그게 Service
> Client → Service → Pod
___

#### 2️⃣ ClusterIP (기본값)
##### ✔️ 특징
- 클러스터 내부에서만 접근 가능
- 외부에서는 접근 ❌
- 기본 Service 타입

##### ✔️ 사용 케이스
- 내부 서비스 간 통신
  - ex: backend → database

##### ✔️ 예시 YAML
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: ClusterIP   # 생략 가능 (기본값)
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
```
👉 `port`: 서비스 포트
👉 `targetPort`: Pod 포트
___

#### 3️⃣ NodePort
##### ✔️ 특징
- 외부에서 접근 가능
- Node IP + Port로 접근

```text
http://NodeIP:NodePort
```
##### ✔️ 포트 범위
- 30000 ~ 32767

##### ✔️ 예시 YAML
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nodeport
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
      nodePort: 30007
```

##### ✔️ 핵심 포인트
- 모든 Node에 포트 열림
- Node 어디로 들어와도 Pod로 라우팅됨

___
#### 4️⃣ LoadBalancer
##### ✔️ 특징
- 클라우드 환경에서 사용 (AWS, GCP 등)
- 외부 Load Balancer 생성됨
- **외부 IP 자동 할당**

##### ✔️ 접근 방식
```text
http://External-IP
```

##### ✔️ 예시 YAML
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-lb
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
```
___
#### 💡흐름 이해
```text
LoadBalancer → NodePort → ClusterIP → Pod
```