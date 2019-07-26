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
