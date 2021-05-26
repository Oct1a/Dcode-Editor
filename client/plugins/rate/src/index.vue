<!--test.vue-->
<template>
    <van-rate v-model="value" />
</template>

<script>
import { Rate } from 'vant';
	export default {
    name: 'DsRate',
    components: {
        vanRate:Rate
    },
    data() {
      return {
        value:3
      }
    },
		props: {
			input: {
				type: String,
        default: '这是一段文字'
      }
		}
	}
</script>

<style lang="scss" scoped>

</style>
