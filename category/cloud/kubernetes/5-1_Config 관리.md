## 🔥 Config 관리
#### 1️⃣ ConfigMap
👉 민감하지 않은 설정값 저장용
ex:
- DB_HOST
- LOG_LEVEL
- API_URL

##### ✔️ ConfigMap 생성
```bash
kubectl create configmap app-config \ --from-literal=DB_HOST=mysql \ --from-literal-LOG_LEVEL=debug
```

##### ✔️ YAML 방식
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: mysql
  LOG_LEVEL: debug
```
___

#### 2️⃣ Pod에서 ConfigMap 사용
##### ✔️ 방법 1: 환경변수로 주입
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: configmap-env-pod
spec:
  containers:
  - name: app
    image: nginx
    env:
    - name: DB_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: DB_HOST
```
👉 컨테이너 내부에서는 `echo $DB_HOST`로 사용 가능

##### ✔️ 방법 2: 전체 env 가져오기
```yaml
envFrom:
- configMapRef:
    name: app-config
```
👉 모든 key 자동 주입됨

##### ✔️ 방법 3: Volume으로 마운트
```yaml
volumes:
- name: config-volume
  configMap:
    name: app-config

containers:
- name: app
  image: nginx
  volumeMounts:
  - name: config-volume
    mountPath: /etc/config
```
👉 결과:
```text
/etc/config/DB_HOST
/etc/config/LOG_LEVEL
```
___

#### 3️⃣ Secret (민감정보 관리)
👉 비밀번호, 토큰 같은 것
- base64로 저장됨 (암호화 X, 인코딩 O)

##### ✔️ Secret 생성
```bash
kubectl create secret generic db-secret \ --from-literal=DB_PASSWORD=1234
```

##### ✔️ YAML
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  DB_PASSWORD: MTIzNA==   # base64(1234)
```
___

#### 4️⃣ Pod에서 Secret 사용
##### ✔️ 환경변수
```yaml
env:
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: db-secret
      key: DB_PASSWORD
```
##### ✔️ Volume
```yaml
volumes:
- name: secret-volume
  secret:
    secretName: db-secret
```
