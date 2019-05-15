<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">新闻资讯</span>
      <el-button class="fd2 addbtn" type="success" @click="add2">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加资讯
      </el-button>
    </div>
    <Newslist class="list" :list="newslist2"></Newslist>
    <Pagination />
  </div>
</template>

<script>
import Newslist from '@/components/newslist';
import Pagination from '@/components/pagination';
export default {
  data() {
    return {
      newslist2: [
        {
          name: '新闻资讯',
          date: '2020-20-20',
          count: '122',
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
  methods: {
    add2() {
      this.$router.push('./information/add');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
