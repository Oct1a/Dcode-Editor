## Demo

| [ client Demo](http://dcode.dllca.cn/) | [admin Demo](https://github.com/Oct1a/Dcode-Editor-admin) |
| ------------------------------------- | --------- |
| ![](./docs/static/image/index.jpg)    | ![](./docs/static/image/admin.png)     |



## 使用文档

[https://oct1a.github.io/Dcode-Editor/](https://oct1a.github.io/Dcode-Editor/) (还没开始写...(x_x))



## 功能

本项目是在[原开发者项目]([huangwei9527/quark-h5: 基于vue2 + koa2的 H5制作工具。让不会写代码的人也能轻松快速上手制作H5页面。类似易企秀、百度H5等H5制作、建站工具 (github.com)](https://github.com/huangwei9527/quark-h5))基础上进行改动，新增了一些功能，并稍微美化了一下。

- [x] 拖拉组件至画布
- [x] 面板可收缩展开
- [x] 点击添加组件位置为默认位置
- [x] 添加导入PSD时显示进度条
- [x] 保存JSON文件
- [x] 上传JSON文件
- [x] 根据画布截图生成预览图
- [x] 自定义画布右键菜单
- [x] 添加常用快捷键
- [x] 清空画布
- [x] 画布标尺
- [x] 解决一些小问题
- [x] 创建外部图片库
- [x] 历史记录面板
- [x] 文本组件过滤敏感词
- [x] 自动保存画布内容
- [x] 用户登录界面美化
- [x] 用户登录增加滑动验证
- [x] 制作产品官网
- [x] 作品状态设置，外部不可访问
- [x] 增加二维码组件
- [x] 导入PSD可选择文字可编辑与全转为图片模式



想完成但未完善问题（争取有时间再完善）：

- [ ] 导入PSD角度问题
- [ ] 导入PSD的文本字体大小不一致问题
- [ ] 个别PSD导入出现错误情况
- [ ] 画布大小自定义
- [ ] 组件锁定
- [ ] 右键菜单不同区域显示不同菜单
- [ ] 剪切组件
- [ ] 预览添加手机壳模型
- [ ] 组件拖拽多选
- [ ] 添加新人引导动画
- [ ] 完善表单数据功能
- [ ] 完善模板库

## 安装前准备

技术要求：掌握node.js、了解koa.js基本用法、熟悉Vue.js

### 一、环境准备

- [Node.js](https://nodejs.org/en/download/)
- [Mongodb](https://www.mongodb.com/try/download/community)

### 二、拉取本项目

git需自行安装

```
git clone https://github.com/Oct1a/Dcode-Editor.git
```

### 三、修改数据库连接文件

```
文件路径：service/config/index.js
```

修改对应的数据库配置，如果本身`mongodb`默认端口是`27017`可以直接启动

### 四、了解工程目录结构

```
|-- client					--------前端项目界面代码
    |--common					--------前端界面对应静态资源
    |--components				--------组件
    |--config					--------配置文件
    |--eventBus					--------eventBus
    |--filter					--------过滤器
    |--mixins					--------混入
    |--pages					--------页面
    |--router					--------路由配置
    |--store					--------vuex状态管理
    |--service					--------axios封装
    |--App.vue					--------App
    |--main.js					--------入口文件
    |--permission.js			--------权限控制
|-- server					--------服务器端项目代码
    |--confog					--------配置文件
    |--controller				--------数据库链接相关
    |--extend					--------框架扩展
    |--model					-------Schema和Model
    |--middleware				--------中间件
    |--core						--------Koa MVC实现自动加载核心文件
    |--views					--------ejs页面模板
    |--public					--------静态资源
    |--router.js				--------路由
    |--app.js					--------服务端入口
|-- common					--------前后端公用代码模块（如加解密）
|-- engine-template			--------页面模板引擎，使用webpack打包成js提供页面引用
|-- docs					--------预留编写项目文档目录
|-- config.json				--------配置文件
```



## 本地开发

### 一、安装模块

内置组件使用了一个echatrs库是低版本，如果出现npm无法安装，使用`cnpm i`安装即可

####  二、启动服务端

需要先配置Mongodb数据库

如果不想数据交互，可以忽略这一步（但客户端无法登录，需在权限管理先进行设置）

```bash
npm run server
```

### 三、启动客户端

```bash
npm run client
```

登录功能因使用的是自己数据库，没有固定账号，直接注册使用即可

注意： 如果没有生成过引擎模板js文件的，需要先编辑引擎模板，否则预览页面加载页面引擎.js 404报错

##### 编译engine.js模板引擎

```bash
npm run h5-parse
```

