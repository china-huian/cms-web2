<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">内容管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加内容
      </el-button>
    </div>
    <Newslist class="list" :list="list" v-on:success="success"></Newslist>
    <Pagination :total="total" v-on:pagination="paging" :limit="limit"></Pagination>
  </div>
</template>

<script>
import Newslist from '@/components/newslist';
import Pagination from '@/components/pagination';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      id: null,
      skip: 1,
      limit: 10,
    };
  },
  components: {
    Newslist,
    Pagination,
  },
  mounted() {
    this.id = this.$route.query.id;
    if (this.id) {
      this.query({ skip: 1, limit: 10, binding: this.id });
    }
  },
  methods: {
    ...mapActions('content', ['query']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    add() {
      this.$router.push({ path: 'content/add', query: { bindingid: this.id } });
    },
    success() {
      this.query({ skip: 1, limit: 10, binding: this.id });
    },
    paging({ skip, limit }) {
      // skip 页数  limit 条数
      this.limit = limit;
      this.skip = skip;
      this.query({ skip: skip, limit: limit });
    },
  },
  computed: {
    ...mapState({
      list: state => state.content.list,
      total: state => state.content.total,
    }),
  },
  watch: {
    $route: function(val) {
      this.id = val.query.id;
    },
    id: function() {
      this.query({ skip: 1, limit: 10, binding: this.id });
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
