import Vue from 'vue';
import Router from 'vue-router';
import Column from './views/column/index.vue';
import ColumnAdd from './views/column/add.vue';
import Menu from './views/menu/index.vue';
import Dispose from './views/dispose/index.vue';
import DisposeAdd from './views/dispose/add.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'column',
      component: Column,
    },
    {
      path: '/column',
      name: 'column',
      component: Column,
    },
    {
      path: '/column/add',
      name: 'column-add',
      component: ColumnAdd,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/dispose',
      name: 'dispose',
      component: Dispose,
    },
    {
      path: '/dispose/add',
      name: 'dispose-add',
      component: DisposeAdd,
    },
  ],
});
