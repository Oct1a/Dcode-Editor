<template>
  <footer class="site-footer">
    <div class="site-footer__upper">
      <div class="container">
        <div class="row">
            <div class="col-lg-3">
            <div class="footer-widget footer-widget__about">
              <img
                 :src="logo"
                width="119"
                alt=""
                class="footer-widget__logo"
              />
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
            <div class="footer-widget">
              <h3 class="footer-widget__title">Explore</h3>

              <ul class="footer-widget__links list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
              </ul>
            </div>

            <div class="footer-widget">
              <h3 class="footer-widget__title">Services</h3>

              <ul class="footer-widget__links list-unstyled">
                <li>
                  <a href="#">Speed Optimization</a>
                </li>
                <li>
                  <a href="#">Marketing Analysis</a>
                </li>
                <li>
                  <a href="#">SEO and Backlinks</a>
                </li>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
              </ul>
            </div>

            <div class="footer-widget">
              <h3 class="footer-widget__title">Links</h3>

              <ul class="footer-widget__links list-unstyled">
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Clients</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container">
        <div class="inner-container text-center">
          <p class="site-footer__copy">
            © copyright 2021 by
            <a href="https://github.com/Oct1a">Oct1a_H</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo:require('@/common/images/logo.png')
    }
  },
};
</script>

<style>
.site-footer {
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-color: white;
  -webkit-box-shadow: 0px -1px 0px 0px #efefef;
  box-shadow: 0px -1px 0px 0px #efefef;
}
.site-footer__upper {
  padding-top: 120px;
  padding-bottom: 120px;
}
.site-footer__bottom {
  background-color: #fff9ff;
}
.site-footer__bottom .inner-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  padding-top: 44px;
  padding-bottom: 44px;
}
.site-footer__copy {
  font-size: 16px;
  font-weight: 400;
  color: #74727a;
  margin: 0;
}
.site-footer__copy a {
  color: #ff4eb5;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.site-footer__copy a:hover {
  color: #fff;
}
.site-footer__social {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.site-footer__social a {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #ff4eb5;
  text-align: center;
  line-height: 56px;
  color: #fff;
  background-size: 200% auto;
  font-size: 18px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.site-footer__social a + a {
  margin-left: 10px;
}
.site-footer__social a:hover {
  background-position: right center;
}
.site-footer__social a.fa-facebook-square {
  background-image: linear-gradient(
    40deg,
    #ffa95c 0%,
    #ff43c0 51%,
    #ffa95c 100%
  );
}
.site-footer__social a.fa-twitter {
  background-image: linear-gradient(
    40deg,
    #0db8ff 0%,
    #f332ff 51%,
    #0db8ff 100%
  );
}
.site-footer__social a.fa-instagram {
  background-image: linear-gradient(
    40deg,
    #39aeff 0%,
    #3cff53 51%,
    #39aeff 100%
  );
}
.site-footer__social a.fa-pinterest-p {
  background-image: linear-gradient(
    40deg,
    #ff703e 0%,
    #ffec4e 51%,
    #ff703e 100%
  );
}
@media (min-width: 1200px) {
  .footer-widget__links-wrap {
    padding-right: 55px;
  }
}
.footer-widget__title {
  font-size: 18px;
  font-weight: 500;
  color: #2a2833;
  margin: 0;
  line-height: 1em;
  margin-bottom: 40px;
}
.footer-widget__links {
  margin: 0;
  margin-top: -5px;
}
.footer-widget__links li {
  line-height: 1em;
}
.footer-widget__links li + li {
  margin-top: 20px;
}
.footer-widget__links li a {
  font-size: 16px;
  font-weight: 400;
  color: #74727a;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.footer-widget__links li a:hover {
  color: #ffa065;
}
.footer-widget__contact {
  font-size: 16px;
  font-weight: 400;
  color: #74727a;
  margin: 0;
  line-height: 30px;
}
.footer-widget__contact a {
  color: inherit;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.footer-widget__contact a:hover {
  color: #ff4eb5;
}
.footer-widget__contact + .footer-widget__contact {
  margin-top: 15px;
}
.footer-widget__logo {
  margin-bottom: 40px;
}
</style>