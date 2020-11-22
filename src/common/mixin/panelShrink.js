export const panelShrink = {
  template: '#shirink',
  data() {
    return {
      isShowPanel: true,
    }
  },
  methods: {
    handleShrink() { //收缩面板动画
      this.isShowPanel = !this.isShowPanel
    },
  },
  computed: {
    shrinkIcon() {
      return this.isShowPanel ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'
    }
  }
}