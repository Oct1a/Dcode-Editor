<template>
      <div id="AttrPanel" :class="{PanelShrink:!show}">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" style="height:100vh">
          <el-tab-pane label="页面设置" name="Page">
            <PageSetting/>
          </el-tab-pane>
          <el-tab-pane label="页面管理" name="Multi">
            <PageManage/>
          </el-tab-pane>
          <el-tab-pane label="图层管理" name="Layer">
            <LayerManage/>
          </el-tab-pane>
      </el-tabs>
      <div class="shrink" @click="handleShrink">
          <i :class="shrinkIcon"></i>
      </div>
    </div>
</template>

<script>
import PageSetting from 'views/editor/attrPanel/PageSetting'
import PageManage from 'views/editor/attrPanel/PageManage'
import LayerManage from 'views/editor/attrPanel/LayerManage'

export default {
  name:'AttrPanel',
  components: {
    PageSetting,
    PageManage,
    LayerManage
  },
  data() {
      return {
        activeName: 'Page',
        show:true,
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleShrink(){ //收缩面板动画
        this.show = !this.show
      },
    },
    computed: {
      shrinkIcon(){
        return this.show ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
      }
    }
}
</script>

<style lang="less" scoped>
 #AttrPanel{
   z-index:10;
   position: relative;
   height: calc(100vh - 100px);
   transition: width 2s;
  .shrink{
    height: 80px;
    width: 20px;
    position: absolute;
    line-height: 80px;
    text-align: center;
    top:50%;
    color:#ccc;
    left:-19px;
    background: #fff;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.12);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    pointer-events:auto;
  }
 }
 .PanelShrink{
   width: 0px;
  //  transform: translate(0px);

 }
</style>