<template>
  <div class="Ds-Notice">
    <van-notice-bar
      left-icon="volume-o"
      :text="text"
      :scrollable="noticeBarStyle.scrollable == 0 ? false : true"
      :color="noticeBarStyle.color"
      :background="noticeBarStyle.background"
      :delay="noticeBarStyle.delay"
      :wrapable="noticeBarStyle.wrapable == 0 ? false : true"
      :speed="noticeBarStyle.speed"
    />
  </div>
</template>

<script>
import { NoticeBar } from 'vant';
	export default {
    name: 'DsNotice',
    components: {
        vanNoticeBar:NoticeBar,
    },
		props: {
			text: {
				type: String,
        default: '这是通知栏，正在展示信息...'
      },
      noticeBarStyle:{
        type:Object,
        default:()=>({
          scrollable:'1',
          color:'#f60',
          background:'#fff7cc',
          delay:1,
          wrapable:'0',
          speed:'50'
        })
      }

		},
	}
</script>

<style lang="scss" scoped>
// .text-wrapper {
//   white-space: pre-wrap;
// }
</style>
