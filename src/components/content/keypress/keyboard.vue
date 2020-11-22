<template>
  <el-dialog title="快捷键" :visible=true :width="'20%'" :modal=false destroy-on-close>
      <template v-for="item in attrList">
            <div v-for="(ele,key) in item" :key="ele" class="panel-item">
              <div class="label">{{key}}</div>
              <div class="keys">{{ele}}</div>
            </div>
        </template>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        attrList:[{
            "保存":'Ctrl + S1',
            "保存1":'Ctrl + S2',
            "保存2":'Ctrl + S2',
            "保存3":'Ctrl + S3',
          },{
            "平移1":'Ctrl + S4',
            "平移2":'Ctrl + S5',
            "平移3":'Ctrl + S6',
            "平移4":'Ctrl + S23',
            "平移5":'Ctrl + S3',
          },{
            "上移1":'Ctrl + S2',
            "上移2":'Ctrl + S3',
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .panel-item{
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    height: 40px;
    color: #788590;
    font-size: 14px;
  }
  /deep/.el-dialog__body{
    padding:0px 20px 20px 20px;
    margin-top: -20px;
  }
  /deep/.el-dialog__header{
    padding: 0px 20px;
  }
</style>