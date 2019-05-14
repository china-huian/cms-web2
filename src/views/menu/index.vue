<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">菜单管理</span>
      
    </div>
    <Menulist class="list" :list="menulist"></Menulist>
  </div>
</template>

<script>
import Menulist from '@/components/menulist';
export default {
  data() {
    return {
      menulist: '',
    };
  },
  components: {
    Menulist,
  },
  methods: {
    add() {
      this.$router.push('menu/add');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.list {
  width: 100%;
  margin: 0;
}
/* .addbtn {
  margin-top: 1.6em;
} */
</style>
