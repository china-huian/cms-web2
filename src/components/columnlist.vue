<template>
  <div class="list">
    <el-table :data="data" style="width: 100%" height="70vh">
      <el-table-column prop="name" label="名称" width="280"></el-table-column>
      <el-table-column prop="date" label="目录" width="280"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="update(scope.row.id)">修改</el-button>
          <el-button size="mini" type="danger" @click="deleted(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      currentPage: 5,
    };
  },
  methods: {
    ...mapActions(['contents_delete', 'contents_query']),
    update(id) {
      //更改跳转
      this.$router.push({ path: '/column/add', query: { id } });
    },
    deleted(id) {
      this.$router.push({ path: '/column/add', query: { id } });
    },
  },
  props: {
    data: null,
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
