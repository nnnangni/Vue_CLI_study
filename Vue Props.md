# 부모-자식간의 데이터 전달 Props

#### 데이터와 바인딩

```vue
<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'뷰제이에스'
    }
  }
}
</script>

```

#### 이름 변경하는 버튼

```vue
<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <button @click="changeName()">이름 변경</button>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'뷰제이에스'
    }
  },
  methods :{
    changeName (){
      this.name = "Nawon"
    }
  }
}
</script>
```

##### Vuetify를 활용하여 버튼 만들기

```vue
    <!-- <button @click="changeName()">이름 변경</button> -->
    <v-btn @click="changeName()">이름 변경</v-btn>
```

#### 부모의 데이터를 자식컴포넌트에 전달해주기 - props 사용

1. 부모에게서 전달하고자 하는 값을 v-bind를 통해 전달해주기

   부모 컴포넌트

```vue
<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <!-- <button @click="changeName()">이름 변경</button> -->
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <!-- 자식 컴포넌트에 v-bind를 사용해서 데이터 전달 -->
        <!-- 왼쪽에 자식에세 선언되는 props의 변수명, 오른쪽 변수에 어떤 값을 넣어줄 것인가 -->
        <!-- 부모컴포넌트의 name이라는 값을 nameOfChild에 넣어줄게 -->
        <UserDetail :nameOfChild="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'뷰제이에스'
    }
  },
  methods :{
    changeName (){
      this.name = "Nawon"
    }
  }
}
</script>

```

2. 자식컴포넌트에서 prop를 사용해서 값 받아주기

```vue
<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
  </div>
</template>

<script>
export default {
  // 부모컴포넌트의 변수명 써주기
  props:['nameOfChild'],
  data (){
    return {
      
    }
  }
}
</script>
```

=> 부모의 값이 바뀌면 자식의 값도 변경됨



# Props의 활용

#### 오브젝트 활용

부모

```vue
<UserDetail :nameOfChild="{name:'Nawon', familyName:'Park'}"></UserDetail>
```

자식

```vue
    <p>{{ nameOfChild.name }}</p>
    <p>{{ nameOfChild.familyName }}</p>
```

props는 숫자나, 오브젝트나 스트링 등 어떤 형태의 타입도 들어올 수 있음.



우리는 매우 많은 컴포넌트를 조립해서 웹서비스를 만들게 될텐데 여러 컴포넌트를 불러오다 보면 여러 컴포넌트들에서 이 props 저 props을 쓰면 props가 어떤 값을 받아올 것인지 혼동이 온다. 

-> props를 기록해서 어떤 데이터 형태가 들어와야 하는 지 기록하게 한다.

```javascript
  // 부모 컴포넌트에서 이미 값을 가져왔기 때문에 값이 아닌 데이터 타입을 써준다
  props:{
    nameOfChild : Object
  },
```

예를 들어 오브젝트 타입인 props를 string으로 잘못 적게 되면 에러메시지를 통해 어디서 잘못된 부분이 있는지 찾을 수 있다.

#### props에 데이터 타입 외에 다른 상세기능 남기기

부모

```vue
<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <!-- <button @click="changeName()">이름 변경</button> -->
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <!-- 자식 컴포넌트에 v-bind를 사용해서 데이터 전달 -->
        <!-- 왼쪽에 자식에세 선언되는 props의 변수명, 오른쪽 변수에 어떤 값을 넣어줄 것인가 -->
        <!-- 부모컴포넌트의 name이라는 값을 nameOfChild에 넣어줄게 -->
        <UserDetail :nameOfChild="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'뷰제이에스'
    }
  },
  methods :{
    changeName (){
      this.name = "Nawon"
    }
  }
}
</script>

```

자식

```vue
<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>

  </div>
</template>

<script>
export default {
  // 부모컴포넌트의 변수명 써주기 ['nameOfChild'] 처럼
  // 부모 컴포넌트에서 이미 값을 가져왔기 때문에 값이 아닌 데이터 타입을 써준다
  props:{
    nameOfChild : {
      type:String,
      // 필요하다고 되어 있는데 부모에서 값을 넘겨주지 않으면 에러가 출력됨
      required: true,
      // 부모에서 아무값도 전달해주지 않았는데 default를 선언하면 그 값이 출력
      // 만약 부모에서 값을 전달해주면 디폴트값 대신 부모에서 전달해준 값이 출력됨
      default:'LEGO'
  
    }
  },
  data (){
    return {
      age:30
    }
  }
}
</script>

```

#### props를 컴포넌트 내에서 활용할 수 있는지?

```vue
<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>

  </div>
</template>

<script>
export default {
  // 부모컴포넌트의 변수명 써주기 ['nameOfChild'] 처럼
  // 부모 컴포넌트에서 이미 값을 가져왔기 때문에 값이 아닌 데이터 타입을 써준다
  props:{
    nameOfChild : {
      type:String,
      // 필요하다고 되어 있는데 부모에서 값을 넘겨주지 않으면 에러가 출력됨
      required: true,
      // 부모에서 아무값도 전달해주지 않았는데 default를 선언하면 그 값이 출력
      // 만약 부모에서 값을 전달해주면 디폴트값 대신 부모에서 전달해준 값이 출력됨
      default:'LEGO'
  
    }
  },
  computed:{
    sayHello(){
      return this.nameOfChild + '안녕하세요'
    }
  }
}
</script>

```

-> 뷰제이에스안녕하세요 라고 뜨고, 이름 변경하면 Nawon안녕하세요 



즉, 부모에서 전달된 nameOfChild라는 값은 컴포넌트 내에서는 데이터와 동일하게 this로 불러서 사용할 수 있음.



#### methods

```javascript
  methods:{
    switchName(){
      this.nameOfChild = "컴퓨터"
    }
  }
```

이렇게 메소드로 직접적으로 변경하게 되면 직접적으로 변경하는 걸 피하라는 메시지가 뜨게 됨. (부모컴포넌트가 다시 렌더될 때 값이 덮어씌워질것)

-> 자식 컴포넌트에서 값을 가지고 여러가지 작업을 하더라도 그 값이 부모컴포넌트에 의해서 언제든지 변경될 수 있는 위험성을 가지고 있음. (컴포넌트의 독립성이 없어짐)

부모로부터 받은 값을 변경시키려면 

1. computed를 쓰거나
2. 데이터 안에 재 할당 (변경이 자식컴포넌트 내에서만 제한됨)

부모로부터 받은 값을 자식컴포넌트 내에 어떤 다른 변수 내에 할당시켜서 그 변수를 변경시키는 거지 부모로부터 받을 그 값자체를 변경시키는게 아님

부모

```vue
<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <!-- <button @click="changeName()">이름 변경</button> -->
    <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <!-- 자식 컴포넌트에 v-bind를 사용해서 데이터 전달 -->
        <!-- 왼쪽에 자식에세 선언되는 props의 변수명, 오른쪽 변수에 어떤 값을 넣어줄 것인가 -->
        <!-- 부모컴포넌트의 name이라는 값을 nameOfChild에 넣어줄게 -->
        <UserDetail :nameOfChild="name"></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data (){
    return {
      name:'뷰제이에스'
    }
  },
  methods :{
    changeName (){
      this.name = "Nawon"
    }
  }
}
</script>

```



자식컴포넌트 버튼을 눌렀을때, 부모에도 변경시킬 수 있는 방법은?