<template>
    <div id="Main" ref="main" :style="{zoom:$store.state.canvaSize +'%'}">
       <el-scrollbar style="height:100%">
          <rule :w="ruleWidth" :h="ruleHeight" ref="rule"  />
          <div class="canvas" >
              <droppable
                class="drop-box"
                @dragstart="onDragStart"
                @dragend="onDragEnd"
                @drop="onDrop"
                @dragenter="onDragEnter"
                @dragover="onDragOver"
                @dragleave="onDragLeave">
              <div class="edit"></div>
            </droppable>
          </div>
       </el-scrollbar>
    </div>
</template>

<script>
import Rule from "views/editor/components/SketchRuleBg";
import { Droppable } from 'components/common/drag'

export default {
    data() {
        return {
          ruleWidth:0,
          ruleHeight:0,
          // shrinkScale:100
        }
    },
    mounted() {
      this.ruleWidth = this.$refs.main.offsetWidth *2,
      this.ruleHeight = this.$refs.main.offsetHeight *2
      console.log(this.ruleWidth);
      console.log(this.ruleHeight);


     },
    computed: {

    },
    methods: {
      handleChange(currentValue, oldValue){ //画布放大组件更改事件
        // this.shrinkScale = currentValue +'%'
        // this.$refs.num.value = currentValue +'%'
        // console.log(this.$refs.num.value)
      },
      onDragStart (params) {
        // console.log(params);

        console.log('监听到拖动开始')
      },
      onDragEnd (params) {
        console.log('监听到拖动结束')
      },
      onDrop (params) {
        var newNode = params.sourceNode.cloneNode(true)
        // params.el.appendChild(newNode)
        console.log(params);
        // createNewDrap(newNode)
        console.log('监听到被拖动元素放下')
      },
      onDragEnter (params) {
        console.log('监听到被拖动元素进入当前范围')
      },
      onDragOver (params) {
        // console.log('监听到被拖动元素在上方移动, 这个调用调多次就不打印了')
      },
      onDragLeave (params) {
        console.log('监听到被拖动元素离开当前范围')
      }
    },
    components: {
      Rule,
      Droppable
    }
}
</script>

<style lang="less" scoped>
  #Main{
    height: 100%;
    /deep/.el-scrollbar__view{
      height: 100%;
    }
    .canvas{
      display: flex;
      justify-content: center;
      background: #eef2f8;
      align-items: center;
      width: 100%;
      height: 100%;
      .edit{
        width: 250px;
        height: 500px;
        background: #fff;
        position: relative;
        box-shadow: 0px 2px 5px #ccc;
        background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
        // background-color: #eee;
        background-size: 20px 20px;
        // background-position: 0 0,15px 15px;
        &::before{
          .frame;
          content: "全面屏";
          top: -21px;
          height: 110%;
        }
        &::after{
          .frame;
          content: "主流屏";
          top: 0px;
          height: 100%;
        }
      }

    }
  }
  .frame{ //屏幕尺寸
    border: 2px dotted #ccc;
    width: 100%;
    display: block;
    color: #ccc;
    position: absolute;
    font-size: 13px;
    text-align: right;
    box-sizing: border-box;
  }
</style>