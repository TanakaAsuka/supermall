import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA={
  state:{
    sexy:"male"
  },
  mutations:{
    modifySexy(state){
      state.sexy="female"
    }
  }
}
export default new Vuex.Store({
  state: {
    counter:10000,
    students:[
      {name:'xiaoming',age:18},
      {name:'xiaohong',age:28},
      {name:'kobe',age:15},
      {name:'james',age:19},
      {name:'curry',age:23},
    ],
    info:{
      name:'kobe',
      age:18
    }
  },
  mutations: {
    increament(state){
      state.counter++
    },
    decreament(state){
      state.counter--
    },
    modifyStudent(state,payload){
      // state.info['adress']='loshanji'
      // Vue.set(state.info,'adress','luoshanji')
      // delete state.info.age
      state.info.name='coderwhy'+payload
    }
  },
  getters:{
    powerCounters(state){
      return state.counter*state.counter
    },
    moreAge(state,getters){
      return function(age){
        return state.students.filter(s=>s.age>age);
      }
    }
  },
  actions: {
    aUpdate(context,payload){
      return new Promise(res=>{
        setTimeout(()=>{
          context.commit("modifyStudent",'111111');
          console.log('里面已经完成了');
          res('222222')
        },1000)
      })
    }
  },
  modules: {
    a:moduleA
  }
})
