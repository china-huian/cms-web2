<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">配置管理</span>
      <el-button class="fd2 addbtn" type="success" @click="add">
        <i class="el-icon-edit-outline el-icon--left"></i>
        添加配置
      </el-button>
    </div>
    <List class="list" :list="list" v-on:remove="remove" :limit="limit"></List>
    <!-- <Columnlist class="list" :list="Array(...list)" :limit="limit" :skip="skip"></Columnlist> -->
    <Pagination :total="total" v-on:pagination="paging" :limit="limit"></Pagination>
  </div>
</template>

<script>
import List from '@/components/list';
import Pagination from '@/components/pagination';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'dispose',
  data() {
    return {
      skip: 1,
      limit: 10,
    };
  },
  components: {
    List,
    Pagination,
  },
  methods: {
    ...mapActions('dispose', ['query', 'delete']),
    open(msg) {
      this.$message({
        message: msg,
        type: 'success',
      });
    },
    add() {
      this.$router.push('dispose/add');
    },
    paging({ skip, limit }) {
      this.skip = skip;
      this.limit = limit;
      this.query({ skip: skip, limit: limit });
    },

    async remove(id) {
      // 删除
      try {
        const res = await this.delete({ id: id });
        // console.log(res.data);
        if (res.data.errcode == 0) {
          this.open('删除成功');
          this.query({ skip: this.skip, limit: this.limit });
        } else {
          this.$message.error(res.data.errmsg);
          console.log(res.data.errmsg);
        }
      } catch (err) {
        this.$message.error(err);
      }
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
</style>
