<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">配置管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加配置
      </el-button>
    </div>
    <!-- <Columnlist class="list" :data="pageslist"></Columnlist> -->
    <Columnlist class="list" :list="Array(...list)" :limit="limit" :skip="skip"></Columnlist>
    <Pagination :total="total" v-on:pagination="paging" :limit="limit"></Pagination>
  </div>
</template>

<script>
import Columnlist from '@/components/columnlist';
import Pagination from '@/components/pagination';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      skip: 1,
      limi: 10,
    };
  },
  components: {
    Columnlist,
    Pagination,
  },
  methods: {
    ...mapActions('dispose', ['query']),
    add() {
      this.$router.push('dispose/add');
    },
    paging({ skip, limit }) {
      this.skip = skip;
      this.limit = limit;
      this.query({ skip: skip, limit: limit });
    },
  },
  mounted() {
    this.query({ skip: 1, limit: this.limit });
  },
  computed: {
    ...mapState({
      list: state => state.dispose.list,
      total: state => state.dispose.total,
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
