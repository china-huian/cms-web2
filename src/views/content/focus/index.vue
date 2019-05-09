<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">新闻焦点</span>
      <el-button class="fd2 addbtn" type="success" @click="add3">
        <i class="el-icon-edit-outline el-icon--left"></i>
        焦点添加
      </el-button>
    </div>
    <Newslist class="list" :list="newslist3"></Newslist>
    <Pagination />
  </div>
</template>

<script>
import Newslist from '@/components/newslist';
import Pagination from '@/components/pagination';
export default {
  data() {
    return {
      newslist3: [
        {
          name: '焦点',
          date: '2020-20-20',
          count: '122',
          publisher: '露琪亚',
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
    add3() {
      this.$router.push('./focus/add');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
