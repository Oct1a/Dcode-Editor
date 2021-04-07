# 项目还开发中，将不定期更新

## 技术栈

- **Vue** 前端主流框架(react,vue,angular)之一,更适合开发灵活度高且复杂的应用
- **Vuex** 主流的react应用状态管理工具，基于redux
- **vue-cli4** 基于vue的前端脚手架
- **Less** css预编译语言，轻松编写结构化分明的css
- **Element-Ui** 优秀的饿了么vue组件库
- **axios** 强大的前端请求库
- ~~**mand-mobile** 基于vue的移动端ui库，轻松实现美观的H5应用~~

## 前端界面
- 菜单
- 组件栏
- 画布
- 配置栏
- 快捷键
- 粘贴板

## 前端编辑器实现
编辑器的实现思路是：编辑器生成页面JSON数据，服务端负责存取JSON数据，渲染时从服务端取数据JSON交给前端模板处理。

## 插件选择
1. 页面组件ui - [elementUi](https://element.eleme.cn/2.14/#/zh-CN/component/layout)
2. 缩放拖拽 - [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable)
3. 缩放拖拽旋转 - [vue-draggable-resizable-rotatable](https://github.com/tmrcui/vue-draggable-resizable-rotatable)
4. 参考线与磁性吸附 - [ref-line](https://github.com/think2011/ref-line)
5. 编辑器标尺 - [vue-sketch-ruler](https://github.com/chuxiaoguo/vue-sketch-ruler)
6. 表格组件 - [DataV](https://github.com/DataV-Team/DataV)
7. 图表组件 - [Eachat](https://echarts.apache.org/zh/index.html)
11. 编辑器  - [ace编辑器](https://github.com/ajaxorg/ace)
12. 滚动条  - [vuebar](https://github.com/DominikSerafin/vuebar)
13. 全屏插件 -  [screenfull](https://github.com/sindresorhus/screenfull.js)
11. 操作历史[撤销重做] - indexdb(这里用snapshot不用mutation)
12. 图层操作[上移下移置顶置底]
13. 预览算法[全屏幕等比缩放]

```
|--Client
  |-- docs        --------预留编写项目文档目录
  |-- public      --------基础文件
  |-- src		  --------前端项目界面代码
    |--assets	  --------前端界面对应静态资源
    |--common	  --------公共方法
    |--components --------组件
      |--common	  --------公共组件
      |--content  --------内容组件
    |--network	  --------网络请求
    |--router	  --------路由配置
    |--store	  --------vuex状态管理
    |--views	  --------页面
      |--editor		--------编辑器页面
      |--login		--------登录页面
    |--App.vue		--------App
    |--main.js		--------入口文件
  |-- babel.config.js  --------babel配置文件
  |-- vue.config.js	   --------vue配置文件

```

### 目前进度（TODO）

- [x] 编辑器界面搭建
- [x] 全屏功能
- [x] 标尺生成参考线
- [x] 滚动条美化
- [x] 全局快捷键设置
- [x] 基础组件库实现
- [x] 组件数据动态编辑
- [ ] 组件自动吸附
- [x] 组件库拖拽和显示
- [x] H5页面的预览功能
- [x] 支持组件复制, 右键删除
- [x] 支持快捷键控制
- [ ] 一键生成H5代码
- [x] 元素自由拖拽，放大，缩小，旋转
- [x] 撤销，重做
- [ ] 可编辑画布大小


![](htthttps://upload-images.jianshu.io/upload_images/1650654-08875854bf0ef478.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




参考资料:[在Vue项目中使用snapshot测试](https://juejin.cn/post/6844903749375393800)
