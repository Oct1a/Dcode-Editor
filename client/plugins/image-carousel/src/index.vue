<!--test.vue-->
<template>
  <div class="Ds-image-carsousel">
    <!--异步加载轮播图的情况;-->
    <Swiper class="image-carsousel-swiper" v-if="imageSrcList.length > 0"  :autoPlay='true' :showIndicator='true' :interval="interval" duration="500">
      <Slide class="image-carsousel-slide" v-for="(item,index) in imageSrcList" :key="index">
        <img  class="image-carsousel-image" :src="item" alt="">
      </Slide>
    </Swiper>
  </div>
</template>

<script>
	import { Swiper, Slide } from 'vue-swiper-component';
	export default {
		name: 'DsImageCarousel',
		components: {
			Swiper,
			Slide
		},
		props: {
			imageSrcList: {
				type: Array,
				default: () => {
					return [
						'https://s10.mogucdn.com/mlcdn/c45406/190924_647e2hce112gi5876fi2lg057f1f4_1125x390.jpg',
						'https://img.zcool.cn/community/01e1775aeb21a9a801219b7f50cf0d.jpg@1280w_1l_2o_100sh.jpg',
						'https://img.zcool.cn/community/017b2a5938c8bca8012193a37db72c.jpg@1280w_1l_2o_100sh.jpg'
					]
        }
			},
			interval: {
				type: Number,
				default: 2500
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.image-carsousel-swiper,
.image-carsousel-slide,
.image-carsousel-image{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
<style>
  .image-carsousel-swiper .wh_swiper{
    height: 100%;
  }
</style>
