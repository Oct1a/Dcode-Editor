<template>
  <div class="upload-psd-btn-wrapper">
    <el-upload
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
         :before-upload="beforeUpload"
        accept=".psd"
        :show-file-list="false"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传PSD文件，且不超过40MB</div>
        <slot></slot>
    </el-upload>
    <div style="width:100%;text-align:center;margin-top:30px;">
          <el-radio v-model="psdModel" label="text" border>文字可编辑模式</el-radio>
          <el-radio v-model="psdModel" label="image" border>图层全转为图片模式</el-radio>
        </div>
  </div>
</template>

<script>
	export default {
    data() {
      return {
        loading:"",
        psdModel:"image"
      }
    },
		methods: {
			beforeUpload(file){
        this.loading = this.$loading({
          lock: true,
          text: '正在导入中，请稍后',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
				if(file.size > 40 * 1024 * 1024){
					this.$message.error('psd文件不能超过40M！可以进行适当的图层合并')
					return;
				}
				let temp1 = file.name.split('.')
				let temp = temp1[temp1.length - 1]
				if (!['psd'].includes(temp)) {
					this.$message.error('请上传psd文件')
					return false;
				}
        this.uploadPsd(file);

				return false;
      },
      uploadPsd(file){
				let params  = new FormData()
        params.append('file', file);
        params.append('psdModel',this.psdModel)
				this.$API.psdPpload(params).then(res => {
          this.$emit('upload-success', res.body || [])
          this.loading.close();
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
.upload-psd-btn-wrapper{
  display: inline-block;
}
</style>
