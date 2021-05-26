<template>
  <section class="mailchimp-one">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title">
          想了解更多？邮件与我交流
        </h2>
      </div>

      <form
        action="#"
        class="mailchimp-one__mc-form mc-form"
        novalidate="true"
      >
        <input
          type="email"
          class="formInput"
          placeholder="Email address"
          name="email"
        />
        <button type="submit">
          <i class="dimon-icon-right-arrow"></i>
          <span style="font-size:17px;font-weight:bold;">确定</span>
        </button>
      </form>

      <div class="mc-form__response"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/** 10. mailchimp styles*/
.mailchimp-one {
  padding-top: 110px;
  padding-bottom: 120px;
  background-image: linear-gradient(40deg, #ff43c0 0%, #ffa95c 100%);
}
.mailchimp-one .block-title__title {
  color: #fff;
}
.mailchimp-one__mc-form {
  width: 100%;
  max-width: 692px;
  height: 91px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.mailchimp-one__mc-form input[type="email"] {
  border: none;
  outline: none;
  background-color: transparent;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  font-size: 16px;
  color: #74727a;
  font-weight: 400;
}
.mailchimp-one__mc-form input[type="email"]::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #74727a;
}
.mailchimp-one__mc-form input[type="email"]::-moz-placeholder {
  /* Firefox 19+ */
  color: #74727a;
}
.mailchimp-one__mc-form input[type="email"]:-ms-input-placeholder {
  /* IE 10+ */
  color: #74727a;
}
.mailchimp-one__mc-form input[type="email"]:-moz-placeholder {
  /* Firefox 18- */
  color: #74727a;
}
.mailchimp-one__mc-form button[type="submit"] {
  border: none;
  outline: none;
  width: 61px;
  height: 61px;
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
  border-radius: 50%;
  font-size: 22px;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.mailchimp-one__mc-form button[type="submit"]:hover {
  background-position: right center;
}
</style>