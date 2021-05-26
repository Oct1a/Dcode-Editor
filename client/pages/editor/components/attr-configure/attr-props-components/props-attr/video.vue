<template>
  <div>
    <el-form-item label="视频海报：">
      <imageSelect :url.sync="temp.cover" />
    </el-form-item>
    <el-form-item label="视频地址">
      <el-input
          type="textarea"
          autosize
          placeholder="请输入视频地址"
          v-model="temp.url">
        </el-input>
    </el-form-item>
    <el-form-item label="是否静音播放">
      <el-switch
          v-model="temp.muted"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
    </el-form-item>
     <el-form-item label="是否循环播放">
      <el-switch
          v-model="temp.loop"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
    </el-form-item>
         <el-form-item label="是否自动播放">
        <el-switch
          v-model="temp.autoplay"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
    </el-form-item>
     <el-form-item label="视频预加载">
      <el-select v-model="temp.preload" placeholder="请选择预加载模式">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="默认音量">
      <el-input-number v-model="temp.volume" :min="1" :max="10" ></el-input-number>
    </el-form-item>
  </div>
</template>

<script>
	import imageSelect from '@client/components/image-select'
	export default {
    name: "attr-video",
    components: {
      imageSelect
    },
		props: {
			video: Object
		},
		data() {
			return {
        temp: Object,
        options:[{
          value:'none',
          label:'不进行预加载'
        },{
          value:'metadata',
          label:'部分预加载'
        },{
          value:'auto',
          label:'全部预加载'
        },]
			}
    },
    created () {
      console.log(this.video)
      this.temp = this.video;
    },
		watch: {
			video() {
        this.temp = this.video;
      },
			// tempNum() {
			// 	this.$emit('update:avatar', this.tempNum)
			// }
    },
    methods:{

    }
	}
</script>

<style scoped lang="scss">
  /deep/.el-form-item{
    margin-bottom: 0px;
  }
</style>
