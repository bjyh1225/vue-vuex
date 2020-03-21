<template>
  <div id="app">
    <h2>------app中modules的相关信息-----</h2>
    <h2>{{$store.state.a.name}}</h2> 
    <button @click="updateName">修改姓名</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改</button>

    <h2>------app中info的相关信息-----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----app内容-----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    
    <h2>------app中getter的相关信息-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more1}}</h2>
    <h2>{{$store.getters.more1Length}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>
  
    <h2>----hello world内容-----</h2>
    <hello-world/>

  </div>
</template>

<script>
 import HelloWorld from './components/HelloWorld'

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    data() {
      return {
        message: '我是app组件'
      }
    },
    // computed: {
    //   more1() {
    //     return this.$store.state.students.filter(s => s.age >=20)
    //   }
    // },
    methods: {
      addition() {
        this.$store.commit('increment')
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // this.$store.commit('incrementCount', count)
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      addStudent() {
        const stu = {id: 114, name: 'allen', age: 35}
        this.$store.commit('addStudent',stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aupdateInfo',{
        //   message: '我是携带信息',
        //   success: () => {
        //     console.log('里面完成了')
        //   }
        // })
        this.$store
          .dispatch('aupdateInfo','我是携带信息')
          .then(res => {
            console.log('里面完成了提交');
            console.log(res);
          })
      },
      updateName() {
        this.$store.commit('updateName','lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style lang="stylus">

</style>

