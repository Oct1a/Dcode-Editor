<template>
  <div class="header">
  <el-row :gutter="20">
      <el-col :span="6">
        <div class="logo">
          <img src="http://placehold.it/200x100" alt="" />
        </div>
      </el-col>
      <el-col :span="13" style="text-algin:center">
          <el-row :gutter="10">
            <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
          <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
            <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
            <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
            <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
            <el-col :span="2">
              <a href="javascript:void(0);">
                <i class="el-icon-edit"></i>
              </a>
            </el-col>
          </el-row>
      </el-col>
      <el-col :span="5">
          <el-row :gutter="10">
            <el-col :span="6">
                <el-button type="primary" size="small"><i class="el-icon-view"></i> 预览</el-button>
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
export default {
  name:'Header'
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