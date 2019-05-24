import Vue from 'vue';
import Vuex from 'vuex';
import column from './modules/column';
import menu from './modules/menu';
import page from './modules/page';
import nav from './modules/nav';
import dispose from './modules/dispose';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    column,
    menu,
    page,
    nav,
    dispose,
  },
});
