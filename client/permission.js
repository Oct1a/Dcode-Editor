/**
 *  路由权限相关管理
 * */
import router from '@/router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import userModel from '@/libs/userModel'

// 导航守卫
router.beforeEach(async(to, from, next) => {
  NProgress.start()
    // 检测是否需要用户登录验证
  if (to.meta.noNeedLogin) {
    next()
    return;
  }
  // 用户登录状态拦截,未登录将跳转登录界面
  let loginStatus = await userModel.checkLoginState();
  if (!loginStatus) {
    userModel.goLogin();
    return false;
  }
  console.log(to)
    //TODO 根据加载的资源，更新路由meta属性中的title属性，所有的页面title使用route.meta.title
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})