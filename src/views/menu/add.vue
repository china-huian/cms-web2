<template>
  <div class="box addbox block">
    <div class="title fj">
      <span v-if="tab" class="fd1">菜单添加</span>
      <span v-else class="fd1">菜单修改</span>
    </div>
    <div class="inputbox fj block">
      <div class="fd1">
        <el-input class="inputname block" v-model="name" placeholder="请输入名称"></el-input>
        <el-input class="inputname block" v-model="calalog" placeholder="请输入目录"></el-input>
        <el-button v-if="tab" class="fd1 addbtn" type="primary" @click="upadd"> <i class="el-icon-circle-check el-icon--left"></i>确认添加 </el-button>
        <el-button v-else class="fd1 addbtn" type="primary" @click="updatas"> <i class="el-icon-circle-check el-icon--left"></i>确认修改 </el-button>
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
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      name: '',
      calalog: '',
      type: '',
      tab: true,
      options: [{ label: '模板1 ', value: '0' }, { label: '模板2', value: '1' }],
    };
  },
  async mounted() {
    // 更改初始化
    let id = this.$route.query.id;
    if (id) {
      this.tab = false;
      const resfetch = await this.fetch({ id });
      if (resfetch.data.errcode == 0) {
        this.name = resfetch.data.res[0].name;
        this.catalog = resfetch.data.res[0].catalog;
        this.type = resfetch.data.res[0].type;
        // if (resfetch.data.res.grade == '1') {
        //   this.binding = resfetch.data.res[0].binding;
        // }
        // 绑定顶级目录，可以使用
      }
    }
  },
  methods: {
    ...mapActions('column', ['query', 'add', 'update', 'fetch ']),
    open(msg) {
      // 成功弹出
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    async upadd() {
      // 添加
      if (this.name !== '' && this.calalog !== '') {
        try {
          const res = await this.add({
            name: this.name,
            catalog: this.catalog,
          });
          if (res.data.errcode == 0) {
            this.open('添加成功');
            this.$router.push('/column');
          } else {
            this.$message.error(res.data.errcode);
            // 错误弹出内容
          }
        } catch (error) {
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
      if (this.name !== ' ' && this.calalog !== '') {
        try {
          const res = await this.update({
            name: this.name,
            catalog: this.catalog,
          });
          if (res.data.errcode == 0) {
            this.open('修改成功');
            this.$router.push('/column');
          } else {
            this.$message.error(res.data.errcode);
          }
        } catch (error) {
          console.log(err);
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
