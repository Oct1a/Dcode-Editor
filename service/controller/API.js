module.exports = app => ({
  /**
   * 获取用户作品列表
   * @returns {Promise<*>}
   */
  async getWorks() {
    const { $model, $helper } = app;
    let works = await $model.page.find();
    $helper.returnBody(true, works)
  },
  /**
   * 获取用户列表
   * @returns {Promise<*>}
   */
  async getUsers() {
    const { $model, $helper } = app;
    let users = await $model.user.find();
    $helper.returnBody(true, users)
  },

  /**
   * 更新用户状态
   * @returns {Promise<void>}
   */
  async updateUserStatus() {
    const { ctx, $service, $helper } = app;
    const { id, state } = ctx.request.body
    await $service.user.updateUserStatus(id, state);
    $helper.returnBody(true)
  },

  /**
   * 更新用户权限
   * @returns {Promise<void>}
   */
  async updateUserPower() {
    const { ctx, $service, $helper } = app;
    const { id } = ctx.request.body
    await $service.user.updateUserPower(id);
    $helper.returnBody(true)
  },

  /**
   * 删除作品
   */
  async delWork() {
    const { ctx, $service, $helper } = app;
    let { id } = ctx.request.body;
    await $service.page.deletePage(id);
    $helper.returnBody(true)
  }

})