<template>
  <div>
    <section class="service-one" id="features">
      <div class="container">
        <div class="block-title text-center">
          <h2 class="block-title__title">
            Checkout Our
            <span>Software</span>
            <br />Features Below.
          </h2>
        </div>

        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div class="service-one__single text-center">
              <div class="service-one__inner">
                <i class="service-one__icon dimon-icon-laptop"></i>
                <h3>
                  <a href="#">Speed <br />Optimization</a>
                </h3>
                <p>
                  Lorem ipsum is are <br />many variations of <br />pass of
                  majority.
                </p>
                <a href="#" class="service-one__link">
                  <i class="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div class="service-one__single text-center">
              <div class="service-one__inner">
                <i class="service-one__icon dimon-icon-presentation"></i>
                <h3>
                  <a href="#">Marketing <br />Analysis</a>
                </h3>
                <p>
                  Lorem ipsum is are <br />many variations of <br />pass of
                  majority.
                </p>
                <a href="#" class="service-one__link">
                  <i class="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div class="service-one__single text-center">
              <div class="service-one__inner">
                <i class="service-one__icon dimon-icon-target"></i>
                <h3>
                  <a href="#">SEO and <br />Backlinks</a>
                </h3>
                <p>
                  Lorem ipsum is are <br />many variations of <br />pass of
                  majority.
                </p>
                <a href="#" class="service-one__link">
                  <i class="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div class="service-one__single text-center">
              <div class="service-one__inner">
                <i class="service-one__icon dimon-icon-visualization"></i>
                <h3>
                  <a href="#">Content <br />Marketing</a>
                </h3>
                <p>
                  Lorem ipsum is are <br />many variations of <br />pass of
                  majority.
                </p>
                <a href="#" class="service-one__link">
                  <i class="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="video-one" id="video">
      <img
        src="../../common/images/website/background/video-one-bg.png"
        alt="Awesome Image"
        class="video-one__bg"
      />
      <div class="container wow fadeInUp" data-wow-duration="1500ms">
        <div class="video-one__box">
          <img
            src="../../common/images/website/resources/video-1-1.jpg"
            alt=""
          />
          <div class="video-one__content">
            <a
              href="https://www.youtube.com/watch?v=coI_aT4BDNA"
              class="video-popup video-one__btn"
            >
              <i class="fa fa-play"></i>
            </a>

            <h2 class="video-one__title">
              Watch Our
              <span>Tutorial</span>
              <br />Videos.
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-one">
      <img
        src="../../common/images/website/background/cta-one-bg.png"
        class="cta-one__bg"
        alt="Awesome Image"
      />
      <div class="container">
        <img
          src="../../common/images/website/mocs/cta-moc-1-1.png"
          class="cta-one__moc"
          alt="Awesome Image"
        />
        <div class="row justify-content-lg-end">
          <div class="col-lg-6">
            <div class="cta-one__content">
              <i class="cta-one__icon dimon-icon-data1"></i>
              <div class="block-title text-left">
                <h2 class="block-title__title">
                  Powerful <span>Tools</span>for Your Customers.
                </h2>
              </div>

              <div class="cta-one__text">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <ul class="list-unstyled">
                <li>
                  <i class="fa fa-check"></i>Refresing to get such a personal
                  touch.
                </li>
                <li>
                  <i class="fa fa-check"></i>Duis aute irure dolor in
                  reprehenderit in voluptate.
                </li>
                <li>
                  <i class="fa fa-check"></i>Velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </li>
              </ul>

              <a href="#" class="thm-btn"> <span>Get Started</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
