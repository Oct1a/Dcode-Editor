module.exports = app => {
  const { router, $controller, $middleware } = app;
  // 登录注册认证
  router.post('/auth/login', $controller.auth.login);
  router.post('/auth/register', $controller.auth.register);
  // 用户
  router.get('/user/info', $middleware.auth, $controller.user.getUserInfo);
  router.post('/user/update/name', $middleware.auth, $controller.user.updateUserName);
  router.post('/user/update/pass', $middleware.auth, $controller.user.updateUserPass);
  router.post('/user/update/avatar', $middleware.auth, $controller.user.updateUserAvatar);
  router.get('/user/getUserList', $middleware.auth, $controller.user.getUserList);
  // 页面
  router.get('/page/getMyPages', $middleware.auth, $controller.page.myPages);
  router.post('/page/create', $middleware.auth, $controller.page.create);
  router.post('/page/update', $middleware.auth, $controller.page.updatePage);
  router.post('/page/delete', $middleware.auth, $controller.page.deletePage);
  router.post('/page/copy', $middleware.auth, $controller.page.copyPage);
  router.post('/page/setPublish', $middleware.auth, $controller.page.publish);
  router.post('/page/setTemplate', $middleware.auth, $controller.page.setTemplate);
  router.get('/page/detail', $middleware.auth, $controller.page.pageDetail);
  // 页面渲染
  router.get('/view/:_id', $controller.page.view);

  // 页面数据下载
  router.get('/tool/jsonload', $controller.page.jsonDownload)

  // 页面协作
  router.get('/page/getCooperationList', $middleware.auth, $controller.cooperation.getCooperationUserListByPageId);
  router.post('/page/addCooperation', $middleware.auth, $controller.cooperation.addCooperationUser);
  router.post('/page/delCooperation', $middleware.auth, $controller.cooperation.removeCooperationUser);
  // 我的模板
  router.get('/page/getMyTemplates', $middleware.auth, $controller.page.getMyTemplates);
  // 模板市场
  router.get('/page/getPublishTemplates', $middleware.auth, $controller.page.getPublishTemplates);

  // html2canvas 跨域接口配置
  router.get('/html2canvas/corsproxy', $controller.htmlToCanvas.corsproxy);

  // psd上传相关
  router.post('/psd/upload', $middleware.auth, $controller.psd.psdPpload);

  // 我的图片库
  router.get('/imageLib/myImages', $middleware.auth, $controller.image.getMyImages);
  router.post('/imageLib/upload', $middleware.auth, $controller.image.uploadImage);
  // 获取外部图片
  router.get('/imageLib/ExternalImages', $middleware.auth, $controller.image.getExternalImages);


  /**
   * 后台路由
   */
  // router.get('/admin/index', $controller.auth.login)
  router.get('/api/works', $middleware.auth, $controller.API.getWorks)
  router.get('/api/users', $middleware.auth, $controller.API.getUsers)
  router.post('/api/delete_Work', $middleware.auth, $controller.API.delWork)
  router.post('/api/user/updateState', $middleware.auth, $controller.API.updateUserStatus)
  router.post('/api/user/updatePower', $middleware.auth, $controller.API.updateUserPower)


  return router
};