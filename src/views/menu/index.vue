<template>
  <div class="box">
    <div class="title fj block">
      <span class="fd1">菜单管理</span>
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
  },
  computed: {
    ...mapState({
      list: state => state.menu.list,
    }),
  },
  mounted() {
    this.query();
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
