# Vue CLI

### 1. Vue 설치 및 세팅



### 2. 프로젝트 생성

#### 프로젝트의 폴더구성

`node_modules`

`package.json`

node_modules 안에 어떤 걸 설치해야 되는지 (주문서 같은 기능)

`public`

기본이 되는 `index.html`

`src`

`components`,  `views`, `assets`(이미지파일 등)

`main.js`

프로젝트를 구동시켜줌

`router.js`

라우터 조절

`store.js`

전역상태값을 조절

`App.vue`

기본이 되는 값



### 3. plugins(feat.vuetify)

- Vue에서 공식적으로 제공하는 플러그인
  - @vue.cli-plugin ...
- npm 등에서 배포되어있는 모듈
  - vue-cli-plugin-..

- Vuetify -> bootstrap 같은 기능 제공

- Vue를 위한 것, 컴포넌트 기반
- 아래 명령어를 통해 vuetify 스러운 페이지 만들기

```bash
vue add vuetify
```

### 

### 4. Vue File

#### `App.vue`

`<template>`

html 코드가 들어감

`<script>`

ES6에서 모듈을 추출하는 방식 중 하나인 `export default` 로 모듈을 추출

`data()` 

컴포넌트를 만들어서 사용할 때는 함수 형태로 데이터를 선언

이외 여러가지 변수

이외에 `methods:{}`,`computed:{}`  등 선언해서 사용할 수 있음.

#### `main.js`

`import` 들

`new Vue` 뷰를 새로 선언

선언된 뷰를 통해 전체 어플리케이션이 구동됨.

#### `import`와 `export`

실제 배포를 위해서는 `npm run build`

만약 배포를 하게 되면 `dist`라는 폴더 안에 `js` 폴더가 생성되고, 안에 매우 긴 js 코드들이 생성되는데 이건 우리가 만들었던 home이나 app 등이 조립된 결과라고 생각하면 됨.



`App.vue`에서

```vue
<template>
  <h1>{{title}}</h1>
</template>

<script>
  export default {
    data(){
      return {
        title : "안녕하세요"
      }
    }
  }
</script>
```

하고 서버를 구동하면 안녕하세요라고 뜨며 잘 바인딩 된 것을 볼 수 있다.

template 안에서, 제일 바깥쪽에서는 하나의 태그만 있어야 에러가 발생하지 않는다.

예를 들어

```vue
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
  </div>
</template>
```

이런 식으로 묶어줘야함.

```vue
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count ++">추가</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title : "안녕하세요",
        count: 1
      }
    }
  }
</script>
```

이런식으로 `App.vue` 에서 모든 기능들을 쓰는 것은 cdn으로 vue를 import 시켜서 한 파일 내에서 모든 기능들을 작성하는 것과 다르지 않다. 그렇다면 cli 내에서 만든 개발환경에서는 각각의 vue 파일을 어떻게 관리하고 어떻게 사용할 수 있는지 알아보자.



### 3. 컴포넌트의 생성 및 사용

#### 첫번째 방법

`App.vue`와 같은 위치에 `Home.vue`라는 파일 생성

```vue
<template>
  <div>
    <h1>{{homeTitle}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        homeTitle:"홈 입니다."
      }
    }
  }
</script>
```

그리고 `App.vue`로 돌아와서 작업

홈컴포넌트를 `import`로 가져왔는데 컴포넌트를 사용하기 위해서는 `export` 안에서 이거는 컴포넌트야! 라고 선언해줘야함.

```vue
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  // 외부의 뷰 파일을 안에 가져오기 위한 규격 import
  import HomeComponent from './Home.vue' //컴포넌트명, 상대위치

  export default {
    // 컴포넌트 선언해주기
    components:{
      HomeComponent //위에서 지정한 컴포넌트 가져오기
    },
    data(){
      return {
        title : "안녕하세요",
        count: 1
      }
    }
  }
</script>
```

#### 두번째 방법

하나의 파일을 하나의 파일에서 불러오는 형태가 아니라 전역에서 컴포넌트를 사용할 수 있게 선언해주는 형태

다시 같은 위치에 `Status.vue` 만들기

```vue
<template>
  <h2>{{title}}</h2>
</template>

<script>
  export default {
    data (){
      return {
        title : "상태 좋습니다."
      }
    }
  }
</script>

```

`App.vue`파일에서 `Status.vue`파일을 쓰고싶은데 status 파일이 app 파일에서만 쓰이는게 아니라 여러 다른 파일에서도 쓰인다면? 매번 다른 파일에서 넣어주는 것은 비효율적인 방법.

이럴땐 `main.js`에서 컴포넌트를 전역으로 선언해주고 사용한다.

```js
import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
// 새로운 StatusComponents 선언해주기
import StatusComponents from './Status.vue'

// Vue.component('컴포넌트명', 옵션)
// main.js에서 선언해준 AppStatus 라는 컴포넌트는 어디서든 사용가능하다
Vue.component('AppStatus', StatusComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

어디서든 사용가능한가 확인

예로, `App.vue`에 `<AppStatus></AppStatus>` 추가하고

```vue
<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
    <AppStatus></AppStatus>
  </div>
</template>
```

`Home.vue`에도 추가하면

```vue
<template>
  <div>
    <AppStatus></AppStatus>
    <h1>{{homeTitle}}</h1>
  </div>
</template>
```

사이트에 

# 안녕하세요

1

## 상태 좋습니다.

# 홈 입니다.

## 상태 좋습니다.

라고 나옴!!

