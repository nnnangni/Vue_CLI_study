<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count ++">추가</button>
    <HomeComponent></HomeComponent>
    <AppStatus></AppStatus>
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
