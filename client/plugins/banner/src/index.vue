<!--test.vue-->
<template>
  <div class="Ds-banner">
    <img :src="imageSrc" alt="" v-if="imageSrc">
    <img :src="randomImageSrc" alt="" v-else>
  </div>
</template>

<script>
	export default {
    name: 'DsBanner',
    data() {
      return {
        url:[
          'https://hbimg.huabanimg.com/870dbc0c2042d124282f5e1851bc28923618c4b33e206-jTkmsT_fw658/format/webp',
          'https://hbimg.huabanimg.com/2c79478274712940b92446a37738a2096004b5c83637b-iVgFN6_fw658/format/webp',
          'https://hbimg.huabanimg.com/1eec90d5f56a116dbd4fb8b7ce90eabc8ddc08353e40f-tdrv5J_fw658/format/webp',
          'https://hbimg.huabanimg.com/00c26247e0bc2daf07a7d25fdb466e8de60fb86046762-8r1yPE_fw658/format/webp',
          'https://hbimg.huabanimg.com/b9e0bad03657a2af762d49593cad227dd83b42202d79b-7PblBg_fw658/format/webp'
        ]
      }
    },
		props: {
			imageSrc: {
        type: String,
        default:''
      }
    },
    computed: {
        randomImageSrc(){
          let i=Math.floor(Math.random() * this.url.length)
          return this.url[i]
        }
    }
	}
</script>

<style lang="scss" scoped>
  .Ds-banner{
    width: 100%;
    height: 100%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
