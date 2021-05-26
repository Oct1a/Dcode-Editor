<!--test.vue-->
<template>
    <van-stepper v-model="value" step="2" min="5" max="8"  />
</template>

<script>
import { Stepper } from 'vant';
	export default {
    name: 'DsStepper',
    components: {
      vanStepper:Stepper
    },
    data() {
      return {
        value:1
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
