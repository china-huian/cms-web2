<template>
  <div class="list">
    <el-table :data="data" style="width: 100%" height="70vh">
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
    </el-table>
    <div class="block">
      <el-pagination :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: '菜单管理',
          date: '2019-04-25',
        },
      ],
      currentPage: 5,
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
}
</style>
