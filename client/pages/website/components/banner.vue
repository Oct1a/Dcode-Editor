<template>
  <section class="banner-one" id="banner">
    <span class="banner-one__shape-1"></span>
    <span class="banner-one__shape-2"></span>
    <span class="banner-one__shape-3"></span>
    <span class="banner-one__shape-4"></span>
    <div class="container">
      <div class="banner-one__moc">
        <img :src="banner" alt="Decode-Editor">
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-8">
          <div class="banner-one__content">
            <h3 class="banner-one__title">零代码轻量级应用搭建平台
              <br>
              <span>让H5制作，更方便</span>
              </h3>
            <p class="banner-one__text">Decode-Editor是一款功能强大，高可扩展的H5可视化页面配置解决方案，致力于提供一套简单方便、专业可靠、无限可能的H5落地页最佳实践。</p>

            <a href="/#/login" class="banner-one__btn thm-btn ">
              <span>免费体验</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      banner:require('@/common/images/website/banner.png')
    }
  },
}
</script>

<style lang="scss">
.banner-one {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.banner-one .container {
  padding-top: 350px;
  padding-bottom: 230px;
  position: relative;
}
.banner-one__title {
  margin: 0;
  color: #2a2833;
  font-weight: 400;
  font-size: 2.5rem;
  /* line-height: 1em;
  letter-spacing: -0.06em; */
}
.banner-one__title span {
  font-size: 1.7rem;
  /* font-weight: 500; */
}
.banner-one__text {
  margin: 0;
  font-size: 20px;
  line-height: 36px;
  color: #74727a;
  margin-top: 25px;
  margin-bottom: 40px;
}
.banner-one__btn {
  padding: 18px 55px;
}
.banner-one__moc {
  position: absolute;
  bottom: 30%;
  right: -10%;
  img{
      width:750px;
  }
}
.banner-one__moc:before {
  content: "";
  width: 400px;
  height: 400px;
  background-image: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
  -webkit-box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.8);
  box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.8);
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 24%;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.banner-one__moc img {
  position: relative;
  -webkit-animation: featureImgBounce 5s ease-in-out 0s infinite alternate;
  animation: featureImgBounce 5s ease-in-out 0s infinite alternate;
}
[class*="banner-one__shape-"] {
  position: absolute;
  border-radius: 50%;
  -webkit-animation-name: bubbleMover;
  animation-name: bubbleMover;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.banner-one__shape-1 {
  background-image: linear-gradient(40deg, #0db8ff 0%, #f332ff 100%);
  -webkit-box-shadow: 0px 20px 60px 0px rgba(141, 142, 255, 0.8);
  box-shadow: 0px 20px 60px 0px rgba(141, 142, 255, 0.8);
  width: 143px;
  height: 143px;
  top: 9%;
  left: 3%;
  -webkit-animation-duration: 8s;
  animation-duration: 8s;
  -webkit-perspective: 150px;
  perspective: 150px;
}
.banner-one__shape-2 {
  background-image: linear-gradient(40deg, #39aeff 0%, #3cff53 100%);
  -webkit-box-shadow: 0px 20px 40px 0px rgba(58, 212, 173, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(58, 212, 173, 0.8);
  width: 85px;
  height: 85px;
  top: 12%;
  left: 37%;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  -webkit-perspective: 85px;
  perspective: 85px;
}
.banner-one__shape-3 {
  background-image: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
  -webkit-box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(255, 118, 142, 0.8);
  width: 85px;
  height: 85px;
  bottom: 12%;
  left: 6%;
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  -webkit-perspective: 85px;
  perspective: 85px;
}
.banner-one__shape-4 {
  background-image: linear-gradient(40deg, #ff703e 0%, #ffec4e 100%);
  -webkit-box-shadow: 0px 20px 40px 0px rgba(255, 178, 71, 0.8);
  box-shadow: 0px 20px 40px 0px rgba(255, 178, 71, 0.8);
  width: 85px;
  height: 85px;
  top: 60%;
  right: 37%;
  z-index: 1;
  -webkit-animation-duration: 12s;
  animation-duration: 12s;
  -webkit-perspective: 85px;
  perspective: 85px;
}
@-webkit-keyframes bubbleMover {
  0% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
    transform: translateY(30px) translateX(50px) rotate(15deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  50% {
    -webkit-transform: translateY(50px) translateX(100px) rotate(45deg);
    transform: translateY(50px) translateX(100px) rotate(45deg);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  80% {
    -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
    transform: translateY(30px) translateX(50px) rotate(15deg);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  100% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
}
@keyframes bubbleMover {
  0% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
    transform: translateY(30px) translateX(50px) rotate(15deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
  50% {
    -webkit-transform: translateY(50px) translateX(100px) rotate(45deg);
    transform: translateY(50px) translateX(100px) rotate(45deg);
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
  }
  80% {
    -webkit-transform: translateY(30px) translateX(50px) rotate(15deg);
    transform: translateY(30px) translateX(50px) rotate(15deg);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  100% {
    -webkit-transform: translateY(0px) translateX(0) rotate(0);
    transform: translateY(0px) translateX(0) rotate(0);
    -webkit-transform-origin: center center;
    transform-origin: center center;
  }
}
</style>