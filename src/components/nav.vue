<template>
  <div class="fd1 navbox">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#47554E"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <img src="@/assets/img/logo.png" class="bj">
      <template v-for="(item, i) in nav">
        <el-menu-item :key="i" :index="String(i + 1)" v-if="item.arr.length == 0">
          <template slot="title">
            <p @click="btn(item)">{{ item.title }}</p>
          </template>
        </el-menu-item>
        <el-submenu :key="i" :index="String(i + 1)" v-if="item.arr.length > 0">
          <template slot="title">
            <p @click="btn(item)">{{ item.title }}</p>
          </template>
          <!-- <el-menu-item v-for="(item, idx) in item.arr" :key="idx" :index="String(i + '-' + idx)" @click="btn(item)">{{ item.name }} </el-menu-item> -->
          <el-menu-item
            v-for="(item, idx) in list"
            :key="idx"
            :index="String(i + '-' + idx)"
            @click="btn(item)"
          >{{ item.name }}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import nav from '@/store/modules/nav-list.js'
import navChild from '@/store/modules/nav.js';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'nav-list',
  data() {
    return {
      nav: null,
    };
  },
  mounted() {
    this.nav = nav;
    this.query();
  },
  methods: {
    ...mapActions('column', ['query']),
    btn(item) {
      this.$router.push(item.link);
    },
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

.el-menu {
  border: none;
}
</style>
