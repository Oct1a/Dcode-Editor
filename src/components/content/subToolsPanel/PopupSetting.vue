<template>
  <div>
    <el-dialog
        title="组件设置"
        width="18%"
        :modal=false
        :visible.sync="centerDialogVisible"
        @close="DialogVisible = false"
        v-el-dialog-drag
        >
        <el-tabs stretch v-model="activeName" >
          <el-tab-pane label="样式" name="styleSetting">
            <el-collapse>
              <el-collapse-item title="背景设置" name="1">
                hhh
              </el-collapse-item>
              <el-collapse-item title="页面滤镜" name="3">

              </el-collapse-item>
             </el-collapse>
          </el-tab-pane>
          <el-tab-pane label="动画" name="animationSetting">
          </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'PopupSetting',
  data() {
    return {
      centerDialogVisible: true,
      activeName: 'styleSetting'
    }
  },
}
</script>

<style lang="less" scoped>
    /deep/.el-dialog__header{
      padding:10px 20px 10px;
    }
    /deep/.el-dialog__body{
      padding: 0;
      background: #fafafa;
    }
    /deep/.el-dialog__title{
      font-size: 16px;
    }
</style>