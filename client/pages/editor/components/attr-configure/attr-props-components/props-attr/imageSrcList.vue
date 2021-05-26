<template>
  <el-form-item label="图片列表：">
    <div v-for="(item, index) in tempValue" :key="index">
      <imageSelect :url.sync="item.url" @change="change"/>
      <span class="imageSelect-btn" @click="plus(index)">
        <i class="el-icon-circle-plus-outline"></i>
      </span>
      <span class="imageSelect-btn"  @click="remove(index)">
        <i class="el-icon-remove-outline"></i>
      </span>
    </div>
  </el-form-item>
</template>

<script>
	import imageSelect from '@client/components/image-select'

	export default {
		name: "attr-imageSrcList",
		props: {
			imageSrcList: {
				type: Array,
        default: () => []
      }
		},
		components: {
			imageSelect
		},
		data() {
			return {
				tempValue: []
			}
		},
		created() {
			this.initData()
		},
		watch: {
			imageSrc() {
				this.initData()
			}
		},
		methods: {
      plus(index){
        this.tempValue.splice(index+1,0,{url:""})
      },
      remove(index){
        this.tempValue.splice(index,1)
      },
			initData() {
				let list = [];
				this.imageSrcList.forEach(item => {
					list.push({url: item})
				})
				this.tempValue = list;
			},
			getResultImageSrcList() {
				let list = [];
				for (let i = 0, len = this.tempValue.length; i < len; i++) {
					list.push(this.tempValue[i].url)
				}
				return list
			},
			change() {
				this.$emit('update:imageSrcList', this.getResultImageSrcList());
			}
		}
	}
</script>

<style scoped>

</style>
