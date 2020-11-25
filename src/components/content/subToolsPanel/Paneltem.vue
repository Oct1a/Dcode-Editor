<template>
  <div class="Base">
    <h3> {{title}}</h3>
    <el-row :gutter="10">
      <el-col :span="12" v-for="(item, index) in compsList" :key="index" >
         <draggable
            :data="item.name"
            @dragstart="onSourceDragStart"
            @dragsend="onSourceDragEnd"
            style="height:100%">
          <ShowSubComponents class="subcomps" :desc="item.title" :img="item.PreviewImg" @click.native="handleAddComponent(item.name)" />
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowSubComponents from './SubTools'
import { Draggable } from 'components/common/drag'

export default {
  props: {
    compsList:Array, //组件列表数据
    title:String //小组件标题
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
    },
    // 组件插入
    handleAddComponent(name) {
      this.$store.dispatch('addNewComp', name)
    },
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