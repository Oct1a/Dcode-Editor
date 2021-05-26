<template>
  <div>
    <el-form-item label="展示个数">
        <el-input-number v-model="tempNum.num" :min="1" size="small" @change="changeNum"></el-input-number>
    </el-form-item>
  </div>
</template>

<script>
	export default {
		name: "attr-avatar",
		props: {
			avatar: Object
		},
		data() {
			return {
				tempNum: Object
			}
    },
    created () {
      this.tempNum = this.avatar;
    },
		watch: {
			avatar() {
        this.tempNum = this.avatar;
      },
			tempNum() {
				this.$emit('update:avatar', this.tempNum)
			}
    },
    methods:{
      changeNum(newValue,oldValue){
        if(newValue > oldValue){
            while (this.tempNum.imgList.length < newValue){
            // 增加
            this.tempNum.imgList.splice(oldValue,0,`https://api.btstu.cn/sjtx/api.php?lx=a1&format=images&method=mobile&t=`+ (new Date).getTime())
           }
        }else{
          this.tempNum.imgList.splice(newValue-1,oldValue-newValue)
        }
      }
    }
	}
</script>

<style scoped>

</style>
