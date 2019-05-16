<template>
  <div class="list">
    <el-table :data="list" style="width: 100%" height="70vh">
      <!-- <el-table :data="list.slice((skip-1)*page-size, skip*page-size)" style="width: 100%" height="70vh"> -->
      <el-table-column prop="name" label="名称" width="250"></el-table-column>
      <el-table-column prop="key" label="属性名" width="200" v-if="this.$route.name == 'dispose'"></el-table-column>
      <el-table-column prop="time" label="时间" width="200" v-if="this.$route.name == 'dispose'"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button class="fd1" size="mini" type="primary" @click="update(scope.row._id)">修改</el-button>
          <el-button class="fd1" size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
        </template>
      
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // link: null,
    };
  },
  methods:{
    remove(id) {
      this.$emit('remove', id);
    },
    update(id) {
      //更改跳转
      this.$router.push({ path: this.$route.name + '/add', query: { id } });
      // console.log(this.$route);
    },
  },
  props: {
    list: null,
  },
  // mounted() {
  //   this.link == this.$route.name;
  // },
}
</script>
<style>

</style>
