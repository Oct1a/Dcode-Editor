import screenfull from 'screenfull' //控制全屏
/**
 *  元素点击事件相关方法
 * */
export default {
  methods: {
    oncontextmenu(event) {
      // console.log(this.activeElementUUID)
      this.$contextmenu({
        items: [{
            label: "复制(C)",
            icon: "el-icon-copy-document",
            disabled: !this.activeElementUUID, //点击组件后更改状态
            onClick: () => {
              this.Copy()
            }
          },
          {
            label: "粘贴(V)",
            icon: "el-icon-money",
            disabled: !this.activeEle, //状态有值时改变状态
            onClick: () => {
              this.Paste()
            }
          },
          {
            label: "保存(S)",
            icon: "el-icon-folder-checked",
            onClick: () => {
              this.$emit('save')
              this.$message.success("保存成功!");
            }
          },
          {
            label: "删除(D)",
            icon: "el-icon-delete",
            onClick: () => {
              this.$store.dispatch("elementCommand", "delete");
            }
          },
          {
            label: "清空画布(R)",
            divided: true,
            onClick: () => {
              this.$store.dispatch("resetPageData")
            }
          },
          {
            label: "打开/关闭历史面板(Y)",
            divided: true,
            icon: "el-icon-turn-off",
            // disabled: this.historyCache.length != 0,
            onClick: () => {
              this.ishowHistory = !this.ishowHistory
            }
          },
          {
            label: "重新加载(R)",
            icon: "el-icon-refresh",
            onClick: () => {
              this.$router.go(0);
            }
          },
          {
            label: "全屏/退出全屏(Q)",
            icon: "el-icon-full-screen",
            onClick: () => {
              screenfull.toggle();
            }
          }
        ],
        event,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 230
      });
      return false;
    },
    disableMenu() {
      return false;
    }
  }

}