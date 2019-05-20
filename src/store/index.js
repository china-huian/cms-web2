import Vue from 'vue';
import Vuex from 'vuex';
import column from './modules/column';
import menu from './modules/menu';
import page from './modules/page';
// 引入各个模块
// import page from './modules/page';
import nav from './modules/nav';
import dispose from './modules/dispose';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    column,
    menu,
    page,
    // 将各模块挂载
    nav,
    dispose,
  },
});
