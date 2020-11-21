<template>
    <div id="Panel">
      <el-tabs tab-position="left" :stretch=true :lazy=true style="height:100%" >
        <el-tab-pane >
            <!-- 基础组件 -->
            <span slot="label"><i class="el-icon-s-opportunity" ></i></span>
           <base-coponents/>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 媒体组件 -->
           <span slot="label"><i class="el-icon-picture-outline-round"></i> </span>
            <media-coponents/>
        </el-tab-pane>
        <el-tab-pane>
          <!-- 图表组件 -->
           <span slot="label"><i class="el-icon-s-data"></i> </span>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import BaseCoponents from 'views/editor/toolsPanel/Base/Base'
import MediaCoponents from 'views/editor/toolsPanel/Media/Media'
// import Ba from '../ToolsPanel/Base/Base'

export default {
  name:'Panel',
  components: {
   BaseCoponents,
   MediaCoponents
  }
}
</script>

<style lang="less" scoped>
  #Panel{
    height: 100vh;
    span>i{
      font-size: 20px;
    }
    // span{
    //   margin:20px 0px;
    // }
    /deep/.el-tabs__item{
      height: 60px;
      line-height: 60px;
    }
    /deep/.el-tabs__nav{
      // transform: translateY(10px);
      margin-top: 20px;
      height: 100%;
    }

  }
</style>