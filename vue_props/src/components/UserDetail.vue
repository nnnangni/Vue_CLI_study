<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()">이름 변경</v-btn>
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
  },
  methods:{
    switchName(){
      this.nameOfChild = "컴퓨터"
    }
  }
}
</script>
