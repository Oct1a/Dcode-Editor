<template>
  <div class="Ds-Tabars">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
	export default {
    name: 'DsTabars',
    components: {
        vanTabbar:Tabbar,
        vanTabbarItem:TabbarItem
    },
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
        active: 0,
				// defaultStyle: {
        //   height: 40
				// }
      }
    },
   methods: {

    },

	}
</script>

<style lang="scss" scoped>
.text-wrapper {
  white-space: pre-wrap;
}
</style>
