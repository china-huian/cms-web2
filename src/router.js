import Vue from 'vue';
import Router from 'vue-router';
import Column from './views/column/index.vue';
import ColumnAdd from './views/column/add.vue';
import ContentNews from './views/content/news/index.vue';
import Pages from './views/pages/index.vue';
import PagesAdd from './views/pages/add.vue';
import Menu from './views/menu/index.vue';
import MenuAdd from './views/menu/add.vue';

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
      path: '/content/news',
      name: 'content-news',
      component: ContentNews,
    },
    {
      path: '/pages',
      name: 'pages',
      component: Pages,
    },
    {
      path: '/pages/add',
      name: 'pages-add',
      component: PagesAdd,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/menu/add',
      name: 'menuadd',
      component: MenuAdd,
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
