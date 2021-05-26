<!--test.vue-->
<template>
    <van-checkbox-group>
      <van-checkbox v-model="checked">复选框</van-checkbox>
    </van-checkbox-group>
</template>

<script>
import { Checkbox,CheckboxGroup  } from 'vant';
	export default {
    name: 'DsCheckbox',
    components: {
        vanCheckbox:Checkbox,
        vanCheckboxGroup:CheckboxGroup
    },
    data() {
      return {
        checked:""
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
