<template>
  <div class="list">
    <el-table :data="list" style="width: 100%" height="70vh">
      <el-table-column prop="name" label="名称" width="280"></el-table-column>
      <!-- <el-table-column prop="content" label="内容" width="200">
        <template slot-scope="scope">
          <p>{{ scope.row.content | content }}</p>
        </template>
      </el-table-column> -->
      <el-table-column prop="time" label="发布时间" width="200"></el-table-column>
      <el-table-column prop="state" label="状态" width="200"></el-table-column>
      <el-table-column prop="use" label="发布人" width="200"></el-table-column>
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
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  props: {
    list: null,
    data: null,
  },
  methods: {
    ...mapActions('column', ['query']),
    update(id) {
      //更改跳转
      this.tab = false;
      this.$router.push({ path: this.$route.name + '/add', query: { id } });
    },
    // deleted(id) {
    //   this.$router.push({ path: this.$route.name + '/add', query: { id } });
    // },
    async deleted(id) {
      try {
        const res = await this.delete({ id: id });
        if (res.data.errcode == 0) {
          this.open('删除成功');
        } else {
          this.$message.error(res.data.errmsg);
        }
      } catch (err) {
        console.log(err);
        this.$message.error(err);
      }
    },
  },
  watch: {
    data: function(val) {
      console.log(val);
    },
  },
  filters: {
    content: function(val) {
      return val;
    },
  },
};
</script>

<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
