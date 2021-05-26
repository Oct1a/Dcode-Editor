'use strict';

/**
 * 登录验证
 * @author Oct1a_H
 * @return {null} null
 */
module.exports = app => {
  return async function(ctx, next) {
    let { $helper } = app;
    let token = '';
    if (
      ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = ctx.headers.authorization.split(' ')[1];
    } else if (ctx.query.accesstoken) {
      token = ctx.query.accesstoken;
    } else if (ctx.request.body.accesstoken) {
      token = ctx.request.body.accesstoken;
    } else if (ctx.request.header.cookie) {
      token = ctx.request.header.cookie.split('x-csrf-token=')[1] //针对后台接口
    }
    let user;
    try {
      user = await $helper.checkToken(token);
    } catch (e) {
      $helper.returnBody(false, {}, 'Token 无效，请重新登录', 401);
    }
    if (!user) {
      $helper.returnBody(false, {}, 'Token 无效，请重新登录', 401);
      return;
    }
    ctx.userData = user;
    app.userData = user;
    await next();
  };
};