## 🔥Kafka 핵심 개념
- Broker
- Topic
- Partition
- Offset
- Producer
- Consumer
- Consumer Group

`kafka`는 결국
> "Producer가 메시지를  보내고 → Broker가 저장하고 → Consumer가 읽는 구조"

___
#### 1️⃣ Broker
##### ❓ Broker
👉 Kafka 서버 한 대를 Broker라고 부름.
```
Kafka 실행 서버 = Broker
```
Kafka는 보통 여러 대의 Broker를 묶어서 Cluster로 운영.

##### ✔️ Broker 역할
- 메시지 저장
- 메시지 전달
- Topic 관리
- Partition 관리
- 복제(Replication) 관리
- Consumer 요청 처리

##### 예시 구조
```
[Producer]
     ↓
 ┌─────────┐
 │Broker 1 │
 └─────────┘
 ┌─────────┐
 │Broker 2 │
 └─────────┘
 ┌─────────┐
 │Broker 3 │
 └─────────┘
     ↓
[Consumer]
```
👉 Broker 여러 대가 하나의 Kafka Cluster를 구성

##### Controller
👉 Cluster 내부에서는 한 Broker가 Controller 역할을 맡는다.
Controller는:
- Leader Partition 선정
- 장애 감지
- Rebalance 처리
  
위와 같은 Cluster 관리 작업을 담당
___

#### 2️⃣ Topic
##### ❓ Topic
👉 메시지를 저장하는 논리적 이름 (메시지 카테고리)

##### 예시
```
user-login
order-created
payment-complete
```
Producer는 Topic으로 메시지를 보내고,
Consumer는 Topic에서 메시지를 읽는다.

##### Topic 구조
```
Topic: order-created
 ├─ Partition 0
 ├─ Partition 1
 └─ Partition 2
```
Topic 내부에는 여러 Partition이 존재할 수 있다.

##### Naming Convention
실무에서는 보통 `도메인-행위` 형태로 많이 사용.
ex
```
member-created
order-paid
coupon-issued
```

___
#### 3️⃣ Partition
##### ❓ Partition
👉 Kafka의 실제 데이터 저장 단위.

Topic은 논리 개념이고, 실제 데이터는 Partition에 저장된다.

##### Partition을 사용하는 이유
→ Kafka가 대용량 처리를 잘하는 핵심 이유
- 병렬 처리 가능
- Consumer 분산 가능
- 처리량 증가

##### 구조 예시
```
Topic: order

Partition 0
Partition 1
Partition 2
```
→ 메시지는 각 Partition에 나눠 저장

##### 메시지 저장 형태
```
Partition 0

0 → msg1
1 → msg2
2 → msg3
```
→ Partition 내부에서는 순서(Order)가 보장

하지만

```
!!Partition 간 순서는 보장되지 않늗다!!
```

##### Partition Key
→ Producer는 Key를 기준으로 Partition을 결정할 수 있다.
ex
```
userId = 1 → Partition 0
userId = 2 → Partition 1
```
이렇게 하면
```
같은 userId 데이터는 같은 Partition
```
으로 가기 때문에 순서 보장이 가능.

##### Partition 증가 시, 주의점
Partition 수를 늘리면
```
기존 Key의 Partition 위치가 바뀔 수 있다.
```
즉,
- 메시지 순서 영향
- Consumer 재분배
- 운영 복잡성 증가

문제가 발생할 수 있다.

___
#### 4️⃣ Offset
##### ❓ Offset
👉 Partition 내 메시지의 번호.
```
0
1
2
3
...
```
처럼 증가

##### 특징
- Partition별로 관리
- 유일한 위치 정보
- Consumer 읽기 기준