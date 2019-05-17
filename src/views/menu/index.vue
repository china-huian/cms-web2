<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">菜单管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加一级菜单
      </el-button>
    </div>
    <Menulist class="list" :list="list"></Menulist>
  </div>
</template>

<script>
import Menulist from '@/components/menulist';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  components: {
    Menulist,
  },
  methods: {
    ...mapActions('menu', ['query']),
    add() {
      this.$router.push('menu/add');
    },
  },
  computed: {
    ...mapState({
      // list: state => state.menu.list,
      list: state => state.menu.list,
      // total: state => state.menu.total,
    }),
  },
  mounted() {
    this.query();
    // console.log(this.list);
  },
  // watch: {
  //   list: function(val){
  //     console.log(val);
  //   }
  // }
};
</script>
<style load="loss" scoped>
@import '~@/assets/style.less';
.list {
  width: 100%;
  margin: 0;
}
</style>
