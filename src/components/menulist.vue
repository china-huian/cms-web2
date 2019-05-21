<template>
  <div class="block">
    <el-tree
      class="tree"
      :data="list"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
    ></el-tree>

    <div class="content">
      <el-form
        :model="listForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input class="input" v-model="listForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select
            class="fd1"
            v-model="listForm.type"
            @change="typequery(listForm.type)"
            placeholder="请选择内容"
          >
            <el-option label="空" value></el-option>
            <el-option label="栏目" value="0"></el-option>
            <el-option label="单页" value="1"></el-option>
            <el-option label="链接" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="绑定id" v-if="listForm.type != '2'">
          <el-select class="fd1" v-model="listForm.binding" placeholder="选择绑定的id">
            <el-option label="空" value=" "></el-option>
            <el-option
              v-for="(item, index) in typelist"
              :key="index"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="index">
          <el-input class="input" v-model="listForm.index" type="number"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link" v-if="listForm.type == '2'">
          <el-input class="input" v-model="listForm.url"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="fd1 addbtn" type="success" @click="addOne">
            <i class="el-icon-edit-outline el-icon--left"></i>
            添加一级菜单
          </el-button>
          <el-button class="fd1 addbtn" type="success" @click="add">
            <i class="el-icon-edit-outline el-icon--left"></i>
            新建二级菜单
          </el-button>
          <el-button class="fd1 addbtn" type="primary" @click="submitForm('ruleForm')">
            <i class="el-icon-circle-check el-icon--left"></i>
            创建
          </el-button>
          <el-button class="fd1 addbtn" type="danger" @click>
            <i class="el-icon-delete el-icon--left"></i>
            删除
          </el-button>
          <!-- <el-button class="fd1 addbtn" @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';
const { mapActions: pageActions } = createNamespacedHelpers('page');
const { mapActions: columnActions } = createNamespacedHelpers('column');
const { mapActions } = createNamespacedHelpers('menu');
export default {
  data() {
    1;
    return {
      listForm: {
        name: null,
        type: null,
        binding: this.typelist,
        index: null,
        url: null,
        // delivery: true,
      },
      // id: null,
      // 类型转换
      typelist: null,
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      rules: {
        // name: [{ required: true, message: '请输入名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        index: [{ required: true, message: '请输入数字', trigger: 'blur' }],
        link: [{ required: true, message: '请输入链接', trigger: 'blur' }],
      },
    };
  },
  methods: {
    ...pageActions({ queryPage: 'query' }),
    ...columnActions({ queryColumn: 'query' }),
    ...mapActions(['query', 'add', 'delete', 'update', 'fetch']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    handleNodeClick(data) {
      console.log(data);
      // console.log(data.name)
      this.listForm.name = data.name;
      this.listForm.index = data.index;
      // 应该是排序自己输入的值
      this.listForm.type = data.type;
      // 获取了id，应该根据id把内容显示在这里
      this.listForm.binding = data.binding;
      this.listForm.url = data.url;
      // console.log(data._id);
    },
    // 重置
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    async typequery(type) {
      // console.log(type);
      if (type == '0') {
        const res = await this.queryColumn();
        this.typelist = res.data.data;
      } else if (type == '1') {
        const res = await this.queryPage();
        this.typelist = res.data.data;
      }
    },
    addOne(data) {
      this.listForm.name = null;
      this.listForm.index = null;
      // 应该是排序自己输入的值
      this.listForm.type = null;
      // 获取了id，应该根据id把内容显示在这里
      this.listForm.binding = null;
      this.listForm.url = null;
    },
    // 添加
    async submitForm() {
      if (this.listForm.name !== null && this.listForm.index !== null) {
        if (this.listForm.type == '2' && this.listForm.url == null) {
          this.$message.error('请添加链接');
        }
        const res = await this.add({ ...this.listForm });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: Array };
        }
      } else {
        this.$message.error('请完整填写内容');
      }
    },
  },
  props: {
    list: null,
    total: null,
  },
  mounted() {},
};
</script>

<style load="loss" scoped>
@import '~@/assets/style.less';
.block {
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  float: left;
}
.tree {
  /* background-color: #123456; */
  float: left;
  margin-top: 1em;
  width: 20%;
}
.content {
  float: left;
  width: 70%;
  margin: 1em;
  /* background-color: #b52415; */
}
.input {
  width: 50%;
  float: left;
}
</style>
