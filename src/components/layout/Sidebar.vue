<template lang="pug">
 aside.column
  .sidebar(:style="size")
    .nav-side-menu
      .brand Brand Logo
      i.fa.fa-bars.fa-2x.toggle-btn(data-toggle='collapse', data-target='#menu-content')
      .menu-list
        ul#menu-content.menu-content.collapse.out
          li.active
            router-link(to='/')
              i.mdi.mdi-home
              |  Home
          
          li
            router-link(to='/about')
              i.mdi.mdi-information
              |  About
          b-collapse(:open='false')
            li.collapsed(slot='trigger') 
              a(href='#')
                i.mdi.mdi-arrow-down-drop-circle-outline
                |  Collapse
                span.arrow
            ul#products.sub-menu.collapse
              li.active
                a(href='#') CSS3 Animation
              li
                a(href='#') General
              li
                a(href='#') Buttons
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        size: `min-height: ${window.innerHeight - 35}px`,
      };
    },
  };
</script>

<style>
#app > .columns > aside {
  max-width: 260px;
  padding: 0!important;
}
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
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
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
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li.active a,
.nav-side-menu li .sub-menu li.active a {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
  margin-top: 0;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}

.nav-side-menu ul .sub-menu li:before,
.nav-side-menu li .sub-menu li:before {
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
@media (max-width: 767px) {
  .nav-side-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 767px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
body {
  margin: 0px;
  padding: 0px;
}

</style>