<!--button.vue-->
<template>
  <div class="DsButton">
    <van-button :type="btnType" :size="size" >{{text}}</van-button>
  </div>
</template>

<script>
import { Button } from 'vant';
	export default {
    name: 'DsButton',
    components: {
        vanButton:Button,
    },
		props: {
      btnType:{
        type:String,
        default:'info'
      },
			text: {
				type: String,
				default: '提 交'
      },
      size:{
        type:String,
        default:'large'
      }
		}
	}
</script>

<style lang="scss" scoped>
.DsButton{
  display: block;
  // width:100%;
  // height: 100%;
}
</style>
