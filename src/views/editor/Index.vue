<template>
    <div id="Editor">
      <el-container>
        <!-- 头部 -->
        <el-header>
          <DHeader />
        </el-header>
        <!-- 内容 -->
        <el-container>
          <!-- 左边面板 -->
          <el-aside>
            <DPanel/>
          </el-aside>
          <!-- 编辑器（主要模块） -->
          <el-main style="padding:0">
            <DMain />
          </el-main>
           <!-- 右边面板 -->
          <el-aside style="overflow:visible;width:auto">
            <DAttrPanel/>
          </el-aside>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import DHeader from './children/Header' //头部
import DPanel from './children/Panel' //左边组件栏
import DMain from './children/Main' //主体编辑区
import DAttrPanel from './children/AttrPanel' //右边属性栏

export default {
  name:'Index',
  components:{
    DHeader,
    DPanel,
    DMain,
    DAttrPanel
  }
}
</script>

<style lang="less" scoped>
  .el-header{
    box-shadow: 0px 1px 10px #ccc;
  }
</style>