<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">栏目管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline  el-icon--left"></i>
        添加栏目
      </el-button>
    </div>
    <Columnlist class="list" :list="lista"> </Columnlist>
    <Pagination></Pagination>
  </div>
</template>

<script>
import Columnlist from '@/components/columnlist';
import Pagination from '@/components/pagination';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
    };
  },
  components: {
    Columnlist,
    Pagination,
  },
  methods: {
    // 固定写法，第一个值为模块名，第二个值为字符串数组，其中为自己定义的异步函数（actions）
    ...mapActions('column', ['query']),

    add() {
      this.$router.push('column/add');
    },
  },
  mounted() {
    // 使用时直接this.函数名调用，括号中对应所传参数，相当于paging花括号中的值
    this.query({ skip: 1, limit: 30 });
  },
  computed: {
    // 通过计算函数取到state的值，计算函数中的固定函数，箭头函数中state为固定参数，函数体中取到的是state函数中的column模块中的list
    ...mapState({
      lista: state => state.column.list,
    }),
  },
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.list {
  width: 100%;
  margin: 0;
}
</style>
