import Vue from 'vue';
import router from 'vue-router';
import Column from './views/column/index.vue';
import ColumnAdd from './views/column/add.vue';
import Pages from './views/pages/index.vue';
import PagesAdd from './views/pages/add.vue';
import Content from './views/content/index.vue';
import ContentAdd from './views/content/add.vue';
import Dispose from './views/dispose/index.vue';
import DisposeAdd from './views/dispose/add.vue';

Vue.use(router);

export default new router({
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
      path: '/content',
      name: 'content',
      component: Content,
    },
    {
      path: '/content/add',
      name: 'contentadd',
      component: ContentAdd,
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

// let num = 0;
// router.beforeEach((to, from, next) => {
//   num++;
//   if (to.path !== '/' && num == 1) {
//     next('/');
//   } else {
//     next();
//   }
// });
