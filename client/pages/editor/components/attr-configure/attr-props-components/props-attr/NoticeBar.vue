<template>
<div>
  <el-form-item label="字体颜色">
     <el-color-picker size="mini"
      v-model="styleTemp.color">
      </el-color-picker>
  </el-form-item>
    <el-form-item label="背景颜色">
     <el-color-picker size="mini"
      v-model="styleTemp.background">
      </el-color-picker>
  </el-form-item>
  <el-form-item label="滚动设置">
     <el-radio v-model="styleTemp.scrollable" label="0">静止</el-radio>
    <el-radio v-model="styleTemp.scrollable" label="1">滚动</el-radio>
  </el-form-item>
  <el-form-item label="文本是否换行">
     <el-radio v-model="styleTemp.wrapable" label="1">是</el-radio>
    <el-radio v-model="styleTemp.wrapable" label="0">否</el-radio>
  </el-form-item>
 <el-form-item label="动画延迟时间 (s)">
    <el-input-number v-model="styleTemp.delay" size="small" :precision="2" :step="0.1" :max="50"></el-input-number>
  </el-form-item>
  <el-form-item label="滚动速率 (px/s)">
    <el-input-number v-model="styleTemp.speed" :step="10" size="small"></el-input-number>
  </el-form-item>
</div>

</template>

<script>
	export default {
		name: "attr-noticeBarStyle",
		props: {
      noticeBarStyle:Object
		},
		data() {
			return {
        styleTemp:{},
			}
		},
		mounted() {
			this.styleTemp = this.noticeBarStyle;
		},
		watch: {
			noticeBarStyle(val) {
				this.styleTemp = val;
			},
			styleTemp:{
        handler(){
          this.$emit('update:noticeBarStyle', this.styleTemp);
        },
        deep:true
			}
		}
	}
</script>

<style scoped>

</style>
