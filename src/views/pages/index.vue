<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">单页管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加单页
      </el-button>
    </div>
    <Columnlist class="list" :list="pageslist"></Columnlist>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/pagination';
import Columnlist from '@/components/columnlist';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      pageslist: [
        {
          name: '单页添加',
          date: '2019-04-26',
        },
      ],
    };
  },
  components: {
    Columnlist,
    Pagination,
  },
  methods: {
    add() {
      this.$router.push('pages/add');
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
