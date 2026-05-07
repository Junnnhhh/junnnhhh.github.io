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