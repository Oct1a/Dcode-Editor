/**
* 控制按钮
*/
<template>
  <div class="components-contrl-bar">
    <div class="button-item scale-wrappper">
      <span class="scale-btn" @click="updateScale('reduce')">
        <i class="el-icon-zoom-out"></i>
      </span>
      <span class="scale-input">{{parseFloat(scaleValue * 100).toFixed(0)}}%</span>
      <span class="scale-btn" @click="updateScale('plus')">
        <i class="el-icon-zoom-in"></i>
      </span>
    </div>
    <div class="button-item" :class="{disabled: !canUndo}" @click="editorUndo">
      <i class="iconfont iconundo1"></i>
      <p>撤销</p>
    </div>
    <div class="button-item" :class="{disabled: !canRedo}" @click="editorRedo">
      <i class="iconfont iconredo1"></i>
      <p>重做</p>
    </div>

      <div class="button-item" @click="dialogVisible = true">
        <i class="iconfont iconPSD"></i>
        <p>导入psd</p>
      </div>

    <div class="button-item" @click="showPreview">
      <i class="iconfont iconyulan"></i>
      <p>预览</p>
    </div>
    <div class="button-item" @click="save">
      <i class="iconfont iconbaocun"></i>
      <p>保存</p>
    </div>
    <div class="button-item" @click="publishFn">
      <i class="iconfont iconfabu"></i>
      <p>发布</p>
   </div>
   <UploadJson @upload-success="uploadSuccessJson" upload-error="uploadErrorJson">
      <div class="button-item">
        <i class="el-icon-upload2" style="font-size:20px"></i>
        <p>上传Json</p>
      </div>
   </UploadJson>
    <div class="button-item" @click="jsonDownload">
      <i class="el-icon-download" style="font-size:20px"></i>
      <p>下载Json</p>
    </div>
   <div class="button-item" @click="fullScreen">
      <i class="iconfont iconquanping"></i>
      <p>全屏</p>
    </div>
    <div class="button-item" @click="cancelFn">
      <i class="iconfont icontuichu"></i>
      <p>退出</p>
    </div>
    <div>
      <el-dialog
          title="PSD上传"
          :visible.sync="dialogVisible"
          width="40%"
          append-to-body
          >
          <div style="text-align:center;">
           <UploadPsd @upload-success="uploadSuccessPsd"/>
          </div>
          <div class="uploadTips">
            <ul>
              <li>1 建议上传单页PSD尺寸为<span>640*1040</span>, 针对iphoneX机型，尺寸为<span>640*1240px</span>。</li>
              <li>2 为保证上传速度，PSD文件大小不超过<span>40M</span>图层不能超过<span>30个</span>且每个图层不能够超过<span>5M</span></li>
              <li>3 必须使用<span>RGB/8</span>通道模式, 为保证图片质量，建议上传前尽量将效果合并至图层中。</li>
            </ul>
          </div>
        </el-dialog>
    </div>
  </div>

</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
  import UploadPsd from '@client/components/upload-psd'
  import UploadJson from '@client/components/upload-json'
  import screenfull from 'screenfull' //控制全屏
	export default {
		components: {
      UploadPsd,
      UploadJson
    },
		props: {
			// 是否loading
			loading: {
				type: Boolean,
				default: false
			},
			scale: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				// 画板缩放
        scaleValue: 1,
        dialogVisible:false,
			}
		},
		computed: {
			...mapGetters([
				'canUndo',
        'canRedo',
        'getProjectDataJson'
			])
		},
		created() {
			this.scaleValue = this.scale;
		},
		methods: {
			...mapActions([
				'editorUndo',
				'editorRedo'
			]),
			/**
			 * 更新画板大小
			 */
			updateScale(type, value) {
				if (type === 'plus') {
					this.scaleValue = this.scaleValue + (value || 0.1) > 2 ? 2 : this.scaleValue + (value || 0.1)
				} else if (type === 'reduce') {
					this.scaleValue = this.scaleValue - (value || 0.1) > 0.5 ? this.scaleValue - (value || 0.1) : 0.5;
				} else if (type === 'reset') {
					this.scaleValue = value || 1;
				}

				this.$emit('update:scale', this.scaleValue)
			},
      /**
       * 获取psd数据
       */
			uploadSuccessPsd(dataList){
        this.dialogVisible = false
        this.$emit('import-psd-data', dataList)
      },
			/**
			 * 点击保存按钮
			 */
			save() {
				this.$emit('save')
			},
			/**
       * 显示预览
			 */
			showPreview(){
				this.$emit('showPreview')
      },
			/**
			 * 发布
			 */
			publishFn(){
				this.$emit('publish')
      },
			cancelFn(){
				this.$emit('cancel')
      },
      fullScreen(){ //全屏
        screenfull.toggle();
      },
      async jsonDownload(){
        this.$emit('save')
        this.$API.JsonDownload({pageId:this.$route.query.id}).then(result=>{
            window.open(result.body.outputDir)
        })
      },
      uploadErrorJson(){
        this.$message({
          showClose: true,
          message: '出错了，该json文件无法解析',
          type: 'error'
        });
      },
      uploadSuccessJson(){
        this.$emit('save')
      }
		}
	}
</script>

<style lang="scss" scoped>

  .uploadTips{
    margin-top: 30px;
    li{
      margin-top: 10px;
      span{
        color:red;
      }
    }
  }
  .components-contrl-bar {
    display: inline-block;
    z-index: 3;
    padding: 2px 12px;
    height: 30px;
    .button-item {
      display: inline-block;
      width: 68px;
      cursor: pointer;
      text-align: center;
      vertical-align: bottom;
      font-size: 14px;
      transition: color 0.28s, transform 0.28s;
      user-select: none;
      &.scale-wrappper {
        width: 110px;
        margin-right: 10px;
        &:hover {
          color: inherit;
          transform: none;
        }
        & > .scale-btn {
          display: inline-block;
          vertical-align: middle;
          padding: 6px 2px;
          font-size: 20px;
          transition: all 0.28s;
          &:hover {
            color: $primary;
          }
        }
      }
      &:hover {
        color: $primary;
        transform: scale(1.02);
        font-weight: bold;
      }
      &.disabled {
        cursor: not-allowed;
        color: $gray !important;
      }
      & > i {
        font-size: 18px;
        display: inline-block;
        transition: all 0.28s;
      }
      & > p {
        font-size: 14px;
      }
    }
  }

  .scale-input {
    display: inline-block;
    position: relative;
    padding: 7px 0;
    width: 46px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 17px;
    margin: 0 4px;
    &:hover {
      background: #dfdfdf;
    }
  }
</style>
