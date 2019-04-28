<template>
  <div class="fj self">
    <Nav class="fd1"></Nav>
    <router-view class="fd1"></router-view>
  </div>
</template>

<script>
import Nav from '@/components/nav';
export default {
  components: {
    Nav,
  },
};
</script>

<style>
.self {
  min-width: 1300px;
  background: #eae9e6;
}
</style>
