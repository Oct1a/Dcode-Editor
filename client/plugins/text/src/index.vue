<!--文本框组件-->
<template>
  <div class="Ds-text">
    <div class="text-wrapper" v-html="parseText()" ref="content"></div>
  </div>
</template>

<script>
import { filterSensitiveWord ,myReplace} from '@/libs/sensitive_words'
	export default {
		name: 'DsText',
		props: {
			text: {
				type: String,
        default: '这是一段文字'
      },
      // fontFamily:{ //字体设置
      //   type:String,
      //   default:"微软雅黑"
      // },
      // transMatrix:{ //todo:旋转角度
      //   type:Object,
      //   default:{}
      // },
      // fontSize:{ //todo:字体大小设置
      //   type:Array,
      //   default:['12']
      // }
		},
    data(){
			return {
				defaultStyle: {
          height: 40
				}
      }
    },
   methods: {
     /**
      * 关键词过滤，换行过滤
      */
      parseText(){
        const temp = filterSensitiveWord(this.text);
        let str = this.text
        temp.forEach((element) => {
          console.log(element)
          let starstr = "";
          for (let i = 0; i < element.length; i++) {
            starstr += "*";
          }
          str = myReplace(str, element, starstr);
        });
        return str.replace(/\n/g, '<br>')
      },
      //Todo:设置旋转角度
      parseTransMatrix(){
        let t = this.transMatrix
        console.log(t.tx,t.ty,t.xx,t.xy,t.yx,t.yy)
        return 'matrix('+[t.xx,t.xy,t.yx,t.yy,t.tx,t.yy]+')'
      }
    },

	}
</script>

<style lang="scss" scoped>
.text-wrapper {
  white-space: pre-wrap;
}
</style>
