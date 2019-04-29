import Vue from 'vue';
import Vuex from 'vuex';
import column from './modules/column';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    column,
  },
});
