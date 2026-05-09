## 🔥 Kafka 이론 학습 목차

## 0️⃣ Kafka란?
- Kafka의 등장 배경
- 메시지 큐와 이벤트 스트리밍
- Kafka를 왜 사용하는가
- Kafka의 주요 특징
  - 고가용성
  - 확장성
  - 내구성
  - 대용량 처리
- Kafka 사용 사례

---

## 1️⃣ Kafka 핵심 개념

#### 1-1. Broker
- Broker 역할
- Cluster 구조
- Controller 개념

#### 1-2. Topic
- Topic 개념
- Topic 설계 전략
- Naming Convention

#### 1-3. Partition
- Partition 구조
- 병렬 처리 원리
- Partition Key
- Partition 증가 시 주의점

#### 1-4. Offset
- Offset 개념
- Consumer Offset 관리
- Commit 방식

#### 1-5. Producer
- Producer 역할
- 메시지 전송 흐름
- ACK 설정
- Batch / Compression

#### 1-6. Consumer
- Consumer 구조
- Pull 기반 동작
- Poll 모델

#### 1-7. Consumer Group
- Group 개념
- Partition 할당 방식
- Rebalancing

---

## 2️⃣ Kafka 내부 동작 원리

#### 2-1. 메시지 저장 구조
- Commit Log 구조
- Segment File
- Index File

#### 2-2. 복제(Replication)
- Replica 개념
- Leader / Follower
- ISR(In-Sync Replica)

#### 2-3. 장애 복구
- Broker 장애 시 동작
- Leader Election
- 데이터 유실 가능성

#### 2-4. 전송 보장
- At Most Once
- At Least Once
- Exactly Once

---

## 3️⃣ Producer 심화

#### 3-1. 전송 방식
- Sync / Async 전송
- Retry
- Idempotent Producer

#### 3-2. Partition 전략
- Round Robin
- Key 기반 분배
- Sticky Partition

#### 3-3. 성능 옵션
- linger.ms
- batch.size
- compression.type
- acks

---

## 4️⃣ Consumer 심화

#### 4-1. Offset Commit 전략
- Auto Commit
- Manual Commit

#### 4-2. Rebalance
- Rebalance 발생 조건
- Cooperative Rebalancing

#### 4-3. Consumer 장애 처리
- Lag 개념
- 중복 소비 문제
- 메시지 누락 문제

---

## 5️⃣ Kafka 운영 개념

#### 5-1. Topic 운영
- Partition 수 결정
- Replication Factor 결정

#### 5-2. 데이터 보관 정책
- Retention
- Cleanup Policy
  - delete
  - compact

#### 5-3. 성능 튜닝
- Throughput vs Latency
- Broker 튜닝 포인트

#### 5-4. 모니터링
- Consumer Lag
- 주요 Metric
- 운영 시 자주 보는 지표

---

## 6️⃣ Kafka 아키텍처 패턴

#### 6-1. 이벤트 기반 아키텍처
- Event Driven Architecture(EDA)

#### 6-2. Pub/Sub 패턴
- Queue 방식과 차이

#### 6-3. CDC(Change Data Capture)
- DB 연동 개념

#### 6-4. Outbox Pattern
- 트랜잭션 문제 해결

---

## 7️⃣ Kafka 생태계

#### 7-1. Kafka Connect
- Source Connector
- Sink Connector

#### 7-2. Schema Registry
- Avro / JSON Schema / Protobuf
- 스키마 진화(Schema Evolution)

#### 7-3. Kafka Streams
- Stream Processing 개념

#### 7-4. ksqlDB
- SQL 기반 스트림 처리

---

## 8️⃣ Kafka와 다른 기술 비교

#### 8-1. RabbitMQ와 비교
#### 8-2. Redis Stream과 비교
#### 8-3. ActiveMQ와 비교
#### 8-4. Pulsar와 비교

---

## 9️⃣ Kafka 실무 관점

#### 9-1. 실무에서 많이 하는 실수
#### 9-2. 장애 사례
#### 9-3. Topic 설계 전략
#### 9-4. 운영 시 체크리스트
#### 9-5. 대규모 서비스 Kafka 구조 사례

---

## 🔟 이후 실습으로 넘어갈 것들
- Docker 기반 Kafka 실행
- Topic 생성/조회
- Producer/Consumer 실습
- Spring Boot + Kafka
- Kafka Connect 실습
- 장애 테스트
- 모니터링 구축