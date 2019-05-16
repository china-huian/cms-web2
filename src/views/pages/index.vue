<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">单页管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加单页
      </el-button>
    </div>
    <Pageslist class="list" :list="pageslist" v-on:success="success"></Pageslist>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/pagination';
import Pageslist from '@/components/pageslist';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  components: {
    Pageslist,
    Pagination,
  },
  mounted() {
    // 使用时直接this.函数名调用，括号中对应所传参数，相当于paging花括号中的值
    this.query({ skip: 1, limit: 20 });
  },
  computed: {
    // 通过计算函数取到state的值，计算函数中的固定函数，箭头函数中state为固定参数，函数体中取到的是state函数中的page模块中的list
    ...mapState({
      pageslist: state => state.page.list,
    }),
  },
  methods: {
    ...mapActions('page', ['query']),
    add() {
      this.$router.push('pages/add');
    },
    success() {
      this.query({ skip: 1, limit: 20 });
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
