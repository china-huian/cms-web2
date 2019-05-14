<template>
  <div class="block">
    <!-- <el-table :data="data" style="width: 100%" height="70vh">
      <el-table-column label="菜单名称" width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>-->
    <el-tree
      class="tree"
      :data="data"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick"
    ></el-tree>
    <el-button class="fd1 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline  el-icon--left"></i>
        新建菜单
    </el-button>
    <el-button class="fd1 addbtn" type="danger" @click="add">
        <i class="el-icon-delete  el-icon--left"></i>
        删除
    </el-button>

    <div class="content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择内容">
            <el-option label="栏目" value="lanmu"></el-option>
            <el-option label="单页" value="danye"></el-option>
            <el-option label="链接" value="lianjei"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="绑定id" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择内容">
            <el-option label="菜单内容" value="lanmu"></el-option>
            <el-option label="菜单内容" value="danye"></el-option>
            <el-option label="菜单内容" value="lianjei"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="id">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item> -->
        <!-- <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
        </el-form-item> -->
        <!-- <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <!-- <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <!-- <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      data: [
        {
          // name: '菜单管理',
          // date: '2019-04-25',
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
            },
          ],
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
            },
            {
              label: '二级 2-2',
            },
          ],
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
            },
            {
              label: '二级 3-2',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      ruleForm: {
        name: '',
        id: '',
        region: '',
        date1: '',
        date2: '',
        // delivery: false,
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        id: [{ required: true, message: '请输入id', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        region: [{ required: true, message: '请选择类型', trigger: 'change' }],
        date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
        date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
      },
    };
  },
  methods: {
    ...mapActions('menu', ['query']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    handleNodeClick() {},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
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
  width: 20%;
}
.content {
  float: left;
  width: 70%;
  margin: 1em;
  /* background-color: #b52415; */
}
</style>
