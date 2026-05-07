## 🔥 YAML 구조
#### 📖 기본 예제
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-nginx
spec:
  containers:
    - name: nginx
      image: nginx
```
#### `apiVersion: v1`
👉 이 리소스를 어떤 Kubernetes API 버전 형식으로 해석할지 나타내는 필드
- `v1`은 가낭 기본적인 API 버전
- Pod, Service 같은 기본 리소스에서 자주 씀

#### `kind: Pod`
👉 YAML이 어떤 종류의 리소스인지 나타내는 필드
예시에서는 `Pod`.
다른 예:
- Deployment
- Service
- ConfigMap
- Secret

#### `metadata`
👉 리소스의 이름, 라벨, 네임스페이스 같은 부가정보를 넣는 곳
##### `metadata.name: my-nginx`
👉 현재 생성할 Pod의 이름
즉, `name`은 kubectl로 다룰 때 기준이 되는 이름

#### `spec`
👉 리소스가 어떻게 동작하게 할지 정하는 곳
ex) Pod
- 어떤 컨테이너를 띄울지
- 어떤 이미지 쓸지
- 포트는 뭘 쓸지
- 환경변수는 뭘 넣을지
- 볼륨은 뭘 붙일지

#### `containers`
👉 Pod 안에 들어갈 컨테이너 목록
Pod 안에는 컨테이너가 1개 이상일 수 있다.
그래서 `containers:` 다음에 단일 필드가 아닌 리스트 형태로 들어감

##### `- name: nginx`
`-` → 리스트의 첫 번째 항목이라는 뜻
```yaml
containers:
  - name: nginx
    image: nginx
```
> containers 목록 안에 컨테이너 하나가 있고, 그 컨테이너 이름은 nginx

##### `imageL nginx`
👉 이 컨테이너를 어떤 이미지로 실행할지 나타내는 필드
> 예시에서는 Docker Hub의 `nginx` 이미지를 사용하겠다는 뜻
___
#### 🦴 Kubernetes YAML에서 자주 보게 되는 공통 뼈대
```yaml
apiVersion: ...
kind: ...
metadata:
  name: ...
spec:
  ...
```
- `apiVersion`: 어떤 규칙인지
- `kind`: 무슨 리소스인지
- `metadata`: 이름/부가정보
- `spec`: 실제 동작 설정