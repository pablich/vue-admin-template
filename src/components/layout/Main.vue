<template lang="pug">
.column
    .main
        router-view
</template>

<script>
    export default {
      name: 'Main',
    };
</script>

<style>
.main {
  background: white;
}
</style>