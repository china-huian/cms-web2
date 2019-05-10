<template>
  <div class="list">
    <el-table :data="list" style="width: 100%" height="70vh">
      <!-- <el-table :data="list.slice((skip-1)*page-size, skip*page-size)" style="width: 100%" height="70vh"> -->
      <el-table-column prop="name" label="名称" width="250"></el-table-column>
      <el-table-column prop="catalog" label="目录" width="250"></el-table-column>
      <el-table-column prop="time" label="时间" width="250"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button class="fd1" size="mini" type="primary" @click="update(scope.row._id)">修改</el-button>
          <el-button class="fd1" size="mini" type="danger" @click="deleted(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      skip: 1,
    };
  },
  methods: {
    ...mapActions('column', ['delete', 'query']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    update(id) {
      //更改跳转
      this.$router.push({ path: this.$route.name + '/add', query: { id } });
    },
    async deleted(id) {
      // 删除
      try {
        const res = await this.delete({ id: id });
        if (res.data.errcode == 0) {
          this.open('删除成功');
          this.$emit('pagination', { skip: this.skip, limit: this.limit });
          // this.query({ type: this.type });
          this.query({ skip: skip, limit: limit });
        } else {
          this.$message.error(res.data.errmsg);
        }
      } catch (err) {
        console.log(err);
        this.$message.error(err);
      }
    },
  },
  props: {
    list: null,
    total: null,
    limit: null,
  },
  // watch: {
  //   datachange: function(val) {
  //     console.log(val);
  //   },
  // },
};
</script>

<style load="loss" scoped>
@import '~@/assets/style.less';
</style>