/** 8. video styles*/
.video-one {
  position: relative;
}
.video-one__bg {
  position: absolute;
  bottom: 0%;
  left: 0;
}
.video-one .container {
  position: relative;
  padding: 15px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ffa95c),
    to(#ff43c0)
  );
  background-image: linear-gradient(0deg, #ffa95c 0%, #ff43c0 100%);
  border-radius: 7px;
  z-index: 10;
}
.video-one__box {
  position: relative;
  border-radius: 7px;
}
.video-one__box > img {
  width: 100%;
  border-radius: 7px;
}
.video-one__box:hover .video-one__content {
  background-color: rgba(42, 40, 51, 0.2);
}
.video-one__content {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(42, 40, 51, 0.6);
  top: 0;
  left: 0;
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
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 7px;
}
.video-one__btn {
  width: 106px;
  height: 106px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff4eb5),
    color-stop(51%, #ffa065),
    to(#ff4eb5)
  );
  background-image: linear-gradient(
    to right,
    #ff4eb5 0%,
    #ffa065 51%,
    #ff4eb5 100%
  );
  background-size: 200% auto;
  text-align: center;
  border-radius: 50%;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-box-shadow: 0px 20px 40px 0px rgba(42, 40, 51, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(42, 40, 51, 0.8);
}
.video-one__btn i {
  font-size: 24px;
  color: #fff;
  line-height: 106px;
}
.video-one__btn:hover {
  background-position: right center;
}
.video-one__btn:hover i {
  color: #fff;
}
.video-one__title {
  font-size: 50px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  margin-top: 20px;
}
.video-one__title span {
  font-weight: 700;
}

/** 15. cta styles*/
.cta-one {
  padding: 165px 0;
  position: relative;
}
.cta-one__bg {
  position: absolute;
  bottom: 4%;
  right: 0;
}
.cta-one .container {
  position: relative;
}
.cta-one .container:before {
  content: "";
  width: 448px;
  height: 448px;
  border-radius: 50%;
  background-color: #f6fff7;
  position: absolute;
  top: -19%;
  left: -12%;
}
.cta-one__moc {
  position: absolute;
  top: -45px;
  left: -10%;
  -webkit-animation: featureImgBounce 5s ease-in-out 0s infinite alternate;
  animation: featureImgBounce 5s ease-in-out 0s infinite alternate;
}
.cta-one .block-title {
  margin-bottom: 0;
  margin-top: 30px;
  margin-bottom: 45px;
}
.cta-one .block-title__title {
  letter-spacing: -0.04em;
}
.cta-one__icon {
  font-size: 62px;
  color: #ff4eb5;
}
.cta-one__text p {
  margin: 0;
  color: #74727a;
  font-size: 24px;
  line-height: 40px;
}
.cta-one ul {
  margin: 0;
  margin-top: 45px;
  margin-bottom: 50px;
}
.cta-one ul li {
  position: relative;
  font-size: 16px;
  color: #74727a;
  padding-left: 30px;
}
.cta-one ul li + li {
  margin-top: 3px;
}
.cta-one ul li i {
  font-size: 18px;
  color: #ffa065;
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.cta-one .thm-btn {
  padding: 18px 55.5px;
}
@-webkit-keyframes featureImgBounce {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
}
@keyframes featureImgBounce {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
} /** 16. service styles*/
.service-one {
  padding-bottom: 90px;
}
.service-one .container {
  position: relative;
  z-index: 10;
}
.service-one__single {
  border-style: solid;
  border-width: 1px;
  border-color: #efefef;
  border-radius: 5px;
  padding: 2px;
  position: relative;
  margin-bottom: 30px;
}
.service-one__single:before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 5px;
  opacity: 0;
  background-image: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.service-one__single h3 {
  margin: 0;
  font-size: 20px;
  line-height: 34px;
  color: #2a2833;
}
.service-one__single h3 a {
  color: inherit;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.service-one__single h3 a:hover {
  color: #ff4eb5;
}
.service-one__single p {
  margin: 0;
  color: #74727a;
  font-size: 16px;
  line-height: 34px;
  margin-top: 35px;
  margin-bottom: 25px;
}
.service-one__single:hover:before {
  opacity: 1;
}
.service-one__link {
  color: #2a2833;
  font-size: 22px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.service-one__link:hover {
  color: #ff4eb5;
}
.service-one__inner {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  padding-top: 50px;
  padding-bottom: 35px;
}
.service-one__icon {
  width: 108px;
  height: 108px;
  -webkit-box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
  border-radius: 5px;
  background-image: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
  margin-left: auto;
  margin-right: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #fff;
  font-size: 70px;
  margin-bottom: 30px;
}
.service-one [class*="col-"]:nth-child(1) .service-one__single:before,
.service-one [class*="col-"]:nth-child(1) .service-one__icon {
  background-mage: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
}
.service-one [class*="col-"]:nth-child(1) .service-one__icon {
  -webkit-box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
}
.service-one [class*="col-"]:nth-child(2) .service-one__single:before,
.service-one [class*="col-"]:nth-child(2) .service-one__icon {
  background-image: linear-gradient(40deg, #0db8ff 0%, #f332ff 100%);
}
.service-one [class*="col-"]:nth-child(2) .service-one__icon {
  -webkit-box-shadow: 0px 20px 60px 0px rgba(141, 142, 255, 0.8);
  box-shadow: 0px 20px 60px 0px rgba(141, 142, 255, 0.8);
}
.service-one [class*="col-"]:nth-child(3) .service-one__single:before,
.service-one [class*="col-"]:nth-child(3) .service-one__icon {
  background-image: linear-gradient(40deg, #39aeff 0%, #3cff53 100%);
}
.service-one [class*="col-"]:nth-child(3) .service-one__icon {
  -webkit-box-shadow: 0px 20px 40px 0px rgba(58, 212, 173, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(58, 212, 173, 0.8);
}
.service-one [class*="col-"]:nth-child(4) .service-one__single:before,
.service-one [class*="col-"]:nth-child(4) .service-one__icon {
  background-image: linear-gradient(40deg, #ff703e 0%, #ffec4e 100%);
}
.service-one [class*="col-"]:nth-child(4) .service-one__icon {
  -webkit-box-shadow: 0px 20px 40px 0px rgba(255, 178, 71, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(255, 178, 71, 0.8);
}
</style>