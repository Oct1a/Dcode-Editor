<template>
    <div id="Panel" :style="{width:(!isShowPanel ? 0 : 300)+ 'px'}">
      <el-scrollbar style="height:100%">
        <el-tabs tab-position="left" :stretch=true :lazy=true >
          <el-tab-pane v-for="item in comp_data" :key="item.type">
              <span slot="label"><i :class="item.icon" ></i></span>
              <basic-coponents :compsList="item.components" :title="item.title"/>
          </el-tab-pane>
        </el-tabs>
      </el-scrollbar>
      <!-- 面板收缩 -->
      <div class="shrink" @click="handleShrink"><i :class="shrinkIcon"></i></div>
    </div>
</template>

<script>
import BasicCoponents from 'components/content/subToolsPanel/Paneltem' //左侧面板的组件渲染

import { config } from 'common/mixin/mixin' //组件数据

export default {
  name:'Panel',
  mixins:[config],
  data() {
    return {
      isShowPanel:true //面板收缩变量
    }
  },
  methods: {
    handleShrink() { //点击收缩面板
      this.isShowPanel = !this.isShowPanel
    },
  },
  computed: {
    shrinkIcon(){ //收缩面板图标更改
      return !this.isShowPanel ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    }
  },
  components: {BasicCoponents}
}
</script>

<style lang="less" scoped>
  #Panel{
    height: 100vh;
    position: relative;
    span>i{
      font-size: 20px;
    }
    /deep/.el-tabs__item{
      height: 60px;
      line-height: 60px;
    }
    /deep/.el-tabs__nav{
      margin-top: 20px;
      height: 100%;
    }
    .shrink{
      height: 80px;
      width: 20px;
      position: absolute;
      line-height: 80px;
      text-align: center;
      top:60%;
      color:#ccc;
      background: red;
      right:-19px;
      background: #fff;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      pointer-events:auto;
      z-index: 10;
      opacity: .8;
      &:hover{
        opacity: 1;
        box-shadow: 1px 1px 3px 0 rgba(0,0,0,.12);
      }
    }
  }
</style>