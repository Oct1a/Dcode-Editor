<template>
  <div class="header">
    <el-row :gutter="20">
        <el-col :span="6">
          <div class="logo">
            <img src="http://placehold.it/200x100" alt="" />
          </div>
        </el-col>
        <el-col :span="13" style="text-algin:center;">
            <el-row :gutter="10">
              <el-col :span="2">
                 <el-tooltip class="item" effect="dark" content="删除(delete)" placement="bottom">
                <a href="javascript:void(0);">
                  <i class="el-icon-delete"></i>
                </a>
                </el-tooltip>
              </el-col>
              <el-col :span="2">
                 <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                <a href="javascript:void(0);">
                  <i class="el-icon-edit"></i>
                </a>
                </el-tooltip>
              </el-col>
               <el-col :span="2">
                  <el-tooltip class="item" effect="dark" content="刷新(清空)" placement="bottom">
                <a href="javascript:void(0);">
                  <i class="el-icon-refresh"></i>
                </a>
                </el-tooltip>
              </el-col>
            <el-col :span="2">
               <el-tooltip class="item" effect="dark" content="恢复(Ctrl+Y)" placement="bottom">
                <a href="javascript:void(0);">
                  <i class="el-icon-refresh-right"></i>
                </a>
                </el-tooltip>
              </el-col>
              <el-col :span="2">
                 <el-tooltip class="item" effect="dark" content="撤销(Ctrl+Z)" placement="bottom">
                <a href="javascript:void(0);">
                  <i class="el-icon-refresh-left"></i>
                </a>
                </el-tooltip>
              </el-col>
              <el-col :span="2">
                 <el-tooltip class="item" effect="dark" content="快捷键" placement="bottom">
                  <a href="javascript:void(0);" @click="keyboard">
                    <i class="el-icon-mouse"></i>
                  </a>
                </el-tooltip>
              </el-col>
              <el-col :span="2">
                 <el-tooltip class="item" effect="dark" content="复制(Ctrl+C)" placement="bottom">
                    <a href="javascript:void(0);">
                      <i class="el-icon-document-copy"></i>
                    </a>
                  </el-tooltip>
              </el-col>
              <el-col :span="2">
                <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                  <a href="javascript:void(0);"><i class="el-icon-full-screen" @click="tool_FullScreen"></i></a>
                </el-tooltip>
              </el-col>
              <!-- <el-col :span="2">
                  帮助
              </el-col> -->
            </el-row>
        </el-col>
        <el-col :span="5">
            <el-row :gutter="10">
              <el-col :span="6">
                  <el-button type="primary" size="small"><i class="el-icon-view"></i>预览</el-button>
              </el-col>
              <el-col :span="6">
                  <el-button  size="small" ><i class="el-icon-folder"></i>保存</el-button>
              </el-col>
              <el-col :span="6">
                  <el-button type="success" size="small"><i class="el-icon-upload"></i>发布</el-button>
              </el-col>
              <el-col :span="6">
                  <el-button type="info" size="small" >退出</el-button>
              </el-col>
            </el-row>
        </el-col>
      </el-row>

  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name:'Header',
  components: {
  },
  data() {
    return {
      // keyboardShow:false,
    }
  },
  methods: {
    tool_FullScreen(){ //点击全屏
      screenfull.toggle();
    },
    keyboard(){
      // this.keyboardShow = true
    }
  },
  mounted () {

  }
};
</script>

<style lang="less" scoped>
  .header{
    line-height: 60px;
    overflow: hidden;
  }
  .logo{
    width: 100%;
    img{
      width: 100px;
    }
  }
</style>