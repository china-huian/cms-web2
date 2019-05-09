<template>
  <div class="block">
    <el-pagination :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 5,
    };
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.block {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
}
</style>
