## 🔥 Deployment 실전 명령어
#### 0️⃣ Deployment 생성
```bash
kubectl create deployment my-deploy --image=nginx
```

#### 1️⃣ scale (Pod 개수 조절)
```bash
kubectl scale deployment my-deploy --replicas=5
```
👉 결과
- Pod 개수 5개로 변경

👉 확인
```bash
kubectl get pods
```

#### 2️⃣ set image (이미지 업데이트)
```bash
kubectl set image deployment my-deploy nginx=nginx:1.25
```
👉 의미
- nginx 컨테이너 이미지를 변경
- Rolling Update 자동 실행됨

👉 중요 포인트
- `nginx=nginx:1.25` → container이름:이미지

#### 3️⃣ rollout status (배포 상태 확인)
```bash
kubectl rollout status deployment my-deploy
```
👉 결과
- 업데이트 진행 상황 확인
- 완료될 때까지 기다림

#### 4️⃣ rollout history (이전 버전 확인)
```bash
kubectl rollout history deployment my-deploy
```
👉 출력 예시
```text
REVISION  CHANGE-CAUSE
1         ...
2         ...
```

#### 5️⃣ rollout undo(롤백)
✔️ 직전 버전으로
```bash
kubectl rollout undo deployment my-deploy
```
✔️ 특정 버전으로
```bash
kubectl rollout undo deployment my-deploy --to-revision=1
```

#### 6️⃣ rollout pause / resume
✔️ 배포 일시정지
```bash
kubectl rollout pause deployment my-deploy
```
✔️ 재개
```bash
kubectl rollout resume deployment my-deploy
```