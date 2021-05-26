<template>
  <el-table
      :data="historyData"
      size="mini"
      style="max-width:100%;"
      max-height="100%"
      ref="box"
      v-show="ishow"
      @row-click="backToClick"
      >
      <el-table-column
        prop="action"
        >
        <template slot="header">
          <p>历史记录
          <el-tag type="info" size="mini" class="panel-close-btn" @click="close">x</el-tag>
           </p>
      </template>
      </el-table-column>
    </el-table>
</template>

<script>

 export default {
    methods: {
      close(){
        // 这边需至父组件修改
          this.ishow = false
      },
      backToClick(v){
          this.$store.commit('relapceEditorState', v)
      }
    },

    props: {
        historyData:Array,
        ishow:{
          type:Boolean,
          default:true
        }
    },
    data() {
      return {
      }
    },
    watch: {
      // historyData(){
      //   console.log(this.$refs.box)
      //   this.$refs.box.scrollTop = this.$refs.box.scrollHeight;
      // }
    }
  }
</script>

<style lang="scss" scope>
.el-table .warning-row {
    background: oldlace;
    .el-table--scrollable-x .el-table__body-wrapper{
      overflow-x: hidden;
    }
  }
  .panel-close-btn{
    position: absolute;
    right: 0;
  }

</style>