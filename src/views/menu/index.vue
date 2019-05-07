<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">菜单管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline  el-icon--left"></i>
        添加菜单
      </el-button>
    </div>

    <!-- <Columnlist class="list" :list="menulist"> </Columnlist> -->
    <Menulist class="list" :list="menulist"></Menulist>
    <!-- <Pagination></Pagination> -->
  </div>
</template>

<script>
// import Pagination from '@/components/pagination';
import Menulist from '@/components/menulist';
export default {
  data() {
    return {
      // menulist: '',
    };
  },
  components: {
    // Pagination,
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
