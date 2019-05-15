<template>
  <div class="list">
    <el-table :data="list" style="width: 100%" height="70vh">
      <el-table-column prop="name" label="标题" width="350">
        <template slot-scope="scope">
          <p class="fd1" @click="link">{{ scope.row.name }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="阅读量" width="180"></el-table-column>
      <el-table-column prop="publisher" label="发布人" width="180"></el-table-column>
      <el-table-column prop="state" label="状态" width="180"></el-table-column>
      <el-table-column prop="date" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="update2(scope.row.id)">修改</el-button>
          <el-button size="mini" type="danger" @click="deleted(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    link() {
      this.$router.push('./content/forthismoment');
    },
    update2() {
      // this.$router.push({ path: this.$route.name + '/add', query: { id } });
    },
  },
  props: {
    list: null,
  },
  watch: {
    data: function(val) {
      console.log(val);
    },
  },
};
</script>

<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
