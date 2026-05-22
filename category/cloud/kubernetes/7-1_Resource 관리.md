## 🔥 Resource 관리
#### 1️⃣ request / limits 개념
쿠버네티스는 Pod가 얼마나 CPU / 메모리를 쓸지 미리 선언
✔️ **requests (최소 보장 자원)**
- "이 정도는 꼭 필요"
- 스케줄러가 **Pod를 어느 Node에 배치할지 결정할 때 사용**

✔️ **limits (최대 사용 제한)
- "이 이상은 못 씀"
- zjsxpdlsjrk 자원을 과다하게 사용하면 제한 걸림

##### 💠 CPU / Memory 동작 차이
|자원|requests|limits|
|---|------|------|
|CPU|최소 보장|초과 시 throttling (속도 제한)|
|Memory|최소 보장|초과 시 OOMKill(죽음🔥)|

👉 **메모리 limits 넘으면 그냥 컨테이너 Dow!!**

##### 💠 YAML 예시
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: resource-pod
spec:
  containers:
  - name: app
    image: nginx
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
```

✔️ 단위 설명
- CPU : `1000m = 1 CPU` `250m = 0.25 CPU`
- Memory : `Mi`, `Gi` 사용

___
#### 2️⃣ HPA(Horizontal Pod Autoscaler)
→ Pod 개수를 자동으로 늘리고 줄이는 기능
👉 "부하 많으면 Pod 늘리고, 줄면 줄인다"

##### 💠 동작 방식
기본적으로 **CPU 사용률 기준**
ex:
- 목표 CPU: 50%
- 현재 80% → Pod 증가
- 현재 20% → Pod 감소

##### 💠 HPA 구조
```
Deployment → Pod 여러 개
           ↑
         HPA가 개수 조절
```

##### 💠 HPA 생성 명령어
```bash
kubectl autoscale deployment my-app \
  --cpu-percent=50 \
  --min=1 \
  --max=5
```

##### 💠 YAML(참고용)
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 1
  maxReplicas: 5
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```
___
#### 3️⃣ 핵심 정리
- requests = 스케줄링 기준
- limits = 자원 제한
- Memory limit 초과 → OOMKill
- CPU limit 초과 → throttling
- HPA = Pod 개수 자동 조절
- HPA는 request 기준으로 동작