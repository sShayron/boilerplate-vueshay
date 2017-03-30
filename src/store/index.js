import Vue from 'vue'
import Vuex from 'vuex'
import characters from './modules/characters'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    characters
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
