<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">菜单管理</span>
      <!-- <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加一级菜单
      </el-button> -->
    </div>
    <Menulist class="list" :list="list"></Menulist>
  </div>
</template>

<script>
import Menulist from '@/components/menulist';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      // 这里面的id可能是listForm.id
    };
  },
  components: {
    Menulist,
  },
  methods: {
    ...mapActions('menu', ['query']),
    // add(data) {},
  },
  computed: {
    ...mapState({
      // list: state => state.menu.list,
      list: state => state.menu.list,
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
