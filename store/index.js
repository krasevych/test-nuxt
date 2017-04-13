import Vuex from 'vuex'
import { test } from './test/test'

const store = new Vuex.Store({
  state: {counter: 0},
  mutations: {
    increment (state) {
      state.counter++
    }
  },
  modules: {
    test
  }
})

export default store
