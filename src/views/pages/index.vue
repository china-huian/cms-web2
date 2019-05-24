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
    <Pagination :total="total" v-on:pagination="paging" :limit="limit"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/pagination';
import Pageslist from '@/components/pageslist';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      skip: 1,
      limit: 10,
    };
  },
  components: {
    Pageslist,
    Pagination,
  },
  mounted() {
    // 使用时直接this.函数名调用，括号中对应所传参数，相当于paging花括号中的值
    this.query({ skip: 1, limit: 10 });
  },
  computed: {
    // 通过计算函数取到state的值，计算函数中的固定函数，箭头函数中state为固定参数，函数体中取到的是state函数中的page模块中的list
    ...mapState({
      pageslist: state => state.page.list,
      total: state => state.page.total,
    }),
  },
  methods: {
    ...mapActions('page', ['query']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    add() {
      console.log(this.id);
      this.$router.push('pages/add');
    },
    success() {
      this.query({ skip: 1, limit: 10 });
    },
    paging({ skip, limit }) {
      // skip 页数  limit 条数
      this.limit = limit;
      this.skip = skip;
      this.query({ skip: skip, limit: limit });
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
