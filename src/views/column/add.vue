<template>
  <div class="box addbox block">
    <div class="title fj">
      <span v-if="!id" class="fd1">栏目添加</span>
      <span v-else class="fd1">栏目修改</span>
    </div>
    <div class="inputbox fj block">
      <div class="fd1">
        <el-input class="inputname block" v-model="name" placeholder="请输入名称"></el-input>
        <el-button v-if="!id" class="fd1 addbtn" type="primary" @click="upadd"> <i class="el-icon-circle-check el-icon--left"></i>确认添加 </el-button>
        <el-button v-else class="fd1 addbtn" type="primary" @click="updates"> <i class="el-icon-circle-check el-icon--left"></i>确认修改 </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      name: '',
      calalog: '',
      id: '',
    };
  },
  async mounted() {
    // 更改初始化
    this.id = this.$route.query.id;
    if (this.id) {
      const resfetch = await this.fetch({ id: this.id });
      if (resfetch.data.errcode == 0) {
        // Array.from(resfetch.data.data) 这种方式不可以
        this.name = resfetch.data.data.name;
      }
    }
  },
  methods: {
    ...mapActions('column', ['query', 'add', 'update', 'fetch']),
    open(msg) {
      // 成功弹出
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    async upadd() {
      // 添加
      if (this.name !== '') {
        try {
          const res = await this.add({
            name: this.name,
          });
          if (res.data.errcode == 0) {
            this.open('添加成功');
            this.$router.push('/column');
          } else {
            this.$message.error(res.data.errmsg);
            // 错误弹出内容
          }
        } catch (err) {
          console.log(err);
          this.$message.error(err);
        }
      } else {
        this.$message.error('选项不能为空');
        // 错误弹出
      }
    },
    async updates() {
      // 修改
      if (this.name !== '' && this.id !== '') {
        try {
          const res = await this.update({
            name: this.name,
            id: this.id,
          });
          if (res.data.errcode == 0) {
            this.open('修改成功');
            this.$router.push('/column');
          } else {
            this.$message.error(res.data.errmsg);
          }
        } catch (err) {
          this.$message.error(err);
        }
      } else {
        this.$message.error('选项不可以为空');
      }
    },
  },
  computed: {
    ...mapState('column', ['list']),
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
