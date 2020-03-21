<template>
  <div>
   <h2>{{$store.state.counter}}</h2>
   <h2>{{$store.getters.powerCounter}}</h2>
  <h2>{{$store.getters.more1}}</h2>
  <h2>{{$store.state.info}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 props: {
   counter: Number
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
