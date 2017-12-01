<template lang="pug">
.column
    vl-navbar
    .main(:style="'min-height: '+height+'px'")
        router-view
</template>

<script>
import VlNavbar from './Navbar.vue';

export default {
  name: 'Main',
  data() {
    return {
      height: 0,
      width: 0,
    };
  },
  components: { VlNavbar },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    getWindowWidth() {
      this.width = document.documentElement.clientWidth;
    },
    getWindowHeight() {
      const headerHeight = 52;
      const navbarHeight = 32;
      const footerHeight = 35;
      const padding = 20;
      const totalHeight = headerHeight + footerHeight + padding + navbarHeight;
      this.height = document.documentElement.clientHeight - totalHeight;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  },
};
</script>

<style scoped>
.main {
  background: white;
  padding: 15px;
}
.column {
  padding: 0;
}
.navbar {
  background-color: #4e2e47;
}
</style>