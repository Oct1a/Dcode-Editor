<!--test.vue-->
<template>
    <van-radio-group v-model="radio" direction="horizontal" disabled>
      <van-radio name="1" >单选框 1</van-radio>
      <van-radio name="2">单选框 2</van-radio>
    </van-radio-group>
</template>

<script>
import { RadioGroup, Radio } from 'vant';
	export default {
    name: 'DsRadio',
    components: {
        vanRadioGroup:RadioGroup,
        vanRadio:Radio
    },
    data() {
      return {
        radio:"1"
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
