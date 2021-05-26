<template>
  <div class="page-wrapper">
      <header-nav/>
      <banner/>
      <contact/>
      <footerNav/>
  </div>
</template>
<script>
import "../../common/styles/bootstrap.min.css";

import headerNav from './components/headerNav'
import banner from './components/banner'
import contact from './components/contact'
import footerNav from './components/footer'

export default {
  components: {
    headerNav,
    banner,
    contact,
    footerNav
  }
};
</script>
<style lang="scss">
#app {
  overflow: auto;
}
</style>
<style lang="scss">
a:active,
a:hover,
a:focus,
a:visited {
  text-decoration: none;
}
.page-wrapper {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-width: 300px;
  // overflow: hidden;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.block-title {
  margin-bottom: 45px;
}
.block-title__title {
  margin: 0;
  margin-top: -10px;
  font-size: 50px;
  font-weight: 400;
  color: #2a2833;
  line-height: 1.2em;
}
.block-title__title span {
  font-weight: 700;
}
.thm-btn {
  border: none;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #2a2833;
  padding: 13px 41px;
  border-radius: 5px;
  -webkit-transition: background 0.4s ease, color 0.4s ease;
  transition: background 0.4s ease, color 0.4s ease;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff4eb5),
    to(#ffa065)
  );
  background-image: linear-gradient(90deg, #ff4eb5 0%, #ffa065 100%);
  position: relative;
}
.thm-btn:before {
  content: "";
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: 5px;
  background-color: #fff;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition: -webkit-transform 0.4s ease;
  transition: -webkit-transform 0.4s ease;
  transition: transform 0.4s ease;
  transition: transform 0.4s ease, -webkit-transform 0.4s ease;
}
.thm-btn span {
  position: relative;
}
.thm-btn:hover {
  color: #fff;
}
.thm-btn:hover:before {
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
}
</style>