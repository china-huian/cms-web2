<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1">单页添加</span>
    </div>
    <div class="inputbox">
      <el-input class="input" v-model="name" placeholder="请输入名称"></el-input>
      <el-input class="input" v-model="catalog" placeholder="请输入目录"></el-input>
      <el-button class="input" type="primary" @click="doadd">
        <i class="el-icon-circle-check el-icon--left"></i>
        确认添加
      </el-button>
    </div>
    <!-- <div class="inputbox">
      <el-select v-model="value" placeholder="请选择状态">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      catalog: '',
      type: '',
    };
  },
  methods: {
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    // ...mapActions('pageAdd'),
    async doadd() {
      if (this.name !== '' && this.catalog !== '') {
        const res = await this.pageAdd({
          name: this.name,
          binding: this.catalog,
          type: '0',
        });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          this.name = '';
          this.catalog = '';
          this.$router.push({
            path: '/pages',
            query: { catalog: this.catalog },
          });
        } else {
          this.$message.error('添加失败');
        }
      } else {
        this.$message.error('请填写完整信息');
      }
    },
  },
};
</script>

<style load="loss" scoped>
@import '~@/assets/style.less';
.inputbox {
  width: 50%;
  float: left;
}
.input {
  display: block;
  width: 50%;
  margin-bottom: 30px;
}
</style>
