<template>
        <SketchRule
          :thick="thick"
          :scale="scale"
          :startX="startX"
          :startY="startY"
          :width="w"
          :height="h"
          :horLineArr="lines.h"
          :verLineArr="lines.v"
          :palette='palette'
      />
</template>

<script>
import SketchRule from "vue-sketch-ruler";
export default {
    data() {
        return {
            scale: 1, //初始化标尺的缩放
            startX: 0, //x轴标尺开始的坐标数值
            startY: 0, //y轴标尺开始的坐标数值
            thick: 20,
            isShowRuler: false,
            isShowReferLine: true,
            lines: {
                h: [],
                v: []
            },
            palette:{
              bgColor: '#eef2f8', //标尺背景
              longfgColor: '#BABBBC',
              shortfgColor: '#C8CDD0',
              fontColor: '#7D8694',
              shadowColor: '#E8E8E8',
              lineColor: '#EB5648',
              borderColor: '#DADADC',
              cornerActiveColor: 'rgb(235, 86, 72, 0.6)',}
        }
    },
    props: {
      w:Number,
      h:Number
    },
    components: {
        SketchRule
    },
    created () {
      // document.onkeydown = function(e){
      //   e.preventDefault()
      //   var keyCode = e.keyCode || e.which || e.charCode;
      //   var ctrlKey = e.ctrlKey || e.metaKey;
      //   if(ctrlKey && keyCode == 189) {
      //     alert('save');
      //   }
      //     // return true
      // }
    },
    computed: {

    },
    methods: {

    },
     mounted() {


        // 滚动居中
        // this.$refs.screensRef.scrollLeft =
        // this.$refs.containerRef.getBoundingClientRect().width / 2 - 300; // 300 = #screens.width / 2
        // this.$nextTick(() => {
        //     this.initSize();
        // });
    }
}
</script>

<style lang="less" scoped>
</style>