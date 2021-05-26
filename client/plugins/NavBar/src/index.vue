<!--test.vue-->
<template>
  <div class="Ds-avatar">
    <img :src="imageSrc" alt="">
  </div>
</template>

<script>
	export default {
		name: 'DsAvatar',
		props: {
			imageSrc: {
				type: String,
        default: `https://api.btstu.cn/sjtx/api.php?lx=a1&format=images&method=mobile`
      }
		}
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
</style>
