<template lang="pug">
  #app
    .columns.is-12-mobile
      vl-sidebar
      vl-main
    vl-footer
</template>

<script>
import VlSidebar from './components/layout/Sidebar/Sidebar-list.vue';
import VlMain from './components/layout/Main.vue';
import VlFooter from './components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    VlSidebar,
    VlMain,
    VlFooter,
  },
};
</script>

<style>
body {
    background: #fff;
}
</style>