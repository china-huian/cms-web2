<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1" v-if="tab">单页添加</span>
      <span class="fd1" v-else>单页修改</span>
    </div>
    <div class="inputbox">
      <el-input class="input" v-model="name" placeholder="请输入名称"></el-input>
      <Wangeditor class="editor" v-if="id !== null || contents !== null" v-model="contents"></Wangeditor>
      <div class="btn">
        <el-button v-if="tab" class="input" type="primary" @click="doadd">
          <i class="el-icon-circle-check el-icon--left"></i>
          确认添加
        </el-button>
        <el-button v-else class="input" type="primary" @click="doadd">
          <i class="el-icon-circle-check el-icon--left"></i>
          确认修改
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Wangeditor from '@/components/wangeditor';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      name: '',
      catalog: null,
      contents: null,
      tab: true,
      id: null,
    };
  },
  components: {
    Wangeditor,
  },
  async mounted() {
    // const res = await this.pageQuery({ });
    this.id = this.$route.query.id;
    if (this.id) {
      const resfetch = await this.query({ id: this.id });
      if (resfetch.data.errcode == 0) {
        this.name = resfetch.data.data.name;
        this.contents = resfetch.data.data.contents;
      }
      // if (res.data.res.length > 0) {
      //   this.name = res.data.res[0].name;
      //   this.catalog = res.data.res[0].catalog;
      //   this.btn = false;
      // } else {
      //   this.btn = true;
      // }
    }
  },
  methods: {
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    ...mapActions(['query', 'add']),
    async doadd() {
      this.tab = false;
      if (this.name !== '') {
        const res = await this.add({
          name: this.name,
        });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          // this.name = '';
          this.$router.push({
            path: '/pages',
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
  width: 100%;
  float: left;
}
.input {
  display: block;
  width: 25%;
  margin-bottom: 30px;
}
.editor {
  width: 100%;
  margin-bottom: 30px;
}
.btn {
  width: 50%;
}
</style>
