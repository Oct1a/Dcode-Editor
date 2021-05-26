<!--test.vue-->
<template>
  <div class="Ds-image">
    <img :src="imageSrc" alt="" v-if="imageSrc">
    <img :src="randomImageSrc" alt="" v-else>
  </div>
</template>

<script>
	export default {
    name: 'DsImage',
    data() {
      return {
      }
    },
		props: {
			imageSrc: {
        type: String,
        default:'https://res1.eqh5.com/store/bc7aeed3f426ab1d116139b834a7483b.png'
      }
    },
    computed: {
    }
	}
</script>

<style lang="scss" scoped>
  .Ds-image{
    width: 100%;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
