import Vue from 'vue';
import Vuex from 'vuex';
import column from './modules/column';
// 引入各个模块
import page from './modules/page';
import content from './modules/content';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    column,
    // 将各模块挂载
    page,
    content,
  },
});
