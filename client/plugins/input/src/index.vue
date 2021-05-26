<!--test.vue-->
<template>
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
</template>

<script>
import { Field } from 'vant';
import {CellGroup } from 'vant'
	export default {
    name: 'DsInput',
    components: {
        vanCellGroup:CellGroup,
        vanField:Field
    },
    data() {
      return {
        value:""
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
