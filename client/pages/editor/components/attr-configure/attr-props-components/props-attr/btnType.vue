<template>
<div>
  <el-form-item label="按钮样式：">
  <el-row>
      <el-button circle @click="btnTypeTemp='default'"></el-button>
      <el-button type="primary" circle @click="btnTypeTemp='info'"></el-button>
      <el-button type="success" circle @click="btnTypeTemp='primary'"></el-button>
      <el-button type="warning"  circle @click="btnTypeTemp='warning'"></el-button>
      <el-button type="danger" circle @click="btnTypeTemp='danger'"></el-button>
    </el-row>
    </el-form-item>
</div>

</template>

<script>
	export default {
		name: "attr-btnType",
		props: {
      btnType:String
		},
		data() {
			return {
        btnTypeTemp:'',
			}
		},
		mounted() {
			this.btnTypeTemp = this.btnType;
		},
		watch: {
			btnType(val) {
				this.btnTypeTemp = val;
			},
			btnTypeTemp() {
				this.$emit('update:btnType', this.btnTypeTemp);
			}
		}
	}
</script>

<style scoped>

</style>
