<template>
  <div class="gridStyle">
    <el-form-item label="展示列数">
        <el-input-number v-model="tempStyle.columnNum" :min="1" size="small"></el-input-number>
    </el-form-item>
    <el-form-item label="间隔">
        <el-input-number v-model="tempStyle.gutter" size="small"></el-input-number>
    </el-form-item>
    <el-form-item label="边框">
        <el-switch
          v-model="tempStyle.border"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
    </el-form-item>
  </div>
</template>

<script>
	export default {
		name: "attr-gridStyle",
		props: {
			gridStyle: Object
		},
		data() {
			return {
				tempStyle: Object
			}
		},
		created() {
			this.tempStyle = this.gridStyle;
		},
		watch: {
			gridStyle() {
				this.tempStyle = this.gridStyle;
			},
			tempStyle() {
				this.$emit('update:gridStyle', this.tempStyle)
			}
		}
	}
</script>

<style lang="scss" scoped>
// .gridStyle{
  /deep/.van-grid-item{
    padding-right:0px;
  }

// }
</style>
