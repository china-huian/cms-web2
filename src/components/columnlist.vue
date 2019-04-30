<template>
  <div class="list">
    <el-table :data="list" style="width: 100%" height="70vh">
      <el-table-column prop="name" label="名称" width="280"></el-table-column>
      <el-table-column prop="date" label="目录" width="280"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="update(scope.row.id)">修改</el-button>
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
    return {}
  },
  methods: {
    // ...mapActions(['contents_delete', 'contents_query']),
    update(id) {
      //更改跳转
      this.$router.push({ path: '/column/add', query: { id } });
    },
    deleted(id) {
      this.$router.push({ path: '/column/add', query: { id } });
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
