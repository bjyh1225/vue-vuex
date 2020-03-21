import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangshan'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state,getters) {
      return getters.fullname + '2222'
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aupdateName(context) {
      
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  }
}

export default new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'jams', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe', 
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // console.log(count)
      state.counter += payload.count
    },
    addStudent(state,stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'guozhen'
      // setTimeout(() => {
      //   state.info.name = 'guozhen'
      // },1000)
      // Vue.set(state.info,'address','洛杉矶'),
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // aupdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
        
    //     payload.success();
    //   },1000)
    aupdateInfo(context, payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('11111');
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more1(state) {
      return state.students.filter(s => s.age > 20)
    },
    more1Length(state,getters) {
      return getters.more1.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => { 
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})
