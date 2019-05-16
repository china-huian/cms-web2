<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">内容管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加内容
      </el-button>
    </div>
    <Newslist class="list" :list="newslist1"></Newslist>
    <Pagination />
  </div>
</template>

<script>
import Newslist from '@/components/newslist';
import Pagination from '@/components/pagination';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      newslist1: [
        {
          name: '慧安通信',
          date: '2020-20-20',
          count: '1111',
          publisher: 'asd',
          state: '已发布',
        },
      ],
    };
  },
  components: {
    Newslist,
    Pagination,
  },
  mounted() {
    this.query({ skip: 1, limit: 20 });
  },
  methods: {
    ...mapActions('content', ['query']),
    add() {
      this.$router.push('content/add');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
