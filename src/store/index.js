import Vue from 'vue';
import Vuex from 'vuex';
import column from './modules/column';
import menu from './modules/menu';
<<<<<<< HEAD
import page from './modules/page';
import nav from './modules/nav';
import dispose from './modules/dispose';
=======
// 引入各个模块
import page from './modules/page';
import nav from './modules/nav';
import content from './modules/content';
>>>>>>> Riley

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    column,
    menu,
<<<<<<< HEAD
    page,
    nav,
    dispose,
=======
    // 将各模块挂载
    page,
    nav,
    content,
>>>>>>> Riley
  },
});
