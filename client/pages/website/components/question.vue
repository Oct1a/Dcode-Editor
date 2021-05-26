<template>
  <section class="faq-one">
    <img
      src="../../common/images/website/background/faq-one-bg.png"
      alt="Awesome Image"
      class="faq-one__bg"
    />
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title">
          Want to Ask
          <span>Something</span>
          <br />From Us?
        </h2>
      </div>

      <div class="accrodion-grp faq-accrodion" data-grp-name="faq-accrodion">
        <div
          class="accrodion active wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div class="accrodion-inner">
            <div class="accrodion-title">
              <h4>
                Pre and post launch mobile app marketing pitfalls to avoid
              </h4>
            </div>
            <div class="accrodion-content" style="display: block">
              <div class="inner">
                <p>
                  There are many variations of passages of available but
                  majority have alteration in some by inject humour or random
                  words. Lorem ipsum dolor sit amet, error insolens reprimique
                  no quo, ea pri verterem phaedr vel ea iisque aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="accrodion wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="100ms"
        >
          <div class="accrodion-inner">
            <div class="accrodion-title">
              <h4>Boostup your application traffic is just a step away</h4>
            </div>
            <div class="accrodion-content" style="display: none">
              <div class="inner">
                <p>
                  There are many variations of passages of available but
                  majority have alteration in some by inject humour or random
                  words. Lorem ipsum dolor sit amet, error insolens reprimique
                  no quo, ea pri verterem phaedr vel ea iisque aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="accrodion wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="200ms"
        >
          <div class="accrodion-inner">
            <div class="accrodion-title">
              <h4>How to update application new features</h4>
            </div>
            <div class="accrodion-content" style="display: none">
              <div class="inner">
                <p>
                  There are many variations of passages of available but
                  majority have alteration in some by inject humour or random
                  words. Lorem ipsum dolor sit amet, error insolens reprimique
                  no quo, ea pri verterem phaedr vel ea iisque aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="accrodion wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="300ms"
        >
          <div class="accrodion-inner">
            <div class="accrodion-title">
              <h4>How to connect with the support to improve app experience</h4>
            </div>
            <div class="accrodion-content" style="display: none">
              <div class="inner">
                <p>
                  There are many variations of passages of available but
                  majority have alteration in some by inject humour or random
                  words. Lorem ipsum dolor sit amet, error insolens reprimique
                  no quo, ea pri verterem phaedr vel ea iisque aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/** 11. accrodion styles*/
.faq-one {
  padding: 0 0 120px;
  position: relative;
}
.faq-one__bg {
  position: absolute;
  bottom: 4%;
  right: 0;
}
.faq-one .container {
  position: relative;
}
@media (min-width: 992px) {
  .faq-one .container {
    max-width: 920px;
  }
}
.faq-accrodion .accrodion {
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.faq-accrodion .accrodion:before {
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 0px;
  right: 0px;
  border-radius: 7px;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff4eb5),
    to(#ffa065)
  );
  background-image: linear-gradient(0deg, #ff4eb5 0%, #ffa065 100%);
  -webkit-transition: -webkit-transform 0.4s ease;
  transition: -webkit-transform 0.4s ease;
  transition: transform 0.4s ease;
  transition: transform 0.4s ease, -webkit-transform 0.4s ease;
}
.faq-accrodion .accrodion + .accrodion {
  margin-top: 20px;
}
.faq-accrodion .accrodion.active {
  -webkit-box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.3);
  box-shadow: 0px 20px 60px 0px rgba(244, 151, 190, 0.3);
}
.faq-accrodion .accrodion.active .accrodion-inner {
  margin: 0 2px;
}
.faq-accrodion .accrodion.active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.faq-accrodion .accrodion.active .accrodion-title:before {
  content: "\f068";
  color: #ff4eb5;
}
.faq-accrodion .accrodion.active .accrodion-title {
  padding-bottom: 0;
}
.faq-accrodion .accrodion.active .accrodion-title h4 {
  color: #ff4eb5;
}
.faq-accrodion .accrodion .accrodion-inner {
  background-color: #fff;
  padding: 32px 0;
  border-style: solid;
  border-width: 1px;
  border-color: #efefef;
  border-radius: 7px;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.faq-accrodion .accrodion .accrodion-title {
  padding: 0px 40px;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
@media (max-width: 375px) {
  .faq-accrodion .accrodion .accrodion-title {
    padding-right: 50px;
  }
}
.faq-accrodion .accrodion .accrodion-title:before {
  content: "\f067";
  font-family: "FontAwesome";
  font-size: 14px;
  color: #2a2833;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 40px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.faq-accrodion .accrodion .accrodion-title h4 {
  margin: 0;
  color: #2a2833;
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 375px) {
  .faq-accrodion .accrodion .accrodion-title h4 {
    line-height: 1.4em;
  }
}
.faq-accrodion .accrodion .accrodion-content .inner {
  padding: 0 40px;
  padding-top: 25px;
  padding-bottom: 0px;
}
.faq-accrodion .accrodion .accrodion-content p {
  margin: 0;
  color: #74727a;
  font-size: 16px;
  line-height: 30px;
}
/** 12. fact styles*/
/** 13. testimonials styles*/
/** 14. pricing styles*/

</style>