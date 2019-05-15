<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1" v-if="!id">单页添加</span>
      <span class="fd1" v-else>单页修改</span>
    </div>
    <div class="inputbox">
      <el-input class="input" v-model="name" placeholder="请输入名称"></el-input>
      <Wangeditor class="editor" v-if="id == null || value !== null" v-model="value"></Wangeditor>
      <div class="btn">
        <el-button v-if="id == null" class="input" type="primary" @click="doadd">
          <i class="el-icon-circle-check el-icon--left"></i>
          确认添加
        </el-button>
        <el-button v-else class="input" type="primary" @click="doupdate">
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
      // catalog: null,
      value: null,
      id: null,
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
    ...mapActions('page', ['fetch', 'add', 'update']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    async doupdate() {
      const res = await this.update({
        name: this.name,
        content: this.value,
        id: this.id,
      });
      if (res.data.errcode == 0) {
        this.open('修改成功');
        this.$router.push({ path: '/pages' });
      } else {
        this.$message.error(res.data.errmsg);
      }
    },

    async doadd() {
      if (this.name !== '') {
        const res = await this.add({
          name: this.name,
          content: this.value,
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
    // async doadd(){
    //   if(this.name !==''){
    //     try {
    //       const res = await this.add({
    //         name:this.name,
    //         content:this.value,
    //       });
    //       if (res.data.errcode == 0) {
    //       this.open('添加成功');
    //       this.$router.push({
    //         path: '/pages',
    //       })
    //       } else {
    //         this.$message.error(res.data.errmsg);
    //       }
    //     }
    //     catch (error) {
    //       console.log(error);
    //     }
    //   }else{
    //     this.$message.error('请填写完整信息');
    //   }
    // }
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
