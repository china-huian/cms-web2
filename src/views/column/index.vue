<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">栏目管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline  el-icon--left"></i>
        添加栏目
      </el-button>
    </div>
    <Columnlist class="list" :data="columnlist"> </Columnlist>
  </div>
</template>

<script>
import Columnlist from '@/components/columnlist';
import { mapActions , mapState } from 'vuex';
export default {
  data() {
    return {
      columnlist: [
        {
          name: '焦点新闻',
          date: '2019-04-24',
        },
      ],
    };
  },
  components: {
    Columnlist,
  },
  methods: {
    ...mapActions('column', ['query']),
    add() {
      this.$router.push('column/add');
    },
  },
  mounted(){
    this.query();
  },
  computed: {
    ...mapState({
      list: state => state.column.list,
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
/* .addbtn {
  margin-top: 1.6em;
} */
</style>
