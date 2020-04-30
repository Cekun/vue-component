import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    updateCount(state, num) {
      state.count += num;
    }
  },
  getters: {
    score(state) {
      return 'score: ' + state.count;
    }
  },
  actions: {
    //复杂业务逻辑，类似于controller
    //比如ajax请求
    // 模拟ajax
    asyncAdd({commit, state}, num) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('updateCount', num);
          resolve({ok:1});
        }, 1000);
      })  
    }
  },
  modules: {
  }
})
