## 🔥 Workload(Deployment / ReplicaSet)
#### 1️⃣ ReplicaSet
역할 : Pod 개수를 유지하는 것
- 지정한 개수만큼 Pod 유지
- 죽으면 자동으로 다시 생성

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: nginx
        image: nginx
```
👉 핵심 포인트
- `replicas`: 유지할 Pod 개수
- `selector`: 어떤 Pod를 관리할지
- `template`: Pod 생성방식

___
#### 2️⃣ Deployment
**ReplicaSet을 관리하는 상위 개녕**
##### ✔️ 역할
- ReplicaSet 생성/관리
- Rolling Update
- Rollback 가능

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deploy
spec:
  replicas: 3

  strategy:                # 👈 이게 핵심
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1

  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: nginx
        image: nginx
```
👉 구조가 정말 비슷하지만 Deployment에넌 **업데이트 전략**까지 포함. `spec.strategy` 필드 (Deployment에만 있고, ReplicaSet ❌)
___
#### Deployment vs ReplicaSet 차이
|항목|ReplicaSet|Deployment|
|-----|---------|----------|
|목적|Pod 개수 유지|Pod+업데이트 관리|
|사용여부|거의안씀|🔥필수|
|업데이트|수동|자동 (Rolling Update)|
|Rollback|없음|있음|
___
#### 4️⃣ Rolling Update
Deployment의 핵심 기능
👉 이미지 변경 시
- 기존 Pod 죽이고
- 새 Pod 점진적으로 생성

```bash
kubectl set image deployment my-deploy nginx-nginx:1.25
```
확인
```bash
kubectl rollout status deployment my-deploy
```
___
#### 5️⃣ Rollback
👉 배포 실패 시, 이전 버전으로 복구
```bash
kubectl rollout undo deployment my-deploy
```