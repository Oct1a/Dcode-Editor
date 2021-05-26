<template>
  <div class="site-header site-header__header-one">
    <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky original">
      <div class="container clearfix">
        <div class="logo-box clearfix">
          <a class="navbar-brand" href="/#/index">
            <img
              :src="logo"
              class="main-logo"
              width="120"
              alt="Dcode-Editor"/>
          </a>
          <button class="menu-toggler" data-target=".main-navigation">
            <span class="fa fa-bars"></span>
          </button>
        </div>
        <div class="right-side-box">
          <a class="thm-btn header__cta-btn" href="/#/home" v-if="this.$store.state.user.access_token"> <span>欢迎  {{userData.name}}</span></a>
          <a class="thm-btn header__cta-btn" href="/#/login" v-else> <span>登录</span></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'headerNav',
  data() {
    return {
      logo:require('@/common/images/logo.png'),
      userData:this.$store.state.user.userInfo
    }
  },
};
</script>

<style>
.header-navigation {
  background-color: transparent;
  margin-bottom: 0;
  border: none;
  border-radius: 0;
  padding: 0;
  position: relative;
  background-color: transparent;
}
.header-navigation .container {
  background: transparent;
  position: relative;
  display: block;
}
.header-navigation .container .logo-box {
  float: left;
  position: absolute;
  top: 50%;
  left: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.header-navigation .container .navbar-brand {
  height: auto;
  margin: 0;
  line-height: 1;
}
.header-navigation .container .menu-toggler {
  display: none;
}
.header-navigation .container .right-side-box {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 15px;
}
.site-header {
  position: relative;

  margin-top: 57px;
}
.site-header__header-one {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 91;
}

</style>