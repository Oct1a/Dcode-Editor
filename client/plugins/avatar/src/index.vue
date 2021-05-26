<!--test.vue-->
<template>
  <div class="Ds-avatar">
    <van-grid :border="gridStyle.border" :column-num="gridStyle.columnNum" :gutter="gridStyle.gutter">
       <van-grid-item v-for="(item,index) in avatar.imgList" :key="index">
        <van-image :src="item" :round="true"/>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem,Image as VanImage } from 'vant';
	export default {
    name: 'DsAvatar',
    components: {
        vanGrid:Grid,
        vanGridItem:GridItem,
        vanImage:VanImage
    },
		props: {
      gridStyle:{
        type:Object,
        default:()=>({
            columnNum:3,
            gutter:10,
            border:false
        })
      },
      avatar:{
        type:Object,
        default:()=>({
          num:3,
          size:50,
          imgList:[
            `https://api.btstu.cn/sjtx/api.php?lx=a1&format=images&method=mobile&t=`+ (new Date).getTime(),
            `https://api.btstu.cn/sjtx/api.php?lx=a1&format=images&method=mobile&t=`+ (new Date).getTime()+1,
            `https://api.btstu.cn/sjtx/api.php?lx=a1&format=images&method=mobile&t=`+ (new Date).getTime()+2,
          ]
        })
      }
    },
	}
</script>

<style lang="scss" scoped>
  .Ds-avatar{
    width: 100%;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  /deep/.van-grid-item__content{
    background: none;
  }
</style>
