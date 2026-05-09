window.BLOG_POSTS = [
  {
    "title": "0-Kafka란",
    "file": "category/backend/kafka/0-Kafka란.md",
    "category": [
      "Backend",
      "Kafka"
    ],
    "categoryPath": "category/backend/kafka",
    "content": "## 🔥 Kafka란?\r\n#### Kafka의 등장 배경\r\n🔖기존 시스템들은 보통 아래처럼 동작\r\n```\r\n서비스 A → 서비스 B → 서비스 C \r\n```\r\n##### 이 구조의 문제 점\r\n- 서비스끼리 강하게 연결됨 (Tight Coupling)\r\n- 특정 서비스 장애 시, 전체 영향\r\n- 트래픽 증가 시, 병목 발생\r\n- 데이터 흐름 추적 어려움\r\n\r\n##### 특히, 대규모 서비스에서는 아래와 같은 작업이 폭증하기 시작\r\n- 로그 수집\r\n- 실시간 데이터 처리\r\n- 이벤트 전달\r\n- 사용자 행동 분석\r\n\r\n**그래서 나온 개념이**\r\n```\r\n\"중간에서 데이터를 안전하게 계속 흘러보내자\"\r\n```\r\n\r\n👉 이걸 해결하기 위해 나온 대표 기술이 `Kafka`\r\n➕ Kafka는 원래 LinkedIn 에서 대용량 로그 처리용으로 개발됐고, 현재는 Apache Kafka로 오픈소스화 됨.\r\n___\r\n\r\n#### 메시지 큐와 이벤트 스트리밍\r\n##### 메시지 큐(Message Queue)\r\n👉 메시지를 중간 저장소에 넣고, 필요한 시스템이 가져가는 방식.\r\n```\r\nProducer → Queue → Consumer\r\n```\r\n**대표 특징**\r\n- 비동기 처리\r\n- 서비스 분리 가능\r\n- 장애 전파 감소\r\n\r\n___\r\n#### 이벤트 스트리밍(Event Streaming)\r\nKafka는 단순 Queue보다 더 발전된 개념.\r\nKafka는 데이터를\r\n```\r\n\"흘러가는 이벤트(Event)의 흐름\"\r\n```\r\n으로 관리.\r\n\r\n**예시**\r\n- 회원 가입 이벤트\r\n- 주문 생성 이벤트\r\n- 결제 완료 이벤트\r\n- 로그 이벤트\r\n\r\n이런 이벤트들을 실시간으로 계속 저장하고 전달함.\r\n\r\n👉 즉, Kafka는\r\n```\r\n메시지 큐 + 실시간 데이터 스트리밍 플랫폼\r\n```\r\n___\r\n#### Kafka를 사용하는 이유?\r\n##### 1️⃣ 대용량 처리\r\n👉 엄청난 양의 데이터를 빠르게 처리 가능\r\n\r\n**예시**\r\n- 로그 수집\r\n- 실시간 주문 처리\r\n- 채팅 시스템\r\n- 사용자 행동 분석\r\n\r\n##### 2️⃣ 서비스 간 결합도 감소\r\n기존\r\n```\r\nA → B 직접 호출\r\n```\r\nKafka 사용\r\n```\r\nA → Kafka ← B\r\n```\r\n서로 직접 몰라도 됨.\r\n\r\n##### 3️⃣ 징에 잔피 빙지\r\n👉 Consumer가 죽어도 Kafka에 데이터 남아있음. (나중에 다시 읽기 가능)\r\n\r\n##### 4️⃣ 실시간 처리 가능\r\n👉 이벤트를 거으 실시간으로 전달 가능\r\n\r\n___\r\n#### Kafka의 주요 특징\r\n##### 1️⃣ 고가용성(High Availability)\r\n👉 Broker 여러 대로 클러스터 구성 가능, 일부 서버 죽어도 서비스 지속 가능.\r\n\r\n##### 2️⃣ 확장성(Scalability)\r\n👉 서버(Broker) 추가로 성능 확장 가능, 수평 확장에 매우 강함.\r\n\r\n##### 3️⃣ 내구성(Durability)\r\n👉 디스크 기반 저장, 메모리가 아니라 파일로 저장해서 안정적.\r\n\r\n##### 4️⃣ 대용량 처리\r\n👉 초당 수십~수백만 건 처리 가능, Kafka의 가장 큰 강점 중 하나.\r\n\r\n___\r\n\r\n#### Kafka 사용 사례\r\n##### 📖 로그 수집\r\n```\r\nApplication → Kafka → ELK\r\n```\r\n\r\n##### 📖 실시간 알림\r\n```\r\n주문 발생 → Kafka → 알림 서버\r\n```\r\n\r\n##### 📖 데이터 파이프라인\r\n```\r\nDB → Kafka → Hadoop/Spark\r\n```\r\n\r\n##### 📖 마이크로서비스 이벤트 전달\r\n```\r\n결제 서비스 → Kafka → 배송 서비스\r\n```\r\n___\r\n\r\n#### 🔥 핵심요약\r\n`Kafka`\r\n```\r\n대용량 이벤트 데이터를 안전하고 빠르게 전달/저장하는 플랫폼\r\n```"
  },
  {
    "title": "README",
    "file": "category/backend/kafka/README.md",
    "category": [
      "Backend",
      "Kafka"
    ],
    "categoryPath": "category/backend/kafka",
    "content": "## 🔥 Kafka 이론 학습 목차\r\n\r\n## 0️⃣ Kafka란?\r\n- Kafka의 등장 배경\r\n- 메시지 큐와 이벤트 스트리밍\r\n- Kafka를 왜 사용하는가\r\n- Kafka의 주요 특징\r\n  - 고가용성\r\n  - 확장성\r\n  - 내구성\r\n  - 대용량 처리\r\n- Kafka 사용 사례\r\n\r\n---\r\n\r\n## 1️⃣ Kafka 핵심 개념\r\n\r\n#### 1-1. Broker\r\n- Broker 역할\r\n- Cluster 구조\r\n- Controller 개념\r\n\r\n#### 1-2. Topic\r\n- Topic 개념\r\n- Topic 설계 전략\r\n- Naming Convention\r\n\r\n#### 1-3. Partition\r\n- Partition 구조\r\n- 병렬 처리 원리\r\n- Partition Key\r\n- Partition 증가 시 주의점\r\n\r\n#### 1-4. Offset\r\n- Offset 개념\r\n- Consumer Offset 관리\r\n- Commit 방식\r\n\r\n#### 1-5. Producer\r\n- Producer 역할\r\n- 메시지 전송 흐름\r\n- ACK 설정\r\n- Batch / Compression\r\n\r\n#### 1-6. Consumer\r\n- Consumer 구조\r\n- Pull 기반 동작\r\n- Poll 모델\r\n\r\n#### 1-7. Consumer Group\r\n- Group 개념\r\n- Partition 할당 방식\r\n- Rebalancing\r\n\r\n---\r\n\r\n## 2️⃣ Kafka 내부 동작 원리\r\n\r\n#### 2-1. 메시지 저장 구조\r\n- Commit Log 구조\r\n- Segment File\r\n- Index File\r\n\r\n#### 2-2. 복제(Replication)\r\n- Replica 개념\r\n- Leader / Follower\r\n- ISR(In-Sync Replica)\r\n\r\n#### 2-3. 장애 복구\r\n- Broker 장애 시 동작\r\n- Leader Election\r\n- 데이터 유실 가능성\r\n\r\n#### 2-4. 전송 보장\r\n- At Most Once\r\n- At Least Once\r\n- Exactly Once\r\n\r\n---\r\n\r\n## 3️⃣ Producer 심화\r\n\r\n#### 3-1. 전송 방식\r\n- Sync / Async 전송\r\n- Retry\r\n- Idempotent Producer\r\n\r\n#### 3-2. Partition 전략\r\n- Round Robin\r\n- Key 기반 분배\r\n- Sticky Partition\r\n\r\n#### 3-3. 성능 옵션\r\n- linger.ms\r\n- batch.size\r\n- compression.type\r\n- acks\r\n\r\n---\r\n\r\n## 4️⃣ Consumer 심화\r\n\r\n#### 4-1. Offset Commit 전략\r\n- Auto Commit\r\n- Manual Commit\r\n\r\n#### 4-2. Rebalance\r\n- Rebalance 발생 조건\r\n- Cooperative Rebalancing\r\n\r\n#### 4-3. Consumer 장애 처리\r\n- Lag 개념\r\n- 중복 소비 문제\r\n- 메시지 누락 문제\r\n\r\n---\r\n\r\n## 5️⃣ Kafka 운영 개념\r\n\r\n#### 5-1. Topic 운영\r\n- Partition 수 결정\r\n- Replication Factor 결정\r\n\r\n#### 5-2. 데이터 보관 정책\r\n- Retention\r\n- Cleanup Policy\r\n  - delete\r\n  - compact\r\n\r\n#### 5-3. 성능 튜닝\r\n- Throughput vs Latency\r\n- Broker 튜닝 포인트\r\n\r\n#### 5-4. 모니터링\r\n- Consumer Lag\r\n- 주요 Metric\r\n- 운영 시 자주 보는 지표\r\n\r\n---\r\n\r\n## 6️⃣ Kafka 아키텍처 패턴\r\n\r\n#### 6-1. 이벤트 기반 아키텍처\r\n- Event Driven Architecture(EDA)\r\n\r\n#### 6-2. Pub/Sub 패턴\r\n- Queue 방식과 차이\r\n\r\n#### 6-3. CDC(Change Data Capture)\r\n- DB 연동 개념\r\n\r\n#### 6-4. Outbox Pattern\r\n- 트랜잭션 문제 해결\r\n\r\n---\r\n\r\n## 7️⃣ Kafka 생태계\r\n\r\n#### 7-1. Kafka Connect\r\n- Source Connector\r\n- Sink Connector\r\n\r\n#### 7-2. Schema Registry\r\n- Avro / JSON Schema / Protobuf\r\n- 스키마 진화(Schema Evolution)\r\n\r\n#### 7-3. Kafka Streams\r\n- Stream Processing 개념\r\n\r\n#### 7-4. ksqlDB\r\n- SQL 기반 스트림 처리\r\n\r\n---\r\n\r\n## 8️⃣ Kafka와 다른 기술 비교\r\n\r\n#### 8-1. RabbitMQ와 비교\r\n#### 8-2. Redis Stream과 비교\r\n#### 8-3. ActiveMQ와 비교\r\n#### 8-4. Pulsar와 비교\r\n\r\n---\r\n\r\n## 9️⃣ Kafka 실무 관점\r\n\r\n#### 9-1. 실무에서 많이 하는 실수\r\n#### 9-2. 장애 사례\r\n#### 9-3. Topic 설계 전략\r\n#### 9-4. 운영 시 체크리스트\r\n#### 9-5. 대규모 서비스 Kafka 구조 사례\r\n\r\n---\r\n\r\n## 🔟 이후 실습으로 넘어갈 것들\r\n- Docker 기반 Kafka 실행\r\n- Topic 생성/조회\r\n- Producer/Consumer 실습\r\n- Spring Boot + Kafka\r\n- Kafka Connect 실습\r\n- 장애 테스트\r\n- 모니터링 구축"
  },
  {
    "title": "0_환경셋팅",
    "file": "category/cloud/kubernetes/0_환경셋팅.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## kubernetes Windows 환경에서 셋팅하는 법\r\n\r\n##### cmd에서 아래 명령어 실행\r\n\r\n```bash\r\nwsl --install -d Ubuntu # Unbuntu 설치\r\nwsl.exe -d Ubuntu # Unbuntu 실행\r\n```\r\n___\r\n##### Docker Desktop 설치\r\n[Docker 공식 사이트](https://www.docker.com/products/docker-desktop/)\r\n1️⃣ WSL2 엔진 사용\r\n\r\nDocker Desktop → Settings → General\r\n\r\n✔ Use the WSL 2 based engine\r\n\r\n2️⃣ WSL Integration 켜기 (핵심)\r\n\r\nDocker Desktop → Settings → Resources → WSL Integration\r\n\r\n👉 Ubuntu 체크 ✔\r\n\r\n3️⃣ Docker 실행 확인 (WSL에서)\r\n```bash\r\ndocker ps\r\n```\r\n👉 아무 에러 없이 나오면 성공\r\n___\r\n\r\n##### ububtu 실행 후, k3d 설치\r\n```bash\r\ncurl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash\r\n```\r\n\r\n4️⃣ 클러스터 생성\r\n```bash\r\nk3d cluster create mycluster\r\n```\r\n\r\n5️⃣ 확인\r\n```bash\r\nkubectl get nodes\r\n```\r\n"
  },
  {
    "title": "1-1_k8s 기초",
    "file": "category/cloud/kubernetes/1-1_k8s 기초.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 쿠버네티스 기초\r\n## ✨ Kubernetes란?\r\n>👉 컨테이너를 자동으로 배포 / 관리 / 확장해주는 시스템\r\n\r\n![alt text](image.png)\r\n\r\n### 전체 구조\r\n##### Control Plane (두뇌)\r\n- 클러스터를 \"관리\"하는 영역\r\n\r\n##### Node (몸)\r\n- 실제 컨테이너(Pod)가 돌아가는 서버\r\n\r\n#### 🧠 Control Plane 핵심 컴포넌트\r\n##### ✔ kube-apiserver\r\n- 모든 요청의 입구 (REST API)\r\n- kubectl도 여기로 요청 보냄\r\n👉 \"쿠버네티스의 관문\"\r\n\r\n##### ✔ etcd\r\n클러스터 상태 저장 (DB)\r\n모든 설정, 상태가 여기에 있음\r\n👉 \"쿠버네티스의 DB\"\r\n\r\n##### ✔ scheduler\r\nPod를 어느 Node에 배치할지 결정\r\n👉 \"어디에 배치할까?\"\r\n\r\n##### ✔ controller-manager\r\n상태를 맞춰주는 역할\r\n(예: Pod 죽으면 다시 생성)\r\n👉 \"원하는 상태 유지\"\r\n___\r\n#### 🖥 Node 구성\r\n##### ✔ kubelet\r\n- Node에서 Pod 관리\r\n- Control Plane 지시 수행\r\n\r\n👉 \"현장 관리자\"\r\n\r\n##### ✔ kube-proxy\r\n- 네트워크 연결 담당\r\n\r\n👉 \"트래픽 연결\"\r\n\r\n##### ✔ Container Runtime\r\n- Docker 같은 것\r\n\r\n👉 \"실제로 컨테이너 실행\"\r\n___\r\n\r\n#### 📦 Pod (개념 미리 맛보기)\r\n👉 Kubernetes 최소 실행 단위\r\n- 컨테이너 1개 이상 포함\r\n- 같은 네트워크 / 볼륨 공유\r\n___\r\n\r\n#### 📄 YAML (엄청 중요)\r\n- 쿠버네티스는 전부 YAML로 정의함\r\nex)\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: my-pod\r\nspec:\r\n  containers:\r\n  - name: nginx\r\n    image: nginx\r\n```\r\n___\r\n#### 🔥 핵심 흐름\r\n```\r\nkubectl apply -f pod.yaml\r\n   ↓\r\nkube-apiserver 요청 받음\r\n   ↓\r\netcd 저장\r\n   ↓\r\nscheduler가 node 선택\r\n   ↓\r\nkubelet이 pod 실행\r\n```\r\n___\r\n## 📖 용어\r\n#### 🟢 1. Pod (가장 중요)\r\n>👉 컨테이너 실행 최소 단위\r\n\r\nPod = 컨테이너 1개 (보통) 또는 여러 개 묶음\r\nDocker 컨테이너를 감싸는 개념\r\nk8s는 컨테이너를 직접 다루지 않고 Pod로 다룸\r\n\r\n👉 핵심:\r\n“컨테이너 = Pod 안에 있음”\r\n\r\n#### 🔵 2. Node\r\n>👉 Pod가 실행되는 서버\r\n\r\nNode = 실제 머신 (VM / 물리 서버)\r\nk3d에서는 Docker 컨테이너가 Node 역할\r\n\r\n#### 🟣 3. Cluster\r\n>👉 Node들의 집합\r\n\r\nCluster = 여러 Node 묶음\r\n쿠버네티스 전체 환경\r\n\r\n#### 🟡 4. Deployment ⭐\r\n>👉 Pod를 자동으로 관리하는 놈\r\n\r\nDeployment = Pod 생성 + 유지 + 재시작\r\nPod 죽으면 자동으로 다시 생성\r\n개수 유지 (Replica)\r\n\r\n👉 실무에서는 Pod 직접 안 만들고 Deployment 씀\r\n\r\n#### 🟠 5. ReplicaSet\r\n>👉 Pod 개수 유지 담당\r\n\r\nReplicaSet = Pod 개수 맞춰주는 역할\r\nDeployment 내부에서 사용됨\r\n직접 쓸 일 거의 없음\r\n\r\n#### 🔴 6. Service ⭐\r\n>👉 Pod 접근을 위한 통로\r\n\r\nService = Pod에 접근하는 고정 주소\r\n문제: Pod는 IP가 계속 바뀜\r\n해결: Service로 고정된 endpoint 제공\r\n\r\n#### ⚫ 7. Ingress\r\n>👉 외부 → 내부 서비스 연결\r\nIngress = 외부 요청 라우팅 (URL 기반)\r\n\r\n예:\r\n/api → A 서비스\r\n/login → B 서비스\r\n\r\n#### 🟤 8. ConfigMap\r\n>👉 설정값 관리\r\n\r\nConfigMap = 환경 설정 (DB URL 등)\r\n\r\n#### ⚪ 9. Secret\r\n>👉 민감 정보 저장\r\n\r\nSecret = 비밀번호, 토큰\r\n🧠 구조 한방 정리\r\n```\r\nCluster\r\n └─ Node\r\n     └─ Pod\r\n         └─ Container\r\n\r\nDeployment → Pod 관리\r\nService → Pod 연결\r\nIngress → 외부 연결\r\n```\r\n\r\n___\r\n#### 🔴 동작 과정 정리\r\n```\r\n사용자가 웹 접속\r\n   ↓\r\nIngress\r\n   ↓\r\nService\r\n   ↓\r\nDeployment\r\n   ↓\r\nPod (컨테이너) \r\n```"
  },
  {
    "title": "1-2_yaml 구조",
    "file": "category/cloud/kubernetes/1-2_yaml 구조.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 YAML 구조\r\n#### 📖 기본 예제\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: my-nginx\r\nspec:\r\n  containers:\r\n    - name: nginx\r\n      image: nginx\r\n```\r\n#### `apiVersion: v1`\r\n👉 이 리소스를 어떤 Kubernetes API 버전 형식으로 해석할지 나타내는 필드\r\n- `v1`은 가낭 기본적인 API 버전\r\n- Pod, Service 같은 기본 리소스에서 자주 씀\r\n\r\n#### `kind: Pod`\r\n👉 YAML이 어떤 종류의 리소스인지 나타내는 필드\r\n예시에서는 `Pod`.\r\n다른 예:\r\n- Deployment\r\n- Service\r\n- ConfigMap\r\n- Secret\r\n\r\n#### `metadata`\r\n👉 리소스의 이름, 라벨, 네임스페이스 같은 부가정보를 넣는 곳\r\n##### `metadata.name: my-nginx`\r\n👉 현재 생성할 Pod의 이름\r\n즉, `name`은 kubectl로 다룰 때 기준이 되는 이름\r\n\r\n#### `spec`\r\n👉 리소스가 어떻게 동작하게 할지 정하는 곳\r\nex) Pod\r\n- 어떤 컨테이너를 띄울지\r\n- 어떤 이미지 쓸지\r\n- 포트는 뭘 쓸지\r\n- 환경변수는 뭘 넣을지\r\n- 볼륨은 뭘 붙일지\r\n\r\n#### `containers`\r\n👉 Pod 안에 들어갈 컨테이너 목록\r\nPod 안에는 컨테이너가 1개 이상일 수 있다.\r\n그래서 `containers:` 다음에 단일 필드가 아닌 리스트 형태로 들어감\r\n\r\n##### `- name: nginx`\r\n`-` → 리스트의 첫 번째 항목이라는 뜻\r\n```yaml\r\ncontainers:\r\n  - name: nginx\r\n    image: nginx\r\n```\r\n> containers 목록 안에 컨테이너 하나가 있고, 그 컨테이너 이름은 nginx\r\n\r\n##### `imageL nginx`\r\n👉 이 컨테이너를 어떤 이미지로 실행할지 나타내는 필드\r\n> 예시에서는 Docker Hub의 `nginx` 이미지를 사용하겠다는 뜻\r\n___\r\n#### 🦴 Kubernetes YAML에서 자주 보게 되는 공통 뼈대\r\n```yaml\r\napiVersion: ...\r\nkind: ...\r\nmetadata:\r\n  name: ...\r\nspec:\r\n  ...\r\n```\r\n- `apiVersion`: 어떤 규칙인지\r\n- `kind`: 무슨 리소스인지\r\n- `metadata`: 이름/부가정보\r\n- `spec`: 실제 동작 설정"
  },
  {
    "title": "1-3_명령어 정리",
    "file": "category/cloud/kubernetes/1-3_명령어 정리.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 명령어 정리\r\n\r\n#### 🚩 `kubectl apply -f pod.yaml`\r\n- `-f` = file\r\n- `pod.yaml` 파일 내용을 kubernetes에 적용\r\n👉 Kubernetes는 이 YAML을 읽고 Pod가 없으면 새로 만들고, 이미 있으면 변경사항을 반영\r\n___\r\n#### 🚩 `kubectl get pods`\r\n- 현재 네임스페이스의 Pod 목록 조회\r\nex)\r\n```bash\r\nNAME       READY   STATUS    RESTARTS   AGE\r\nmy-nginx   1/1     Running   0          10s\r\n```\r\n- `1/1`: 컨테이너 1개가 준비됨\r\n- `Running`: 실행 중\r\n- `0`: 재시작 횟수\r\n- `10s`: 만든지 10초\r\n___\r\n#### 🚩 `kubectl delete pod my-nginx`\r\n👉 이름이 `my-nginx`인 Pod 삭제\r\n___\r\n#### 🚩 `kubectl run nginx --imgage=nginx`\r\n👉 명령어 한 줄로 Pod를 빠르게 생성(YAML 파일 없이 바로 만들 수 있음)\r\n___\r\n#### 🚩 `kubectl exec -it nginx-pod -- bash`\r\n👉 실행중인 Pod 안으로 들어가서 명령어 실행\r\n##### 옵션 설명\r\n- `exec`: 컨테이너 안에서 명령 실행\r\n- `-i`: 표준입력 유지\r\n- `-t`: 터미널처럼 사용\r\n- `nginx-pod`: Pod 이름\r\n- `-- bash`: bash 셸 실행 (`bash` 안되는 경우 `-- sh`)\r\n___\r\n#### 🚩 `kubectl logs niginx-pod`\r\n👉 Pod 안 컨테이너 로그 출력\r\n___\r\n#### 🚩 `kubectl describe pod my-nginx`\r\n👉 Pod 상세 정보 출력 (`get`보다 훨씬 자세함)\r\n- 어떤 이미지인지\r\n- 어떤 노드에 올라갔는지\r\n- IP가 뭔지\r\n- 이벤트가 뭐 있었는지\r\n- 에러가 왜 났는지\r\n___\r\n#### 🚩 `kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml`\r\n##### `kubectl run nginx --image=nginx`\r\n👉 nginx Pod를 만들어라\r\n##### `--dry-run=client`\r\n👉 실제로 만들지말고, 내 컴퓨터에서 명령 결과만 미리 생성(클러스터에는 안 올림)\r\n##### `-o yaml`\r\n👉 출력 형식을 YAML로 보여달라는 뜻\r\n##### `> pod.yaml`\r\n👉 이 출력 결과를 화면에 보여주지 말고 `pod.yaml` 파일에 저장해라\r\n> nginx Pod를 만들기 위한 기본 YAML 템플릿을 자동으로 생성해서 pod.yaml에 저장하라는 명령어"
  },
  {
    "title": "2-1_pod",
    "file": "category/cloud/kubernetes/2-1_pod.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Pod\r\n#### 📦 Pod 한 줄 정의\r\n👉 컨테이너를 감싸는 최소 실행 단위\r\n\r\n- Docker는 컨테이너 단위\r\n- Kubernetes는 Pod 단위\r\n___\r\n![alt text](pod구조.png)\r\n👉 핵심 특징\r\n- 같은 Pod 안 컨테이너들은\r\n  - **같은 IP 사용**\r\n  - **localhost로 통신 가능**\r\n- Volume 공유 가능\r\n___\r\n#### ✨ Pod에서 가장 중요한 개념 3개\r\n##### 1️⃣ Pod = 1 IP\r\n👉 컨테이너마다 IP 아님\r\n##### 2️⃣ 컨테이너끼리 localhost 통신\r\n```\r\nnginx → localhost:8080 (같은 Pod)\r\n```\r\n##### 3️⃣ Pod는 잘 안 직접 씀\r\n👉 보통 Deployment로 관리함\r\n___\r\n### 🧪 실습 1: Pod 생성 (명령어 방식)\r\n```bash\r\nkubectl run nginx-pod --image=nginx\r\nkubectl get pods #생성한 pod 확인\r\n```\r\n### 🧪 실습 2: Pod 내부 들어가기\r\n```bash\r\nkubectl exec -it nginx-pod -- bash\r\nkubectl exec -it nginx-pod -- sh # bash로 안되는 경우\r\n```\r\n### 🧪 실습 3: 로그 보기\r\n```bash\r\nkubectl logs nginx-pod\r\n```\r\n___\r\n#### 💣 주의할 점\r\n##### ❌ 컨테이너 = Pod 라고 생각\r\n👉 완전 틀림\r\n\r\n##### ❌ Pod 재시작 개념\r\n👉 Pod는 재시작이 아니라 재생성\r\n\r\n##### ❌ Pod 직접 운영\r\n👉 실무에서는 거의 안씀 (Deployment 사용)"
  },
  {
    "title": "2-2_multi container pod",
    "file": "category/cloud/kubernetes/2-2_multi container pod.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Multi Container Pod\r\n#### 🚩개념\r\n👉 하나의 Pod 안에 **컨테이너를 여러 개** 넣는 구조\r\n- Pod 1개\r\n- 그 안에 컨테이너 A, 컨테이너 B, 컨테이너 C ...\r\n\r\nPod 안의 컨테이너들은 다음을 공유\r\n- 네트워크(IP, Port 공간)\r\n- Volume\r\n- Pod 생명주기\r\n\r\n👉 즉 같은 Pod 안에서는\r\n- 같은 IP 사용\r\n- `localhost`로 서로 통신 가능\r\n- 같은 volume mount 가능\r\n___\r\n\r\n#### ❓사용하는 이유?\r\n👉 컨테이너를 굳이 여러 개 한 Pod에 넣는 이유는\r\n**서로 강하게 결합된 기능을 함께 실행하기 위함**\r\nex:\r\n- 메인 앱 + 로그 수집 컨테이너\r\n- 메인 앱 + 프록시 컨테이너\r\n- 메인 앱 + 보조 처리 컨테이너\r\n\r\n___\r\n#### 🔷 핵심 특징\r\n##### 1) 네트워크 공유\r\n👉 같은 Pod 안 컨테이너끼리는 `localhost`로 접근 가능\r\nex:\r\n- 컨테이너 A가 8080 포트를 open\r\n- 컨테이너 B가 `http://localhost:8080` 접근 가능\r\n\r\n##### 2) 스토리지 공유\r\n👉 같은 Pod 안에서 동일한 volume을 mount하면 파일 공유 가능\r\nex:\r\n- 컨테이너 A가 `/shared`에 파일 생성\r\n- 컨테이너 B가 `/shared`에서 읽기 가능\r\n\r\n##### 3) 운명 공동체\r\n👉 Pod 단위로 스케줄링되고 관리\r\n- 같은 노드에 같이 뜸\r\n- 같이 삭제됨\r\n- 같이 재생서됨\r\n❌ 완전히 독립적인 앱끼리는 같은 Pod에 넣으면 안됨\r\n___\r\n\r\n#### ❓ 언제 같은 Pod에 넣고, 언제 분리하니?\r\n##### 같은 Pod에 넣는 경우\r\n- 서로 항상 같이 떠야 함\r\n- 강하게 연결되어 있음\r\n- localhost 통신이 필요함\r\n- 파일 공유가 필요함\r\n\r\n##### 분리해야 하는 경우\r\n- 각각 독립 배포가 필요함\r\n- 따로 스케일아웃 해야함\r\n- 장애 영향 분리가 필요함\r\n\r\nex:\r\n= `web + db`는 보통 같은 Pod에 안 넣음\r\n- `app + log-agent`는 같은 Pod 가능\r\n___\r\n\r\n#### 📖 기본 YAML 예제\r\n> 아래는 하나의 Pod 안에 nginx와 busybox를 같이 넣는 예제\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: multi-container-pod\r\nspec:\r\n  containers:\r\n    - name: nginx\r\n      image: nginx:1.25\r\n      ports:\r\n      - containerPort: 80\r\n\r\n    - name: side-tool\r\n      image: busybox:1.36\r\n      command: [\"sh\", \"-c\", \"while true; do echo hello from busybox; sleep 5; done\"]\r\n```\r\n##### 해석\r\n- `containers:` 아래에 두 개가 있음\r\n- `nginx` 컨테이너\r\n- `side-tool` 컨테이너\r\n\r\n#### 실습\r\n##### 생성\r\n```bash\r\nkubectl apply -f multi-container-pod.yaml\r\n```\r\n\r\n##### 확인\r\n```bash\r\nkubectl get pods\r\nkubectl describe pod multi-container-pod\r\n```\r\n\r\n##### 로그 보기 (컨테이너 지정 옵션 `-c`)\r\n```bash\r\nkubectl logs multi-container-pod -c nginx\r\nkubectl logs multi-container-pod -c side-tool\r\n```\r\n\r\n##### 특정 컨테이너 exec\r\n```bash\r\nkubectl exec -it multi-container-pod -c nginx -- sh\r\nkubectl exec -it multi-container-pod -c side-tool -- sh\r\n```\r\n___\r\n#### 🔴 Volume 구조 분석\r\n```yaml\r\nspec:\r\n  volumes:\r\n  - name: my-volume\r\n    emptyDir: {}\r\n\r\n  containers:\r\n  - name: app\r\n    image: nginx\r\n    volumeMounts:\r\n    - name: my-volume\r\n      mountPath: /data\r\n```\r\n1️⃣ `volumes` → Pod 레벨에서 \"저장공간 정의\" → 저장소 생성\r\n- `name`: 볼륨 이름 (✨ 연결할 때 사용)\r\n- `emptyDir`: Pod가 살아있는 동안 유지되는 임시 저장소\r\n  \r\n특징\r\n- Pod 안 모든 컨테이너가 접근 가능\r\n- Pod 삭제되면 데이터도 삭제됨\r\n\r\n2️⃣ `volumeMounts` → 컨테이너에서 \"어디에 붙일지\" 정의 → 컨테이너에 붙임\r\n- `name`: Volumes에서 만든 이름과 동일해야 함\r\n- `mountPath`: 컨테이너 내부 경로\r\n___\r\n#### 📖 Volume 공유 예제\r\n👉 하나의 컨테이너가 파일 쓰고, 다른 컨테이너가 읽게 해보는 것\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: shared-volume-pod\r\nspec:\r\n  volumes:\r\n  - name: shared-data\r\n    emptyDir: {}\r\n\r\n  containers:\r\n  - name: writer\r\n    image: busybox:1.36\r\n    command: [\"sh\", \"-c\", \"while true; do date >> /data/out.txt; sleep 5; done\"]\r\n    volumeMounts:\r\n    - name: shared-data\r\n      mountPath: /data\r\n  \r\n  - name: reader\r\n    image: busybox:1.36\r\n    command: [\"sh\", \"-c\", \"while true; do cat /data/out.txt; sleep 5; done\"]\r\n    volumeMounts:\r\n    - name: shared-data\r\n      mountPath: /data\r\n```\r\n\r\n##### ✨ 예제 설명\r\n- `empty` 볼륨 생성\r\n- `writer`와 `reader` 둘 다 `/data`에 mount\r\n- writer가 파일 생서\r\n- reader가 그 파일을 읽음\r\n\r\n즉, **같은 Pod 안 컨테이너끼리 파일 공유**가 가능\r\n___\r\n#### 🚫 주의할 점\r\n##### ❌ name 다르게 쓰는 경우\r\n```yaml\r\nvolumes:\r\n- name: data\r\n\r\nvolumeMounts:\r\n- name: data2   ❌\r\n```\r\n\r\n##### ❌ volumeMounts 안 쓰는 경우\r\n```yaml\r\nvolumes:\r\n- name: data\r\n```\r\n👉 의미 없음\r\n\r\n##### ❌ mountPath 안 쓰는 경우\r\n👉 컨테이너 내부에서 접근 불가\r\n"
  },
  {
    "title": "2-3_init container",
    "file": "category/cloud/kubernetes/2-3_init container.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Init Container\r\n#### 📖 개념\r\n👉 Init Container = \"메인 컨테이너 실행 전에 먼저 실행되는 컨테이너\"\r\n- Pod 안에 포함됨\r\n- 반드시 순서대로 실행됨\r\n- 하나라도 실패하면 → Pod 실행 안됨\r\n- 성공해야 다음 컨테이너 실행됨\r\n___\r\n#### 📌 사용 시점\r\n👉 Init Container는 \"준비 작업\" 담당\r\nex:\r\n1️⃣ 앱 실행 전에 데이터 준비\r\n- DB 연결 확인\r\n- config 파일 다운로드\r\n- 외부 API에서 데이터 가져오기\r\n\r\n2️⃣ 의존성 체크\r\n- 다른 서비스가 살아있는지 확인\r\n- ex) DB, Redis 기다리기\r\n\r\n3️⃣ 권한/환경 세팅\r\n- 디렉토리 생성\r\n- 파일 권한 변경\r\n\r\n___\r\n#### 📌 일반 컨테이너랑 차이\r\n| 구분 | Init Container | 일반 Container |\r\n|------|----------------|---------------|\r\n|실행시점|먼저 실행|이후 실행|\r\n|실행방식|순차 실행|병렬 실행|\r\n|재시작|실패 시 재시도|정책 따름|\r\n|역할|준비 작업|실제 서비스|\r\n___\r\n#### 📌 YAML 구조\r\n👉 `initContainers` 필드가 핵심\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: init-example\r\nspec:\r\n  initContainers:\r\n  - name: init-myservice\r\n    image: busybox\r\n    command: ['sh', '-c', 'echo init start && sleep 5']\r\n\r\n  containers:\r\n  - name: main-container\r\n    image: nginx\r\n```\r\n##### 🏃‍♂️‍➡️ 실행 흐름\r\n```text\r\n1. initContainers 실행\r\n2. 성공하면 다음 initContainer 실행 (여러 개면 순서대로)\r\n3. 전부 성공하면\r\n4. containers 실행 (메인 컨테이너)\r\n```\r\n___\r\n#### 🔴 정리\r\n👉 Init Container는 메인 컨테이너 실행 전에 필요한 준비 작업을 수행하는 컨테이너"
  },
  {
    "title": "2-4_sidecar 패턴",
    "file": "category/cloud/kubernetes/2-4_sidecar 패턴.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Sidecar 패턴\r\n#### 1️⃣ 정의\r\n**Sidecar 패턴 = 하나의 Pod 안에서 \"보조 역할 컨테이너\"를 붙이는 구조**\r\n- 메인 컨테이너: 실제 서비스\r\n- Sidecar 컨테이너: 보조 기능 담당\r\n\r\n👉 즉, **같은 Pod 안에서 협업하는 구조**\r\n___\r\n#### 2️⃣ 사용 이유\r\n메인 컨테이너를 수정하지 않고, 기능을 추가하기 위해\r\n대표적으로:\r\n- 로그 수집\r\n- 프록시\r\n- 보안\r\n- 데이터 동기화\r\n\r\n👉 **\"애플리케이션 코드는 건드리지 않고 기능 확장\"**\r\n___\r\n#### 3️⃣ 구조 이해\r\n```text\r\nPod\r\n ├── app container (main)\r\n └── sidecar container (helper)\r\n```\r\n✔️ 특징:\r\n- 같은 네트워크 (localhost 공유)\r\n- 같은 볼륨 공유 가능\r\n- 생명주기 같이 감 (같이 죽고 같이 살아남)\r\n___\r\n#### 4️⃣ 대표 사용 사례\r\n📌 1. 로그 수집 (제일 중요)\r\n- app → 파일로 로그 남김\r\n- sidecar → 그 파일 읽어서 외부로 전송\r\n\r\n📌 2. nginx 프록시\r\n- app 앞단에 nginx 붙여서\r\n- 로드밸런싱\r\n- SSL 처리\r\n\r\n📌 3. config reload\r\n- sidecar가 config 감시해서 변경되면 reload\r\n\r\n___\r\n#### 5️⃣ 예시 YAML\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: sidecar-pod\r\nspec:\r\n  containers:\r\n  - name: app\r\n    image: busybox\r\n    command: [\"sh\", \"-c\", \"while true; do echo hello >> /var/log/app.log; sleep 5; done\"]\r\n    volumeMounts:\r\n    - name: log-volume\r\n      mountPath: /var/log\r\n\r\n  - name: sidecar\r\n    image: busybox\r\n    command: [\"sh\", \"-c\", \"tail -f /var/log/app.log\"]\r\n    volumeMounts:\r\n    - name: log-volume\r\n      mountPath: /var/log\r\n\r\n  volumes:\r\n  - name: log-volume\r\n    emptyDir: {}\r\n```\r\n___\r\n#### 6️⃣ 핵심 포인트 정리\r\n✔️ Sidecar는 같은 Pod 안의 컨테이너\r\n✔️ 메인 기능을 보조하는 역할\r\n✔️ volume 공유해서 데이터 전달 많이 함\r\n✔️ lifecycle 동일 (같이 죽음)\r\n✔️ 대표: 로그 수집, 프록시, 보안\r\n___\r\n#### ⚠️ Init Container와 차이\r\n| 구분 | Sidecar | Init Container |\r\n|------|----------------|---------------|\r\n|실행시점|항상 같이 실행|시작 전에만 실행|\r\n|지속성|계속 살아있음|끝나면 종료|\r\n|용도|보조 기능|초기 세팅|\r\n\r\n❗**Sidecar는 특별한 문법이 있는 게 아니라 그냥 `containers`에 하나 더 추가하면 된다.**\r\n👉 **Sidecar = containers 배열에 그냥 하나 더 넣고, 역할만 보조로 쓰는 것**"
  },
  {
    "title": "3-1_Workload(Deployment, ReplicaSet)",
    "file": "category/cloud/kubernetes/3-1_Workload(Deployment, ReplicaSet).md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Workload(Deployment / ReplicaSet)\r\n#### 1️⃣ ReplicaSet\r\n역할 : Pod 개수를 유지하는 것\r\n- 지정한 개수만큼 Pod 유지\r\n- 죽으면 자동으로 다시 생성\r\n\r\n```yaml\r\napiVersion: apps/v1\r\nkind: ReplicaSet\r\nmetadata:\r\n  name: my-rs\r\nspec:\r\n  replicas: 3\r\n  selector:\r\n    matchLabels:\r\n      app: my-app\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: my-app\r\n    spec:\r\n      containers:\r\n      - name: nginx\r\n        image: nginx\r\n```\r\n👉 핵심 포인트\r\n- `replicas`: 유지할 Pod 개수\r\n- `selector`: 어떤 Pod를 관리할지\r\n- `template`: Pod 생성방식\r\n\r\n___\r\n#### 2️⃣ Deployment\r\n**ReplicaSet을 관리하는 상위 개녕**\r\n##### ✔️ 역할\r\n- ReplicaSet 생성/관리\r\n- Rolling Update\r\n- Rollback 가능\r\n\r\n```yaml\r\napiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: my-deploy\r\nspec:\r\n  replicas: 3\r\n\r\n  strategy:                # 👈 이게 핵심\r\n    type: RollingUpdate\r\n    rollingUpdate:\r\n      maxUnavailable: 1\r\n      maxSurge: 1\r\n\r\n  selector:\r\n    matchLabels:\r\n      app: my-app\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: my-app\r\n    spec:\r\n      containers:\r\n      - name: nginx\r\n        image: nginx\r\n```\r\n👉 구조가 정말 비슷하지만 Deployment에넌 **업데이트 전략**까지 포함. `spec.strategy` 필드 (Deployment에만 있고, ReplicaSet ❌)\r\n___\r\n#### Deployment vs ReplicaSet 차이\r\n|항목|ReplicaSet|Deployment|\r\n|-----|---------|----------|\r\n|목적|Pod 개수 유지|Pod+업데이트 관리|\r\n|사용여부|거의안씀|🔥필수|\r\n|업데이트|수동|자동 (Rolling Update)|\r\n|Rollback|없음|있음|\r\n___\r\n#### 4️⃣ Rolling Update\r\nDeployment의 핵심 기능\r\n👉 이미지 변경 시\r\n- 기존 Pod 죽이고\r\n- 새 Pod 점진적으로 생성\r\n\r\n```bash\r\nkubectl set image deployment my-deploy nginx-nginx:1.25\r\n```\r\n확인\r\n```bash\r\nkubectl rollout status deployment my-deploy\r\n```\r\n___\r\n#### 5️⃣ Rollback\r\n👉 배포 실패 시, 이전 버전으로 복구\r\n```bash\r\nkubectl rollout undo deployment my-deploy\r\n```"
  },
  {
    "title": "3-2_Rolling Update 전략",
    "file": "category/cloud/kubernetes/3-2_Rolling Update 전략.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Rolling Update 전략\r\n> Deployment는 기본적으로 이 전략을 사용\r\n\r\n👉 의미\r\n기존 Pod를 조금씩 줄이면서 새로운 Pod를 점진적으로 늘림\r\n___\r\n#### 1️⃣ 전략 구조\r\n```yaml\r\nstrategy:\r\n  type: RollingUpdate\r\n  rollingUpdate:\r\n    maxUnavailable: 1\r\n    maxSurge: 1\r\n```\r\n##### 🔴 maxUnavailable\r\n👉 \"동시에 죽어도 되는 Pod 수\"\r\n- 서비스 중단 허용 범위\r\n📖 예시\r\n- replicas: 3\r\n- maxUnavailable: 1\r\n\r\n➡️ Pod는 최대 1개까지 내려가도 됨 (기존 Pod: 3 → 2까지 감소 가능)\r\n\r\n##### 🟠 maxSurge\r\n👉 \"추가로 생성 가능한 Pod 수\"\r\n- 기존 개수보다 더 많이 생성 가능\r\n\r\n📖 예시\r\n- replicas: 3\r\n- maxSurge: 1\r\n\r\n➡️ 최대 4개까지 잠깐 늘어남(기존 3 + 신규 1 = 4)\r\n___\r\n#### ✅ 참고\r\n##### 🟨 비율(%)도 가능\r\n```yaml\r\nmaxUnavailable: 25%\r\nmaxSurge: 25%\r\n```\r\n👉 replicas=4면\r\n- maxUnavailable = 1\r\n- maxSurge = 1\r\n___\r\n#### 💡 한줄 정리\r\n👉 maxSurge = 더 만들 수 있는 수\r\n👉 maxUnavailable = 죽여도 되는 수"
  },
  {
    "title": "3-3_Deployment 실전 명령어",
    "file": "category/cloud/kubernetes/3-3_Deployment 실전 명령어.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Deployment 실전 명령어\r\n#### 0️⃣ Deployment 생성\r\n```bash\r\nkubectl create deployment my-deploy --image=nginx\r\n```\r\n\r\n#### 1️⃣ scale (Pod 개수 조절)\r\n```bash\r\nkubectl scale deployment my-deploy --replicas=5\r\n```\r\n👉 결과\r\n- Pod 개수 5개로 변경\r\n\r\n👉 확인\r\n```bash\r\nkubectl get pods\r\n```\r\n\r\n#### 2️⃣ set image (이미지 업데이트)\r\n```bash\r\nkubectl set image deployment my-deploy nginx=nginx:1.25\r\n```\r\n👉 의미\r\n- nginx 컨테이너 이미지를 변경\r\n- Rolling Update 자동 실행됨\r\n\r\n👉 중요 포인트\r\n- `nginx=nginx:1.25` → container이름:이미지\r\n\r\n#### 3️⃣ rollout status (배포 상태 확인)\r\n```bash\r\nkubectl rollout status deployment my-deploy\r\n```\r\n👉 결과\r\n- 업데이트 진행 상황 확인\r\n- 완료될 때까지 기다림\r\n\r\n#### 4️⃣ rollout history (이전 버전 확인)\r\n```bash\r\nkubectl rollout history deployment my-deploy\r\n```\r\n👉 출력 예시\r\n```text\r\nREVISION  CHANGE-CAUSE\r\n1         ...\r\n2         ...\r\n```\r\n\r\n#### 5️⃣ rollout undo(롤백)\r\n✔️ 직전 버전으로\r\n```bash\r\nkubectl rollout undo deployment my-deploy\r\n```\r\n✔️ 특정 버전으로\r\n```bash\r\nkubectl rollout undo deployment my-deploy --to-revision=1\r\n```\r\n\r\n#### 6️⃣ rollout pause / resume\r\n✔️ 배포 일시정지\r\n```bash\r\nkubectl rollout pause deployment my-deploy\r\n```\r\n✔️ 재개\r\n```bash\r\nkubectl rollout resume deployment my-deploy\r\n```"
  },
  {
    "title": "4-1_Service and Networking",
    "file": "category/cloud/kubernetes/4-1_Service and Networking.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Service & Networking\r\n#### 1️⃣ Service란?\r\n👉 Pod는 IP가 계속 바뀜 (재생성되면 변경됨)\r\n👉 그래서 **고정된 접근 지점**이 필요\r\n➡️ 그게 Service\r\n> Client → Service → Pod\r\n___\r\n\r\n#### 2️⃣ ClusterIP (기본값)\r\n##### ✔️ 특징\r\n- 클러스터 내부에서만 접근 가능\r\n- 외부에서는 접근 ❌\r\n- 기본 Service 타입\r\n\r\n##### ✔️ 사용 케이스\r\n- 내부 서비스 간 통신\r\n  - ex: backend → database\r\n\r\n##### ✔️ 예시 YAML\r\n```yaml\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  name: my-service\r\nspec:\r\n  type: ClusterIP   # 생략 가능 (기본값)\r\n  selector:\r\n    app: my-app\r\n  ports:\r\n    - port: 80\r\n      targetPort: 8080\r\n```\r\n👉 `port`: 서비스 포트\r\n👉 `targetPort`: Pod 포트\r\n___\r\n\r\n#### 3️⃣ NodePort\r\n##### ✔️ 특징\r\n- 외부에서 접근 가능\r\n- Node IP + Port로 접근\r\n\r\n```text\r\nhttp://NodeIP:NodePort\r\n```\r\n##### ✔️ 포트 범위\r\n- 30000 ~ 32767\r\n\r\n##### ✔️ 예시 YAML\r\n```yaml\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  name: my-nodeport\r\nspec:\r\n  type: NodePort\r\n  selector:\r\n    app: my-app\r\n  ports:\r\n    - port: 80\r\n      targetPort: 8080\r\n      nodePort: 30007\r\n```\r\n\r\n##### ✔️ 핵심 포인트\r\n- 모든 Node에 포트 열림\r\n- Node 어디로 들어와도 Pod로 라우팅됨\r\n\r\n___\r\n#### 4️⃣ LoadBalancer\r\n##### ✔️ 특징\r\n- 클라우드 환경에서 사용 (AWS, GCP 등)\r\n- 외부 Load Balancer 생성됨\r\n- **외부 IP 자동 할당**\r\n\r\n##### ✔️ 접근 방식\r\n```text\r\nhttp://External-IP\r\n```\r\n\r\n##### ✔️ 예시 YAML\r\n```yaml\r\napiVersion: v1\r\nkind: Service\r\nmetadata:\r\n  name: my-lb\r\nspec:\r\n  type: LoadBalancer\r\n  selector:\r\n    app: my-app\r\n  ports:\r\n    - port: 80\r\n      targetPort: 8080\r\n```\r\n___\r\n#### 💡흐름 이해\r\n```text\r\nLoadBalancer → NodePort → ClusterIP → Pod\r\n```"
  },
  {
    "title": "4-2_DNS and Ingress",
    "file": "category/cloud/kubernetes/4-2_DNS and Ingress.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 DNS & Ingress\r\n#### 1️⃣ Kubernetes DNS\r\n##### ✔️ 개념\r\n👉 Service를 이름으로 접근하게 해주는 기능\r\n```text\r\nhttp://서비스이름\r\n```\r\n👉 내부적으로는 **CoreDNS**가 처리\r\n\r\n##### ✔️ Service DNS 구조\r\n```text\r\n<service-name>.<namespace>.svc.cluster.local\r\n```\r\n\r\n##### ✔️ 예시\r\n```text\r\nmy-service.default.svc.cluster.local\r\n```\r\n👉 하지만 보통은 ↓ 이렇게만 씀\r\n```text\r\nhttp://my-service\r\n```\r\n\r\n##### ✔️ 핵심 포인트\r\n- Pod IP 몰라도 됨\r\n- Service 이름으로 통신\r\n- namespace 다르면 FQDN 필요\r\n\r\n___\r\n#### 2️⃣ Ingress\r\n##### ✔️ 개념\r\n👉 외부 요청을 내부 Service로 라우팅하는 규칙\r\n- NodePort → 포트 기반 접근\r\n- Ingress → 도메인 / 경로 기반 접근\r\n\r\n##### ✔️ 흐름\r\n```text\r\nClient → Ingress → Service → Pod\r\n```\r\n___\r\n\r\n##### ✔️ 필요한 이유?\r\nNodePort 방식은 아래와 같은 문제가 있음\r\n```text\r\nhttp://nodeip:30001 → A 서비스\r\nhttp://nodeip:30002 → B 서비스\r\n```\r\n👉 포트를 기억애햐 함\r\n\r\nIngress 쓰면 ↓\r\n```text\r\nhttp://api.my.com → A 서비스\r\nhttp://shop.my.com → B 서비스\r\n```\r\n👉 훨씬 현실적인 구조\r\n___\r\n#### 3️⃣ Ingree YAML\r\n##### ✔️ 기본 예제\r\n```yaml\r\napiVersion: networking.k8s.io/v1\r\nkind: Ingress\r\nmetadata:\r\n  name: my-ingress\r\nspec:\r\n  rules:\r\n  - host: my-app.com\r\n    http:\r\n      paths:\r\n      - path: /\r\n        pathType: Prefix\r\n        backend:\r\n          service:\r\n            name: my-service\r\n            port:\r\n              number: 80\r\n```\r\n##### ✔️ path 기반 라우팅\r\n```yaml\r\npaths:\r\n- path: /api\r\n  pathType: Prefix\r\n  backend:\r\n    service:\r\n      name: api-service\r\n      port:\r\n        number: 80\r\n```\r\n👉 `/api` 요청만 해당 서비스로 감\r\n___\r\n\r\n#### 4️⃣ Ingress Controller\r\n👉 Ingress는 **리소스 정의만 하는 것**\r\n👉 실제 동작하려면:\r\n- Controller 필요\r\n대표적으로: \r\n- nginx ingress controller\r\n\r\n___\r\n\r\n#### 🔥 핵심 정리\r\n##### DNS\r\n- Service 이름으로 접근\r\n- 내부 통신 필수 개념\r\n\r\n##### Ingress\r\n- 외부 → 내부 라우팅\r\n- 도메인 / path 기반\r\n- Controller 필요\r\n\r\n##### Service vs Ingress 차이\r\n- Service → Pod 연결\r\n- Ingress → 외부 트래픽 라우팅"
  },
  {
    "title": "5-1_Config 관리",
    "file": "category/cloud/kubernetes/5-1_Config 관리.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Config 관리\r\n#### 1️⃣ ConfigMap\r\n👉 민감하지 않은 설정값 저장용\r\nex:\r\n- DB_HOST\r\n- LOG_LEVEL\r\n- API_URL\r\n\r\n##### ✔️ ConfigMap 생성\r\n```bash\r\nkubectl create configmap app-config \\ --from-literal=DB_HOST=mysql \\ --from-literal-LOG_LEVEL=debug\r\n```\r\n\r\n##### ✔️ YAML 방식\r\n```yaml\r\napiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  name: app-config\r\ndata:\r\n  DB_HOST: mysql\r\n  LOG_LEVEL: debug\r\n```\r\n___\r\n\r\n#### 2️⃣ Pod에서 ConfigMap 사용\r\n##### ✔️ 방법 1: 환경변수로 주입\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: configmap-env-pod\r\nspec:\r\n  containers:\r\n  - name: app\r\n    image: nginx\r\n    env:\r\n    - name: DB_HOST\r\n      valueFrom:\r\n        configMapKeyRef:\r\n          name: app-config\r\n          key: DB_HOST\r\n```\r\n👉 컨테이너 내부에서는 `echo $DB_HOST`로 사용 가능\r\n\r\n##### ✔️ 방법 2: 전체 env 가져오기\r\n```yaml\r\nenvFrom:\r\n- configMapRef:\r\n    name: app-config\r\n```\r\n👉 모든 key 자동 주입됨\r\n\r\n##### ✔️ 방법 3: Volume으로 마운트\r\n```yaml\r\nvolumes:\r\n- name: config-volume\r\n  configMap:\r\n    name: app-config\r\n\r\ncontainers:\r\n- name: app\r\n  image: nginx\r\n  volumeMounts:\r\n  - name: config-volume\r\n    mountPath: /etc/config\r\n```\r\n👉 결과:\r\n```text\r\n/etc/config/DB_HOST\r\n/etc/config/LOG_LEVEL\r\n```\r\n___\r\n\r\n#### 3️⃣ Secret (민감정보 관리)\r\n👉 비밀번호, 토큰 같은 것\r\n- base64로 저장됨 (암호화 X, 인코딩 O)\r\n\r\n##### ✔️ Secret 생성\r\n```bash\r\nkubectl create secret generic db-secret \\ --from-literal=DB_PASSWORD=1234\r\n```\r\n\r\n##### ✔️ YAML\r\n```yaml\r\napiVersion: v1\r\nkind: Secret\r\nmetadata:\r\n  name: db-secret\r\ntype: Opaque\r\ndata:\r\n  DB_PASSWORD: MTIzNA==   # base64(1234)\r\n```\r\n___\r\n\r\n#### 4️⃣ Pod에서 Secret 사용\r\n##### ✔️ 환경변수\r\n```yaml\r\nenv:\r\n- name: DB_PASSWORD\r\n  valueFrom:\r\n    secretKeyRef:\r\n      name: db-secret\r\n      key: DB_PASSWORD\r\n```\r\n##### ✔️ Volume\r\n```yaml\r\nvolumes:\r\n- name: secret-volume\r\n  secret:\r\n    secretName: db-secret\r\n```\r\n"
  },
  {
    "title": "6-1_Storage",
    "file": "category/cloud/kubernetes/6-1_Storage.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Storage (Volume / PV / PVC)\r\n#### 📦 Volume\r\n👉 왜 필요할까?\r\nPod는 **휘발성(ephemeral)** 이라서 컨테이너 재시작되면 데이터가 날아감.\r\n\r\n➡️ 그래서 **데이터를 유지하려고 Volume 사용**\r\n\r\n👉 구조\r\n```text\r\nContainer ↔ Volume ↔ Storage\r\n```\r\n\r\n👉 가장 기본 예제(emtyDir)\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: volume-pod\r\nspec:\r\n  containers:\r\n  - name: app\r\n    image: nginx\r\n    volumeMounts:\r\n    - name: data-volume\r\n      mountPath: /data\r\n\r\n  volumes:\r\n  - name: data-volume\r\n    emptyDir: {}\r\n```\r\n\r\n👉 핵심 포인트\r\n- `volumes` : Pod 전체에서 정의\r\n- `volumeMounts` : 컨테이너에서 연결\r\n- `mountPath` : 컨테이너 내부 경로\r\n\r\n👉 emptyDir 특징\r\n- Pod 생성 시, 생성\r\n- Pod 삭제 시 같이 삭제\r\n- **임시 데이터용**\r\n\r\n___\r\n\r\n#### 📦 Persistent Volume (PV)\r\n👉 클러스터가 관리하는 실제 저장소\r\n➡️ Pod랑 직접 연결 안함\r\n\r\n##### 👉 개념\r\n```text\r\n[ 실제 디스크 / NFS / 클라우드 스토리지 ] = PV\r\n```\r\n\r\n##### 👉 특징\r\n- 관리자(Cluster)가 생성\r\n- Pod와 독립적\r\n- 재사용 가능\r\n\r\n##### 👉 예시\r\n```yaml\r\napiVersion: v1\r\nkind: PersistentVolume\r\nmetadata:\r\n  name: pv-test\r\nspec:\r\n  capacity:\r\n    storage: 1Gi\r\n  accessModes:\r\n    - ReadWriteOnce\r\n  hostPath:\r\n    path: /tmp/data\r\n```\r\n___\r\n\r\n#### Persistent Volume Claim (PVC)\r\n👉 Pod가 \"스토리지 주세요\" 요청하는 객체\r\n\r\n##### 👉 구조 핵심\r\n```text\r\nPod → PVC → PV → 실제 스토리지\r\n```\r\n\r\n##### 👉 예시\r\n```yaml\r\napiVersion: v1\r\nkind: PersistentVolumeClaim\r\nmetadata:\r\n  name: pvc-test\r\nspec:\r\n  accessModes:\r\n    - ReadWriteOnce\r\n  resources:\r\n    requests:\r\n      storage: 500Mi\r\n```\r\n\r\n##### 👉 연결과정\r\n1. PVC 생성\r\n2. 조건 맞는 PV 자동 매칭\r\n3. Pod에서 PVC 사용\r\n\r\n___\r\n\r\n#### 📦 Pod에서 PVC 사용\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: pvc-pod\r\nspec:\r\n  containers:\r\n  - name: app\r\n    image: nginx\r\n    volumeMounts:\r\n    - name: pvc-volume\r\n      mountPath: /data\r\n\r\n  volumes:\r\n  - name: pvc-volume\r\n    persistentVolumeClaim:\r\n      claimName: pvc-test\r\n```\r\n\r\n___\r\n#### 🔥 핵심정리\r\n✔️ Volume = Pod 내부 임시 저장\r\n✔️ PV = 실제 저장소 (관리자 영역)\r\n✔️ PVC = 사용자 요청 (Pod가 사용)\r\n\r\n##### 👉 한 줄 흐름\r\n```text\r\nPod → PVC → PV → Storage\r\n```"
  },
  {
    "title": "7-1_Resource 관리",
    "file": "category/cloud/kubernetes/7-1_Resource 관리.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🔥 Resource 관리\r\n#### 1️⃣ request / limits 개념\r\n쿠버네티스는 Pod가 얼마나 CPU / 메모리를 쓸지 미리 선언\r\n✔️ **requests (최소 보장 자원)**\r\n- \"이 정도는 꼭 필요\"\r\n- 스케줄러가 **Pod를 어느 Node에 배치할지 결정할 때 사용**\r\n\r\n✔️ **limits (최대 사용 제한)\r\n- \"이 이상은 못 씀\"\r\n- zjsxpdlsjrk 자원을 과다하게 사용하면 제한 걸림\r\n\r\n##### 💠 CPU / Memory 동작 차이\r\n|자원|requests|limits|\r\n|---|------|------|\r\n|CPU|최소 보장|초과 시 throttling (속도 제한)|\r\n|Memory|최소 보장|초과 시 OOMKill(죽음🔥)|\r\n\r\n👉 **메모리 limits 넘으면 그냥 컨테이너 Dow!!**\r\n\r\n##### 💠 YAML 예시\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: resource-pod\r\nspec:\r\n  containers:\r\n  - name: app\r\n    image: nginx\r\n    resources:\r\n      requests:\r\n        memory: \"64Mi\"\r\n        cpu: \"250m\"\r\n      limits:\r\n        memory: \"128Mi\"\r\n        cpu: \"500m\"\r\n```\r\n\r\n✔️ 단위 설명\r\n- CPU : `1000m = 1 CPU` `250m = 0.25 CPU`\r\n- Memory : `Mi`, `Gi` 사용"
  },
  {
    "title": "q1",
    "file": "category/cloud/kubernetes/questions/pod/q1.md",
    "category": [
      "Cloud",
      "Kubernetes",
      "Questions",
      "Pod"
    ],
    "categoryPath": "category/cloud/kubernetes/questions/pod",
    "content": "### ❓문제 1\r\n다음 조건을 만족하는 Pod를 생성하라\r\n- Pod  이름 : `nginx-pod`\r\n- 이미지 : `nginx`\r\n- 라벨 : `app=web`\r\n\r\n👉 생성 후 실행 상태인지 확인하라.\r\n___\r\n### ➡️ 내 답변\r\n```bash\r\nkubectl run nginx-pod --image=nginx --dry-run=client -o yaml > nginx-pod.yaml\r\n\r\n```\r\n\r\n이걸로 yaml 샘플본을 하나 만들고,\r\n\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  labels:\r\n    run: nginx-pod\r\n  name: nginx-pod # → name: app-web으로 수정함.\r\nspec:\r\n  containers:\r\n  - image: nginx\r\n    name: nginx-pod\r\n    resources: {}\r\n  dnsPolicy: ClusterFirst\r\n  restartPolicy: Always\r\nstatus: {}\r\n```\r\n\r\n주석을 달아놓은 것처럼 metadata.name을 app-web으로 수정했다.\r\n(문제를 잘못 읽음...)\r\n\r\n그래서 문제 요구사항 중, Pod명 + 라벨 모두 틀렸다...\r\n___\r\n### ✅ 정답\r\n```yaml\r\napiVersion: v1\r\nkind: Pod\r\nmetadata:\r\n  name: nginx-pod\r\n  labels:\r\n    app: web\r\nspec:\r\n  containers:\r\n  - name: nginx\r\n    image: nginx\r\n```\r\n```bash\r\nkubectl apply -f nginx.yaml\r\n```\r\n___\r\n### 📖 피드백\r\n#### 💡 Label의 역할\r\n👉 리소스를 구분하고 선택하기 위한 태그\r\n- Pod, Deployment 등에 붙이는 이름표\r\n- Kubernetes가 이걸 보고 대상을 찾음\r\n\r\n___\r\n### 📌 대표적인 사용 예\r\n#### 1️⃣ Service가 Pod 찾을 때\r\n```yaml\r\nlabels:\r\n  app: web\r\n```\r\nService:\r\n```yaml\r\nselector:\r\n  app: web\r\n```\r\n👉 의미\r\n> \"app=web 라벨 붙은 Pod들한테 트래픽 보내라\"\r\n___\r\n\r\n#### 2️⃣ Deployment가 Pod 관리할 때\r\nDeployment:\r\n```yaml\r\nselector:\r\n  matchLabels:\r\n    app: web\r\n```\r\n👉 의미\r\n> \"내가 관리할 Pod는 app=web\"\r\n>\r\n___\r\n#### 3️⃣ kubectl로 필터링\r\n```bash\r\nkubectl get pods -l app=web\r\n```\r\n👉 특정 Pod만 조회 가능\r\n\r\n___\r\n### 📊 핵심 정리\r\n|개념|설명|\r\n|-----------|-------------|\r\n|Label|리소스에 붙이는 key-value 태그|\r\n|Selector|Label로 대상 선택하는 조건|\r\n|목적|그룹핑 + 연결|\r\n\r\n👉 Label → Kubernetes에서 \"누구인지 식별하는 기준\""
  },
  {
    "title": "README",
    "file": "category/cloud/kubernetes/README.md",
    "category": [
      "Cloud",
      "Kubernetes"
    ],
    "categoryPath": "category/cloud/kubernetes",
    "content": "## 🧭 CKAD 목표 커리큘럼 (전체 로드맵)\r\n### 0️⃣ 환경 구축\r\nWSL2 + Ubuntu\r\nDocker Desktop\r\nk3d\r\nkubectl\r\n\r\n### 1️⃣ Kubernetes 기본 개념\r\n아키텍처 (Control Plane / Node)\r\n핵심 컴포넌트\r\nYAML 구조\r\n\r\n### 2️⃣ Pod (🔥 핵심)\r\nPod 개념\r\nYAML 작성\r\nkubectl 명령어\r\nMulti Container Pod\r\nInit Container\r\nSidecar 패턴\r\n\r\n### 3️⃣ Workload (Deployment / ReplicaSet)\r\nDeployment\r\nReplicaSet\r\nRolling Update\r\nRollback\r\n\r\n### 4️⃣ Service & Networking\r\nClusterIP\r\nNodePort\r\nLoadBalancer\r\nDNS\r\nIngress\r\n\r\n### 5️⃣ Config 관리\r\nConfigMap\r\nSecret\r\n환경변수 주입\r\nVolume mount\r\n\r\n### 6️⃣ Storage\r\nVolume\r\nPV / PVC\r\n\r\n### 7️⃣ Resource 관리\r\nrequests / limits\r\nHPA (Auto Scaling)\r\n\r\n### 8️⃣ Scheduling\r\nnodeSelector\r\naffinity / anti-affinity\r\ntaint / toleration\r\n\r\n### 9️⃣ Lifecycle & Health Check\r\nlivenessProbe\r\nreadinessProbe\r\n\r\n### 🔟 보안\r\nServiceAccount\r\nRBAC\r\nSecurityContext\r\n\r\n### 1️⃣1️⃣ Troubleshooting (🔥🔥🔥)\r\nlogs\r\ndescribe\r\nexec\r\n이벤트 분석\r\n\r\n### 1️⃣2️⃣ CKAD 실전 대비\r\n시간 단축 전략\r\nYAML 빠르게 작성\r\n문제 풀이"
  }
];
window.BLOG_FEATURED_FILES = [
  "category/cloud/kubernetes/README.md",
  "category/cloud/kubernetes/1-1_k8s 기초.md",
  "category/cloud/kubernetes/3-2_Rolling Update 전략.md",
  "category/cloud/kubernetes/4-1_Service and Networking.md"
];
