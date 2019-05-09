<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">配置管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline  el-icon--left"></i>
        添加配置
      </el-button>
    </div>
    <Columnlist class="list" :data="pageslist"> </Columnlist>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/pagination';
import Columnlist from '@/components/columnlist';
export default {
  data() {
    return {
      pageslist: null,
    };
  },
  components: {
    Pagination,
    Columnlist,
  },
  methods: {
    add() {
      this.$router.push('dispose/add');
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
