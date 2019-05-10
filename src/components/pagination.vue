<template>
  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      current-page.sync="1"
      :page-size="limit"
      layout="prev, pager, next, total"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
      skip: 2,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.skip = val;
      this.$emit('pagination', { skip: this.skip, limit: this.limit });
    },
  },
  props: {
    total: null,
    limit: null,
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
