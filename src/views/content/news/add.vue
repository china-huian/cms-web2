<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1">栏目添加</span>
    </div>
    <div class="input">
      <el-input class="inputname block" v-model="name" placeholder="请输入名称"></el-input>
    </div>
    <Wangeditor v-if="id !== null || value !== null" v-model="value"></Wangeditor>
    <el-button class="fd1 addbtn" type="primary" @click="doadd"><i class="el-icon-circle-check el-icon--left"></i>确认添加</el-button>
  </div>
</template>
<script>
import Wangeditor from '@/components/wangeditor';
import { mapActios, mapState } from 'vuex';
export default {
  data() {
    return {
      name: '',
      id: null,
      value: '',
    };
  },
  components: {
    Wangeditor,
  },
  async mounted() {
    this.id = this.$route.query.id;
    if (this.id) {
      const res = await this.fetch({ id: this.id });
      if (res.data.errcode == 0) {
        this.name = res.data.data.name;
        this.value = res.data.data.content;
      }
    }
  },
  methods: {
    // ...mapActions('content', ['add']),
    open(msg) {
      this.$message({
        message: msg,
        // type: 'success',
      });
    },
    async doadd() {
      if (this.name !== '') {
        const res = await this.add({
          name: this.name,
          content: this.value,
        });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          this.$router.push('/content/news');
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
.input {
  width: 40%;
}
</style>
