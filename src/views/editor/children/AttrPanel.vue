<template>
  <!-- <transition name="fade" > -->
      <div id="AttrPanel" :class="{PanelShrink:!show}">
        <el-tabs v-model="activeName" type="border-card" @tab-click.native="handleClick" style="height:100vh">
          <el-tab-pane label="页面设置" name="first">
            <PageSetting/>
          </el-tab-pane>
          <el-tab-pane label="页面管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="图层管理" name="third">角色管理</el-tab-pane>
      </el-tabs>
      <div class="shrink" @click="handleShrink">
          <i :class="shrinkIcon"></i>
      </div>
    </div>
  <!-- </transition> -->
  <!--   -->
</template>

<script>
import PageSetting from 'views/editor/attrPanel/PageSetting'
export default {
  name:'AttrPanel',
  components: {
    PageSetting
  },
  data() {
      return {
        activeName: 'first',
        show:true,
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleShrink(){ //收缩面板动画
        this.show = !this.show
      }
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
    transform: translate(0px);

 }
</style>