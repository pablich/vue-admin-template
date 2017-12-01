<template lang="pug">
nav.navbar
      .navbar-brand
      #navMenuColorlight-example.navbar-menu
        .navbar-start
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.button.is-primary.is-inverted.is-outlined
                  span.icon
                    i.mdi.mdi-message-outline
              p.control
                a.button.is-primary.is-inverted.is-outlined
                  span.icon
                    i.mdi.mdi-bell-outline
              p.control
                 a.button.is-primary.is-inverted.is-outlined
                  img(src="./../../assets/logo.png") 
                  span Usuario
                  span.icon
                    i.mdi.mdi-chevron-down
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>