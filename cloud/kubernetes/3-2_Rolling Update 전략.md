## 🔥 Rolling Update 전략
> Deployment는 기본적으로 이 전략을 사용

👉 의미
기존 Pod를 조금씩 줄이면서 새로운 Pod를 점진적으로 늘림
___
#### 1️⃣ 전략 구조
```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 1
    maxSurge: 1
```
##### 🔴 maxUnavailable
👉 "동시에 죽어도 되는 Pod 수"
- 서비스 중단 허용 범위
📖 예시
- replicas: 3
- maxUnavailable: 1

➡️ Pod는 최대 1개까지 내려가도 됨 (기존 Pod: 3 → 2까지 감소 가능)

##### 🟠 maxSurge
👉 "추가로 생성 가능한 Pod 수"
- 기존 개수보다 더 많이 생성 가능

📖 예시
- replicas: 3
- maxSurge: 1

➡️ 최대 4개까지 잠깐 늘어남(기존 3 + 신규 1 = 4)
___
#### ✅ 참고
##### 🟨 비율(%)도 가능
```yaml
maxUnavailable: 25%
maxSurge: 25%
```
👉 replicas=4면
- maxUnavailable = 1
- maxSurge = 1
___
#### 💡 한줄 정리
👉 maxSurge = 더 만들 수 있는 수
👉 maxUnavailable = 죽여도 되는 수