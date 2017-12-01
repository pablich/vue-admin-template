<template lang="pug">
 aside
  .sidebar(:style="'min-height: '+height+'px'", :class="{ active: active }")
    .nav-side-menu
      .brand 
        span Brand Logo
        button(class="navbar-burger", @click="toggle()")
          span
          span
          span
      i.fa.fa-bars.fa-2x.toggle-btn(data-toggle='collapse', data-target='#menu-content')
      .menu-list(:class="{ active: active }")
        ul#menu-content.menu-content
          vl-sidebar-item(v-for="item in items", :item="item")
</template>

<script>
  import VlSidebarItem from './Sidebar-item.vue';

  export default {
    name: 'Menu',
    components: { VlSidebarItem },
    data() {
      return {
        height: 0,
        width: 0,
        active: false,
        items: [{
          name: 'Home',
          url: '/',
          icon: 'mdi-home',
        }, {
          name: 'About',
          url: '/About',
          icon: 'mdi-home',
        }, {
          name: 'About',
          url: '/About',
          icon: 'mdi-home',
          childrens: [{
            name: 'Children 1',
            url: '/Children1',
          }, {
            name: 'Children 2',
            url: '/Children2',
          }],
        }],
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
      toggle() {
        this.active = !this.active;
      },
      getWindowWidth() {
        this.width = document.documentElement.clientWidth;
      },
      getWindowHeight() {
        this.height = document.documentElement.clientHeight - 35;
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth);
      window.removeEventListener('resize', this.getWindowHeight);
    },
  };
</script>

<style>
#app > .columns {
  margin: 0!important;
}
.sidebar {
  width: 250px;
  bottom: 35px;
  background: #601d51; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #601d51 0%, #af70a1 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #601d51 0%,#af70a1 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #601d51 0%,#af70a1 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#601d51', endColorstr='#af70a1',GradientType=1 );
  height: 100%;
}
.nav-side-menu {
  overflow: auto;
  font-size: 12px;
  font-weight: 200;
  color: #e1ffff;
}
.nav-side-menu .brand {
  line-height: 52px;
  display: block;
  text-align: left;
  font-size: 14px;
  padding-left: 20px;
  height: 52px;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  font-size: 0.8rem;
  cursor: pointer;
}
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: 'Material Design Icons';
  content: "\F140";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  float: right;
}
.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #d8a8cd;
  background-color: #a36394;
}

.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  color: #e2add5;
}
.nav-side-menu ul .sub-menu li.active a,
.nav-side-menu li .sub-menu li.active a {
  color: #e2add5;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #6d3f61;
    border: none;
    line-height: 28px;
    border-bottom: 1px solid #6c3f60;
    margin-left: 0px;
    margin-top: 0;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}

.nav-side-menu ul .sub-menu a:before,
.nav-side-menu li .sub-menu a:before {
  font-family: 'Material Design Icons';
  content: "\F142";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #ac6c9e00;
  border-bottom: 1px solid #a56596;
}
.nav-side-menu li a {
  text-decoration: none;
  color: #e1ffff;
  display: inline-block;
  text-decoration: none!important;
  width: 100%;
}
.nav-side-menu .collapse button i,
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 10px;
  font-size: 17px;
}
.nav-side-menu .menu-list a:hover {
  background: none;
  color: #fff
}
.nav-side-menu .collapse-content ul {
    border-left: none!important;
    margin: 0;
    padding: 0;
}
.nav-side-menu .collapse button:hover {
    border-left: 3px solid #d19b3d;
    background-color: #4f5b69;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    background-color: whitesmoke;
    color: #363636;
}
.collapse button:hover,
.nav-side-menu li:hover {
  border-left: 3px solid #ffffff;
  background-color: #a66697;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.nav-side-menu .collapse button {
    background: none;
    text-decoration: none;
    color: #e1ffff;
    border-radius: 2px;
    display: block;
    padding: 0.5em 0.75em;
    width: 100%;
    text-align: left;
}
.nav-side-menu .collapse .notification {
    padding: 0;
    margin: 0;
    border-radius: 0;
}
body {
  margin: 0px;
  padding: 0px;
}
.navbar-burger {
  display: none
}
.navbar-burger:focus {
    outline: none;
}
.navbar-burger {
  cursor: pointer;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  display: inline-block;
  float: right;
  background: none;
  border: none;
  border-radius: 0;
}
.navbar-burger span{
  background: #fff
}
@media (min-width: 769px) {
  .sidebar.active{
      width: 60px;
  }
  .sidebar.active li span{
      display: none;
  }
  .sidebar.active  .brand > span{
      display: none;
  }
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    bottom: 35px;
    min-height: auto!important;
  }
  .sidebar .menu-list{
    opacity: 0;
    height: 0;
    -webkit-transition: all 1s linear;
    -moz-transition: all 1s linear;
    -o-transition: all 1s linear;
    transition: all 1s linear;
  }
  .sidebar .menu-list.active{
    opacity: 1;
    height: auto;
  }
  .navbar-burger {
    background: #4d2e47;
  }
}
</style>