//状态配置
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //购物车列表
    cartList: [],
    total: null
  },
  actions: {
    // cartadd(context, payload) {
    //   let oldProduct = context.cartList.find(item => item.iid === payload.iid)
    //   if (oldProduct) {
    //     context.commit('addCount', oldProduct)
    //   } else {
    //     payload.count = 1
    //     context.commit('addCount', payload)
    //   }
    // }
  },
  mutations: {
    countTotal(state) {
      let mytotal = 0
      for (let i = 0; i < state.cartList.length; i++) {
        console.log(state.cartList[i].count * state.cartList[i].realprice);

        mytotal += state.cartList[i].count * state.cartList[i].realprice
      }
      state.total = mytotal * 100
    },
    cartadd(state, payload) {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // context.commit('addCount', oldProduct)
        oldProduct.count++
      } else {
        payload.count = 1
        // context.commit('addCount', payload)
        state.cartList.push(payload)
      }
    }
  }
})

export default store;