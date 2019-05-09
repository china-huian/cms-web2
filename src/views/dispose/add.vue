<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1">配置添加</span>
    </div>
    <div class="inputbox">
      <el-input class="input" v-model="name" placeholder="请输入名称"></el-input>
      <el-input class="input" v-model="catalog" placeholder="请输入目录"></el-input>
      <el-button class="input" type="primary" @click="add">
        <i class="el-icon-circle-check el-icon--left"></i>
        确认添加
      </el-button>
    </div>
    <div class="inputbox">
      <el-select v-model="value" placeholder="请选择模板">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      catalog: '',
      type: '',
      options: [{ label: '模板1 ', value: '0' }, { label: '模板2', value: '1' }],
    };
  },
  methods: {
    add() {
      this.$router.push('/dispose');
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
