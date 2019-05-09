<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1">栏目添加</span>
    </div>
    <div class="input">
      <el-input class="inputname block" v-model="name" placeholder="请输入名称"></el-input>
    </div>
    <Wangeditor v-if="catalog !== null || contents !== null" v-model="contents"></Wangeditor>
    <el-button class="fd1 addbtn" type="primary" @click="upadd1"><i class="el-icon-circle-check el-icon--left"></i>确认添加</el-button>
  </div>
</template>
<script>
import Wangeditor from '@/components/wangeditor';
export default {
  data() {
    return {
      name: '',
    };
  },
  components: {
    Wangeditor,
  },
  methods: {
    upadd1() {
      this.$router.push('/content/news');
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.input {
  width: 40%;
}
</style>
