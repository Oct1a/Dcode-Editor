<!--test.vue-->
<template>
  <div class="Ds-video">
     <vueMiniPlayer ref="vueMiniPlayer" :video="video" :mutex="true" />
  </div>
</template>

<script>

	export default {
    name: 'DsVideo',
    data() {
      return {
      }
    },
    props: {
        video:{
          type:Object,
          default:()=>({
            url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
            cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
            muted: false,
            loop: false,
            preload: 'auto',
            poster: '',
            volume: 1,
            autoplay: false
          })
        }
    },
    computed: {
       $video(){
        return this.$refs.vueMiniPlayer.$video;
      }
    },
	}
</script>

<style lang="scss" scoped>
</style>
