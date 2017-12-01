<template lang="pug">
.column
    .main(:style="'min-height: '+height+'px'")
        router-view
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      height: 0,
      width: 0,
    };
  },
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
      const footerHeight = 35;
      const padding = 20;
      this.height = document.documentElement.clientHeight - headerHeight - footerHeight - padding;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  },
};
</script>

<style>
.main {
  background: white;
}
</style>