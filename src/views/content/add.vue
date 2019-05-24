<template>
  <div class="box addbox block">
    <div class="title fj">
      <span class="fd1" v-if="!id">内容添加</span>
      <span class="fd1" v-else>内容修改</span>
    </div>
    <div class="input">
      <el-input class="inputname block" v-model="datas.name" placeholder="请输入名称"></el-input>
      <el-input class="inputname block" v-model="datas.index" placeholder="请输入排序" @change="inputchange"></el-input>
    </div>
    <el-select class="inputname block sel" v-model="datas.state" placeholder="请选择状态">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <Wangeditor class="addbtn" v-if="id == null || datas.content !== null" v-model="datas.content"></Wangeditor>
    <div class="uploadbox">
      <el-upload
        name="file"
        class="upload-demo"
        ref="newupload"
        action="/admin/file/upload"
        :on-remove="handleRemove"
        :file-list="datas.annex"
        :auto-upload="true"
        :on-success="success"
      >
        <el-button>选取文件</el-button>
      </el-upload>
    </div>
    <div id="tag" class="tag">
      <el-input v-model="item.label" v-for="(item, index) of datas.label" :key="index"></el-input>
      <el-button @click="addtag">添加标签</el-button>
    </div>
    <div class="btn">
      <el-button class="fd1 addbtn" v-if="!id" type="primary" @click="doadd">
        <i class="el-icon-circle-check el-icon--left"></i>
        确认添加
      </el-button>
      <el-button class="fd1 addbtn" v-else type="primary" @click="doupdate">
        <i class="el-icon-circle-check el-icon--left"></i>
        确认修改
      </el-button>
    </div>
  </div>
</template>
<script>
import Wangeditor from '@/components/wangeditor';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      options: [{ value: '草稿' }, { value: '发布' }],
      id: null,
      list: [],
      fileList: [],
      datas: {
        name: null,
        binding: null,
        content: null,
        index: null,
        state: null,
        annex: [],
        label: [],
      },
    };
  },
  components: {
    Wangeditor,
  },
  async mounted() {
    this.datas.binding = this.$route.query.bindingid;
    this.id = this.$route.query.id;
    if (this.id) {
      const res = await this.fetch({ id: this.id });
      if (res.data.errcode == 0) {
        this.datas = res.data.data;
      }
    }
  },
  methods: {
    ...mapActions('content', ['fetch', 'add', 'update']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    async doadd() {
      if (this.datas.name !== '') {
        const res = await this.add({
          ...this.datas,
        });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          this.$router.push({ path: '/content', query: { id: this.datas.binding } });
        } else {
          this.$message.error('添加失败');
        }
      } else {
        this.$message.error('请填写完整信息');
      }
    },
    async doupdate() {
      const res = await this.update({ id: this.id, ...this.datas });
      if (res.data.errcode == 0) {
        this.open('修改成功');
        this.$router.push({ path: '/content', query: { id: this.datas.binding } });
      } else {
        this.$message.error(res.data.errmsg);
      }
    },
    success(file) {
      this.datas.annex.push(file.data);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file) {
      for (let i = 0; i < this.datas.annex.length; i++) {
        if (file._id == this.datas.annex[i]._id) {
          this.datas.annex.splice(i, 1);
        }
      }
    },
    addtag() {
      this.datas.label.push({ label: null });
    },
    inputchange() {
      var num = Number(this.datas.index);
      if (num !== num) {
        this.$message.error('排序必须为数字');
      }
    },
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.sel {
  float: left;
  margin-left: 15%;
}
.input {
  width: 50%;
  float: left;
}
.uploadbox {
  width: 40%;
  float: left;
  margin-top: 20px;
}
.tag {
  float: right;
  display: flex;
  margin-top: 20px;
}
.taginput {
  width: 40%;
}
.upload-demo {
  float: left;
  margin-bottom: 30px;
}
.fujian {
  display: block;
  float: left;
  line-height: 40px;
  margin-right: 10px;
}
.addbtn {
  clear: both;
}
</style>
