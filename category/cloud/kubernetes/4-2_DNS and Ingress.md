## 🔥 DNS & Ingress
#### 1️⃣ Kubernetes DNS
##### ✔️ 개념
👉 Service를 이름으로 접근하게 해주는 기능
```text
http://서비스이름
```
👉 내부적으로는 **CoreDNS**가 처리

##### ✔️ Service DNS 구조
```text
<service-name>.<namespace>.svc.cluster.local
```

##### ✔️ 예시
```text
my-service.default.svc.cluster.local
```
👉 하지만 보통은 ↓ 이렇게만 씀
```text
http://my-service
```

##### ✔️ 핵심 포인트
- Pod IP 몰라도 됨
- Service 이름으로 통신
- namespace 다르면 FQDN 필요

___
#### 2️⃣ Ingress
##### ✔️ 개념
👉 외부 요청을 내부 Service로 라우팅하는 규칙
- NodePort → 포트 기반 접근
- Ingress → 도메인 / 경로 기반 접근

##### ✔️ 흐름
```text
Client → Ingress → Service → Pod
```
___

##### ✔️ 필요한 이유?
NodePort 방식은 아래와 같은 문제가 있음
```text
http://nodeip:30001 → A 서비스
http://nodeip:30002 → B 서비스
```
👉 포트를 기억애햐 함

Ingress 쓰면 ↓
```text
http://api.my.com → A 서비스
http://shop.my.com → B 서비스
```
👉 훨씬 현실적인 구조
___
#### 3️⃣ Ingree YAML
##### ✔️ 기본 예제
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: my-app.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-service
            port:
              number: 80
```
##### ✔️ path 기반 라우팅
```yaml
paths:
- path: /api
  pathType: Prefix
  backend:
    service:
      name: api-service
      port:
        number: 80
```
👉 `/api` 요청만 해당 서비스로 감
___

#### 4️⃣ Ingress Controller
👉 Ingress는 **리소스 정의만 하는 것**
👉 실제 동작하려면:
- Controller 필요
대표적으로: 
- nginx ingress controller

___

#### 🔥 핵심 정리
##### DNS
- Service 이름으로 접근
- 내부 통신 필수 개념

##### Ingress
- 외부 → 내부 라우팅
- 도메인 / path 기반
- Controller 필요

##### Service vs Ingress 차이
- Service → Pod 연결
- Ingress → 외부 트래픽 라우팅