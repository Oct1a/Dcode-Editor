<template>
  <div class="upload-psd-btn-wrapper">
    <el-upload
            action="111"
            :on-change="beforeUpload"
            accept=".json"
            :limit=1
            :before-upload="httpRequest"
            :multiple=false
            :http-request="beforeUpload"
            :show-file-list="false">
        <slot></slot>
    </el-upload>
  </div>
</template>

<script>
import { mapState } from "vuex";
	export default {
    data() {
      return {
          loading:false
      }
    },
     computed: {
    ...mapState({
      activePageUUID: (state) => state.editor.activePageUUID,
    }),
     },
		methods: {
			beforeUpload(file){
				if(file.size > 5 * 1024 * 1024){
					this.$message.error('json文件不能超过5M！')
					return;
				}
				let temp1 = file.name.split('.')
				let temp = temp1[temp1.length - 1]
				if (!['json'].includes(temp)) {
					this.$message.error('请上传正确的JSON文件')
					return false;
        }
        this.loading = this.$loading({
          lock: true,
          text: '正在解析中....',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.uploadJson(file);
				return false;
      },
      httpRequest(){
        return false
      },
      uploadJson(file){
				let reader = new FileReader();
        if (typeof FileReader === "undefined") {
          this.$message({
            type: "info",
            message: "您的浏览器不支持文件读取。"
          });
          return;
        }
        reader.readAsText(file.raw);
        new Promise((resolve,reject)=>{
          reader.onload = function(e) {
            let data = JSON.parse(e.target.result)
            resolve(data)
          };

        }).then(r=>{
          try {
            let {coverImage,description,height,name,pages,script,title,width,isPublish,isTemplate,pageMode} = r
            let data = {
              projectData:{
                coverImage,description,height,name,pages,script,title,width,isPublish,isTemplate,pageMode
              }
            }
            this.$store.dispatch("setPrjectData", {
              ...r,
            });
            this.$emit('upload-success')
          } catch (error) {
            this.$emit('upload-error')
          }
          this.loading.close()
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
