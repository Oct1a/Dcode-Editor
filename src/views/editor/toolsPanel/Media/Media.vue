<template>
  <div class="Base">
    <h3>媒体组件</h3>
    <el-row :gutter="10">
      <el-col :span="12" v-for="(o, index) in 5" :key="o"  >
          <ShowSubComponents class="subcomps"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ShowSubComponents from 'components/content/subToolsPanel/SubTools'
export default {
  name:'Base',
  data() {
    return {
      compsList:[

      ]
    }
  },
  components: {
    ShowSubComponents
  }
}
</script>

<style lang="less" scoped>
  .Base{
    padding-right: 15px;
  }
  .subcomps{
    margin:5px 0px
  }
</style>