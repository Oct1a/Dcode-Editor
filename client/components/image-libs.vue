<template>
  <div>
    <el-drawer
      title="图片库"
      :visible.sync="dialogVisible"
      direction="ltr"
      custom-class="drawerClass">
       <el-tabs tab-position="top" stretch>
          <el-tab-pane label="正版图片">
            <!-- v-loading="loading" -->
            <div style="column-count: 3;column-gap: 0;">
                <div v-for="(item,index) in externalImagesList" :key="index" >
                    <el-image
                      style="height: 100%;"
                      :src="item.src" @click="handleImageClick(item.src)"></el-image>
                </div>

            </div>
          </el-tab-pane>
          <!-- :tab-click="getMyImage()" -->
          <el-tab-pane label="我的图片" >
          <!-- todo 可调用外部图片 -->
          <!-- https://material-api.eqxiu.com/m/material/category/template/list?categoryId=898438&searchCode=94231&sortBy=0&fee=&pageNo=5&pageSize=20 -->
          <!--tmbPath https://res1.eqh5.com/store/bc7aeed3f426ab1d116139b834a7483b.png -->
          <div class="image-lib-inner">
            <div class="image-lib-btn">
              <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :before-upload="beforeUpload"
                      accept="jpg,png,gif"
                      :show-file-list="false">
                <el-button size="small" type="primary">点击上传</el-button>
                <span slot="tip" class="el-upload__tip marginL20">只能上传jpg/png/gif文件，且不超过2M</span>
              </el-upload>
            </div>
            <el-scrollbar class="image-list-wrapper scroll-wrapper" v-if="imageList.length">
              <div class="image-item" v-for="(item, index) in imageList" :key="index" @click="handleImageClick(item.url)">
                <img :src="item.url" alt="">
              </div>
            </el-scrollbar>
            <div class="padding60 text-center gray" v-else>暂无数据</div>
          </div>
          </el-tab-pane>
          <el-tab-pane label="我的收藏"></el-tab-pane>
          <el-tab-pane label="最近图片"></el-tab-pane>
        </el-tabs>
    </el-drawer>
  </div>
</template>

<script>
	import $bus from '@client/eventBus'

	export default {
		name: "image-libs",
		data() {
			return {
				dialogVisible: false,
				uploading: false,
				hasLoadData: false,
				imageList: [],
        selectId: '',
        externalImagesList:[],
        loading:true
			}
    },
		created() {
			$bus.$on('show-select-image', selectId => {
				this.dialogVisible = true;
        this.selectId = selectId;
      })
        this.getExternalImages()//todo:这边还需要处理资源请求失败情况
		},
		watch: {
      // dialogVisible(val) {
      //   if (val && !this.uploading) {
      //     this.getMyImages()
			// 	}
			// }
    },

		methods: {
      getMyImage(){
        this.getMyImages()
      },
			beforeUpload(file) {
				if (file.size > 1 * 1024 * 1024) {
					this.$message.error('psd文件不能超过1M！')
					return;
				}
				let temp1 = file.name.split('.')
				let temp = temp1[temp1.length - 1]
				if (!['jpg', 'png', 'gif'].includes(temp)) {
					this.$message.error('请上传jpg/png/gif文件')
					return false;
				}
				this.uploadPsd(file);
				return false;
			},
			uploadPsd(file) {
				let params = new FormData()
				params.append('file', file);
				this.uploading = true;
				this.$API.uploadImage(params).then(res => {
					this.uploading = false;
					this.imageList.splice(0, 0, res.body)
				}).catch(() => {
					this.uploading = true;
				})
			},
			getMyImages() {
				this.hasLoadData = true;
				this.$API.getMyImages().then(res => {
					this.imageList = res.body || [];
				})
      },
       getExternalImages(){
          this.$API.getExternalImages().then(res => {
            res.body.data.dataList.forEach(v => {
                this.externalImagesList.push({
                    'src':"https://res1.eqh5.com/"+ v.productTypeMap.tmbPath
                })
            });
          })

      },
			/**
			 * 点击图片
			 * @param url
			 */
			handleImageClick(url) {
        $bus.$emit('select-image', this.selectId, url)
        this.dialogVisible = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
.image-list-wrapper{
  height: 400px;
  padding-top: 20px;
  .image-item{
    width: 120px;
    height: 120px;
    float: left;
    background: #eee 50%/contain no-repeat;
    cursor: pointer;
    justify-content:center;
    align-items:center;
    display: flex;
    transition: all 0.28s;
    margin: 5px;
    &:hover{
      box-shadow: 0 0 16px 0 rgba(0,0,0,.16);
      transform: translate3d(0,-2px,0);
    }
    img{
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }

  }
}
</style>
<style lang="scss">
  .components-image-libs-wrapper{
    .el-dialog__body{
      padding: 0 20px 20px;
    }
  }
  .drawerClass{
    padding: 0 10px 0 15px;
     overflow: auto;
    /*更改滚动条样式*/
     &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(152, 155, 163, 0.5);
    }

    .el-drawer__header{
      margin-bottom: 10px;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
