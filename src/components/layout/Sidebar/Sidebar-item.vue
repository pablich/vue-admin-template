<template lang="pug">
li
    b-collapse(:open='false', v-if="item.childrens")
        a(href='#').collapsed(slot='trigger') 
            i(:class="item.icon")
            span {{item.name}}
            span.arrow
        ul#products.sub-menu.collapse
            li(v-for="children in item.childrens")
                router-link(:to='children.url') 
                 span {{children.name}}
    router-link(v-else, :to='item.url')
        i(:class="item.icon") 
        span {{item.name}}
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    item: { type: Object, required: true },
  },
};
</script>
