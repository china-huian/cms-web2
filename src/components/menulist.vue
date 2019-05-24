<template>
  <div class="block">
    <el-tree class="tree" :data="list" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>

    <div class="content">
      <el-form :model="listForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input class="input" v-model="listForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select class="fd1" v-model="listForm.type" @change="typequery(listForm.type)" placeholder="请选择内容">
            <!-- <el-option label="空" value=></el-option> -->
            <el-option label="空" :value="null"></el-option>
            <el-option label="栏目" value="0"></el-option>
            <el-option label="单页" value="1"></el-option>
            <el-option label="链接" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="绑定id" v-if="listForm.type != '2'">
          <el-select class="fd1" v-model="listForm.binding" placeholder="选择绑定的id">
            <el-option label="空" :value="null"></el-option>
            <!-- <el-option label="空" ></el-option> -->
            <el-option v-for="(item, index) in typelist" :key="index" :label="item.name" :value="item._id"></el-option>
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
          <el-button class="fd1 addbtn" type="success" @click="addTow" v-if="id && children == false">
            <i class="el-icon-edit-outline el-icon--left"></i>
            新建二级菜单
          </el-button>
          <el-button class="fd1 addbtn" type="primary" @click="submitForm" v-if="!id">
            <i class="el-icon-circle-check el-icon--left"></i>
            创建
          </el-button>
          <el-button class="fd1 addbtn" type="primary" @click="updates" v-if="id != null && children == false">
            <i class="el-icon-circle-check el-icon--left"></i>
            修改
          </el-button>
          <el-button class="fd1 addbtn" type="danger" @click="remove" v-if="id != null && children == false">
            <i class="el-icon-delete el-icon--left"></i>
            删除
          </el-button>
          <el-button class="fd1 addbtn" type="primary" @click="ChildrenAdd" v-if="id && children == true">
            <i class="el-icon-circle-check el-icon--left"></i>
            创建
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
// import { constants } from 'crypto';
const { mapActions: pageActions } = createNamespacedHelpers('page');
const { mapActions: columnActions } = createNamespacedHelpers('column');
const { mapActions } = createNamespacedHelpers('menu');
export default {
  data() {
    return {
      listForm: {
        name: null,
        type: null,
        binding: null,
        index: null,
        url: null,
        children: [],
      },
      // 类型转换
      typelist: null,
      children: false, // 样式切换
      Deposit: [], // 存储返回数据
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        index: [{ required: true, message: '请输入数字', trigger: 'blur' }],
        link: [{ required: true, message: '请输入链接', trigger: 'blur' }],
      },
      id: null,
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
    async handleNodeClick(datas, a) {
      this.children = false;
      if (a.parent.data._id) {
        this.id = a.parent.data._id;
      } else {
        this.id = datas._id;
      }
      this.listForm = { ...datas };
      let res = await this.fetch({ id: this.id });
      this.Deposit = res.data.data;
      this.typequery(datas.type);
    },
    // 右侧动态的加载栏目单页的内容。
    async typequery(type) {
      if (type == '0') {
        const res = await this.queryColumn();
        this.typelist = res.data.data;
      } else if (type == '1') {
        const res = await this.queryPage();
        this.typelist = res.data.data;
      }
    },
    // 添加一级菜单
    addOne() {
      this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
      this.id = null;
      this.children = false;
    },
    // 添加二级菜单
    addTow() {
      if (this.listForm.type == null && this.listForm.binding == null) {
        if (this.listForm._id) {
          this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
          this.children = true;
        } else {
          this.$message.error('只能给一级菜单添加');
        }
      } else {
        this.$message.error('一级菜单类型与绑定ID应该为空');
      }
    },
    async ChildrenAdd() {
      // 构造ID
      this.listForm.id = Number(
        Math.random()
          .toString()
          .substr(3, length) + Date.now()
      ).toString(36);
      this.Deposit.children.push(this.listForm);
      const res = await this.update({
        ...this.Deposit,
        id: this.id,
      });
      if (res.data.errcode == 0) {
        this.open('添加二级菜单成功');
        this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
        this.query();
      }
    },

    // 添加一级
    async submitForm() {
      if (this.listForm.name !== null && this.listForm.index !== null) {
        if (this.listForm.type == '2' && this.listForm.url == null) {
          this.$message.error('请添加链接');
          return false;
        }
        const res = await this.add({ ...this.listForm });
        if (res.data.errcode == 0) {
          this.open('添加成功');
          this.query();
          this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
        }
      } else {
        this.$message.error('请完整填写带有红色星号的必填内容');
      }
    },
    // 删除
    async remove() {
      if (!this.listForm._id) {
        // 判断是不是一级
        for (let i = 0; i < this.Deposit.children.length; i++) {
          if (this.listForm.id == this.Deposit.children[i].id) {
            this.Deposit.children.splice(i, 1);
            const res = await this.update({ ...this.Deposit, id: this.id });
            if (res.data.errcode == 0) {
              this.open('删除成功');
              this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: Array };
              this.query();
            }
          }
        }
      } else {
        // 是一级
        const res = await this.delete({ id: this.id });
        if (res.data.errcode == 0) {
          this.open('删除成功');
          this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: Array };
          this.query();
        }
      }
    },
    // 修改
    async updates() {
      if (this.listForm.name !== null && this.listForm.index !== null) {
        if (this.listForm._id) {
          // 判断是不是一级
          if (this.type == null) {
            this.url = null;
            this.binding = null;
          }
          const res = await this.update({ ...this.listForm, id: this.id });
          if (res.data.errcode == 0) {
            this.open('修改成功');
            this.query();
            this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
          }
        } else {
          for (let i = 0; i < this.Deposit.children.length; i++) {
            if (this.listForm.id == this.Deposit.children[i].id) {
              this.Deposit.children[i] = this.listForm;
              const res = await this.update({ ...this.Deposit, id: this.id });
              if (res.data.errcode == 0) {
                this.open('修改成功');
                this.listForm = { name: null, type: null, binding: null, index: null, url: null, children: [] };
                this.query();
              }
            }
          }
        }
      } else {
        this.$message.error('请填写必填项');
      }
    },
  },
  props: {
    list: null,
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
