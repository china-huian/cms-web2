<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">新闻栏目</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加栏目
      </el-button>
    </div>
    <Newslist class="list" :list="newslist1"></Newslist>
    <Pagination />
  </div>
</template>

<script>
import Newslist from '@/components/newslist';
import Pagination from '@/components/pagination';
export default {
  data() {
    return {
      newslist1: [
        {
          name: '慧安通信',
          date: '2020-20-20',
          count: '1111',
          publisher: '王美丽',
          state: '已发布',
        },
        {
          name: '慧安通信',
          date: '2020-20-20',
          count: '1111',
          publisher: '王美丽',
          state: '已发布',
        },
      ],
    };
  },
  components: {
    Newslist,
    Pagination,
  },
  methods: {
    add() {
      this.$router.push('./news/add');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
