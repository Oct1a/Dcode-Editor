<template>
  <div class="Base">
    <h3>基础组件</h3>
    <el-row :gutter="10">
      <el-col :span="12" v-for="(item, index) in 100" :key="index"  >
         <draggable
            :data="item"
            @dragstart="onSourceDragStart"
            @dragsend="onSourceDragEnd"
            style="height:100%">
          <ShowSubComponents class="subcomps"/>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowSubComponents from 'components/content/subToolsPanel/SubTools'
import { Draggable } from 'components/common/drag'
export default {
  name:'Base',
  data() {
    return {
      compsList:[

      ]
    }
  },
  components: {
    ShowSubComponents,
    Draggable
  },
  methods: {
    onSourceDragStart (params) {
      console.log('被拖动元素监听到拖动开始')
    },
    onSourceDragEnd (params) {
      console.log('被拖动元素监听到拖动结束')
    }
  }
}
</script>

<style lang="less" scoped>
  .Base{
    padding-right: 15px;
  }
  .subcomps{
    margin:5px 0px
  }
</style>