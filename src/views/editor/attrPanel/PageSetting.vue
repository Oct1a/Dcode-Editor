<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="背景设置" name="1">
          <el-row :gutter="20">
            <el-col :span="8">
              <span class="label">背景颜色</span>
            </el-col>
            <el-col :span="16">
                <el-color-picker
                    v-model="color"
                    show-alpha
                    :predefine="predefineColors">
                </el-color-picker>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="8">
              <span class="label">透明度</span>
            </el-col>
            <el-col :span="8">
                <el-slider v-model="trans"></el-slider>
            </el-col>
            <el-col :span="6">
                <el-input v-model="trans"  maxlength=3 minlength=1 size="small"></el-input>
            </el-col>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="页面音乐" name="2">

        </el-collapse-item>
        <el-collapse-item title="页面滤镜" name="3">

        </el-collapse-item>
      </el-collapse>




  </div>

</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      trans:0,
      color: 'rgba(252, 252, 252, 0)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
    }
  },
  methods: {
    handleChange(val){ //切换折叠面板，暂时用不上
       console.log(val);
    }
  }
}
</script>

<style lang="less" scoped>
  .label{
    line-height: 40px;
  }
  /deep/.el-collapse-item__header{
    font-size: 17px;
  }
</style>