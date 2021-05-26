<template>
      <QrcodeVue  :value="url" :size="120" level="H"></QrcodeVue>
</template>

<script>
	import QrcodeVue from 'qrcode.vue'
	export default {
    name: 'DsQrcode',
    components: {
      QrcodeVue
    },
    data() {
      return {
        pageLink:""
      }
    },
		props: {
			url: {
				type: String,
        default:"https://github.com/Oct1a"
      }
		}
	}
</script>

<style lang="scss" scoped>

</style>
