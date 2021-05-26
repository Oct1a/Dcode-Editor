<template>
  <el-popover placement="top" width="190" v-model="dialogVisible">
      <template v-for="item in attrList">
          <div v-for="(ele,key) in item" :key="key" class="panel-item">
            <div class="label">{{key}}</div>
            <div class="keys">{{ele}}</div>
          </div>
      </template>
        <el-button slot="reference" icon="el-icon-c-scale-to-original" class="keybtn"></el-button>
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      attrList: [
         {
          "删除": "Delete",
          "复制": "Ctrl + C",
          "粘贴": "Ctrl + shift + V",
        },
        {
          "保存": "Ctrl + S",
          "撤销": "Ctrl + Z",
          "重做": "Ctrl + Y",
        },
        {
          "上移": "↑",
          "下移": "↓",
          "左移": "←",
          "右移": "→",
        },
        {
          "画布缩小": "Ctrl + -",
          "画布放大": "Ctrl + +",
          "图层上移": "Ctrl + [",
          "图层下移": "Ctrl + ]",
          "图层置顶": "Ctrl + Shift + [",
          "图层置底": "Ctrl + Shift + ]",
        }
      ],
    };
  },
  methods: {
    show() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-item {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  height: 40px;
  color: #788590;
  font-size: 14px;
}
.keybtn{
  font-size: 16px;
}
</style>