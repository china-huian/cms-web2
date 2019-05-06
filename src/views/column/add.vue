<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1">栏目添加</span>
    </div>
    <div class="inputbox fj block">
      <div class="fd1">
        <el-input class="inputname block" v-model="name" placeholder="请输入名称"></el-input>
        <el-input class="inputname block" v-model="calalog" placeholder="请输入目录"></el-input>
        <el-button class="fd1 addbtn" type="primary" @click="upadd"> <i class="el-icon-circle-check el-icon--left"></i>确认添加 </el-button>
      </div>
      <div class="fd2">
        <el-select v-model="type" placeholder="请选择模板">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      calalog: '',
      type: '',
      options: [{ label: '模板1 ', value: '0' }, { label: '模板2', value: '1' }],
    };
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.inputname {
  width: 50%;
  display: block;
}
.inputbox {
  width: 100%;
}
.inputbox .fd1,
.inputbox .fd2 {
  width: 50%;
}
</style>
