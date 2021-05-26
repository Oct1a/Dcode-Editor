<!--test.vue-->
<template>
  <div class="Ds-iframe">
    <iframe :src="url" frameborder="0" scrolling="no" style="background-color:transparent;width: 100%; min-height: 100%;"></iframe>
  </div>
</template>

<script>
	export default {
		name: 'DsIframe',
		props: {
			url: {
				type: String,
				default: "http://m.baidu.com/"
      },
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
.Ds-iframe{
    width: 100%;
    height: 100%;
}
</style>
