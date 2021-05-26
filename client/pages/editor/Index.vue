<template>
  <div
    class="page-editor editor-wrapper"
    v-loading="loading"
    v-hotkey="handleKeyup"
  >
    <!--左侧导航-->
    <div class="editor-side-bar border-R" @contextmenu.prevent="disableMenu">
      <el-tabs
        tab-position="left"
        v-model="activeSideBar"
        style="height: 100%"
        stretch
      >
        <el-tab-pane
          v-for="(item, index) in sidebarMenus"
          :key="index"
          :name="item.value"
        >
          <el-tooltip
            slot="label"
            class="item"
            effect="dark"
            :content="item.label"
            placement="right"
          >
            <i :class="item.elementUiIcon"></i>
          </el-tooltip>
        </el-tab-pane>
      </el-tabs>
      <div
        class="boxshow"
        @click="handleShrink"
        v-show="!isShowLeftPanel || !isShowRightPanel"
      >
        <i class="el-icon-magic-stick"></i>
        <span>展开</span>
      </div>
    </div>

    <!--组件&页面&模板-->
    <div class="editor-page-edit-wrapper" v-show="isShowLeftPanel" @contextmenu.prevent="disableMenu">
      <div class="shrink left" @click="handleShrinkLeft">
        <i class="el-icon-arrow-left"></i>
      </div>
      <componentLibs v-if="activeSideBar === 'componentLibs'" />
      <pageManage v-if="activeSideBar === 'pageManage'" />
      <templateLibs v-if="activeSideBar === 'templateLibs'" />
    </div>
    <!--页面编辑区域-->
    <div class="editor-main" @contextmenu.prevent="oncontextmenu">
      <div class="control-bar-wrapper">
        <controlBar
          :scale.sync="canvasConfig.scale"
          @import-psd-data="importPsdData"
          @import-Json-data = "importJsonData"
          @showPreview="showPreviewFn"
          @cancel="cancelFn"
          @publish="publishFn"
          @save="saveFn"
        />
      </div>
      <droppable
        @dragstart="onDragStart"
        @dragend="onDragEnd"
        @drop="onDrop"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
      >
        <editorPan :scale.sync="canvasConfig.scale" />
      </droppable>
      <!-- 快捷键面板 -->
      <keyboard id="keyboard"></keyboard>
      <!-- 历史记录面板 -->
      <history :historyData="historyCache" v-show="historyCache.length!=0 && ishowHistory" class="history-panel" />
    </div>
    <!--属性编辑区域-->
    <div
      class="el-attr-edit-wrapper scrollbar-wrapper"
      v-show="isShowRightPanel"
      @contextmenu.prevent="disableMenu"
    >
      <div class="shrink right" @click="handleShrinkRight">
        <i class="el-icon-arrow-right"></i>
      </div>
      <el-tabs v-model="activeAttr" stretch>
        <el-tab-pane label="属性" name="属性">
          <attrEdit></attrEdit>
        </el-tab-pane>
        <el-tab-pane label="事件" name="事件">
          <eventEdit></eventEdit>
        </el-tab-pane>
        <el-tab-pane label="动画" name="动画">
          <animationEdit></animationEdit>
        </el-tab-pane>
        <el-tab-pane label="JS脚本" name="脚本">
          <scriptEdit></scriptEdit>
        </el-tab-pane>
        <el-tab-pane label="页面设置" name="页面属性">
          <pageAttrEdit></pageAttrEdit>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--预览-->
    <previewPage
      v-if="showPreview"
      :pageData="projectData"
      :pageId="id"
      @closePreview="showPreview = false"
      @publishFn="publishFn"
      @saveFn="saveFn"
    ></previewPage>
    <!--我的图片-->
    <imageLibs />

  </div>
</template>

<script>
import componentLibs from "./components/component-libs/Index";
import pageManage from "./components/page-manage";
import templateLibs from "./components/template-libs";
import editorPan from "./components/editor-panel/Index";
// 属性编辑相关组件
import attrEdit from "./components/attr-configure/attr-edit";
import animationEdit from "./components/attr-configure/animation-edit";
import eventEdit from "./components/attr-configure/event-edit";
import pageAttrEdit from "./components/attr-configure/page-attr-edit";
import scriptEdit from "./components/attr-configure/script-edit";

import controlBar from "./components/control-bar";

import previewPage from "./components/preview";
import imageLibs from "@client/components/image-libs";

import { mapState, mapGetters } from "vuex";
import html2canvas from "html2canvas";

import { Droppable } from "@/libs/drag";

import elementEvents from "@/mixins/elementEvents";
import ContextMenu from "@/mixins/contextmenu";

import $config from "@client/config";

import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度条样式

import keyboard from './components/keyboard'

import history from './components/history'

export default {
  components: {
    componentLibs,
    pageManage,
    templateLibs,
    imageLibs,
    editorPan,
    attrEdit,
    animationEdit,
    eventEdit,
    pageAttrEdit,
    scriptEdit,
    controlBar,
    previewPage,
    Droppable,
    keyboard,
    history
  },
  data() {
    return {
      id: "", // 当前页面id
      loading: false,
      showPreview: false,
      activeAttr: "属性",
      activeEle: "",
      activeSideBar: "componentLibs",
      isShowLeftPanel: true,
      isShowRightPanel: true,
      ishowHistory:false,
      sidebarMenus: [
        {
          label: "组件列表",
          value: "componentLibs",
          elementUiIcon: "el-icon-s-operation",
        },
        {
          label: "页面管理",
          value: "pageManage",
          elementUiIcon: "el-icon-document",
        },
        {
          label: "模板库",
          value: "templateLibs",
          elementUiIcon: "el-icon-files",
        },
      ],
      canvasConfig: {
        scale: 1,
      },
    };
  },
  mixins: [elementEvents, ContextMenu],
  computed: {
    ...mapState({
      projectData: (state) => state.editor.projectData,
      activePageUUID: (state) => state.editor.activePageUUID,
      activeElementUUID: (state) => state.editor.activeElementUUID,
      historyCache: (state) => state.editor.historyCache,
    }),
    ...mapGetters([
      "currentPageIndex",
      "activeElementIndex",
      "activeElement",
      "activePage",
      "editorUndo",
      "editorRedo",
    ]),

    /**
     * 监听键盘事件
     * @param e
     */
    handleKeyup() {
      return {
        // windows
        "ctrl.s": this.SaveData,
        "ctrl.z": this.Undo,
        "ctrl.y": this.Redo,
        "ctrl.-": this.Narrow,
        "ctrl.=": this.Enlarge,
        "ctrl.c": this.Copy,
        "ctrl.shift.v": this.Paste,
        "ctrl.[": this.UpperLayer,
        "ctrl.]": this.LowerLayer,
        "ctrl.shift.[": this.LayerTop,
        "ctrl.shift.]": this.LayerBottom,
        delete: this.DeleteElement,
        left:this.leftMove,
        right:this.rightMove,
        up:this.upMove,
        down:this.downMove,
        //这边先不考虑MAC，有需要再添加
      };
    },
  },
  created() {
    // 判断用户id与作品id是否一致，或者是否存在与协作人员名单中，否则无法访问
    this.$store.dispatch("setPrjectData");
    this.id = this.$route.query.id;
    this.initPageData();
  },
  methods: {
    /**
     * 初始化页面数据
     */
    initPageData() {
      this.loading = true;
      this.$API
        .getPageDetail({ pageId: this.id })
        .then((res) => {
          this.loading = false;
          this.$store.dispatch("setPrjectData", {
            ...res.body,
          });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    /**
     * 面板收缩控制
     */
    handleShrinkLeft() {
      this.isShowLeftPanel = !this.isShowLeftPanel;
    },
    handleShrinkRight() {
      this.isShowRightPanel = !this.isShowRightPanel;
    },
    handleShrink() {
      this.isShowLeftPanel = true;
      this.isShowRightPanel = true;
    },
    /**
     * 监听拖动
     */
    onDragStart(params) {
      console.log("监听到拖动开始", params);
    },
    onDragEnd(params) {
      console.log("监听到拖动结束", params);
    },
    // 监听到被拖动元素放下
    onDrop(params) {
      // 如果存在宽度的话，则取宽度/2，不存在则获取屏幕宽度/2
      let defaultStyle = params.data.defaultStyle;
      let Element_Width = defaultStyle.width
        ? defaultStyle.width / 2
        : $config.canvasH5Width / 2;
      let Element_Height = params.data.defaultStyle.height / 2;
      this.getMoveLocal(params, (r) => {
        params.data.defaultStyle.left = r.offsetX - Element_Width;
        params.data.defaultStyle.top = r.offsetY - Element_Height;
        params.data.creState = "move"; //声明状态
        let props = this.getComponentProps(params.data.elName);
        this.$store.dispatch("addElement", {
          ...params.data,
          needProps: props,
        });
      });
    },
    onDragEnter(params) {
      console.log("监听到被拖动元素进入当前范围", params);
    },
    onDragLeave(params) {
      console.log("监听到被拖动元素离开当前范围", params);
    },

    getMoveLocal(params, callback) {
      let local = {};
      let caller = true;
      params.el.onmouseover = (event) => {
        try {
          if (event.offsetX || event.offsetY) {
            local.offsetX = event.offsetX;
            local.offsetY = event.offsetY;
          } else if (event.layerX || event.layerY) {
            local.offsetX = event.layerX - 1;
            local.offsetY = event.event.layerY - 1;
          }
        } catch (error) {
          local.offsetX = undefined;
          local.offsetY = undefined;
        }
        if (caller) {
          caller = false;
          callback(local);
        }
      };
    },
    /**
     * 保存
     */
    async saveFn() {
      await this.screenshots() //截图保存
      this.$API.updatePage({ pageData: this.projectData }).then(() => {
        this.$message.success("保存成功!");
        this.showPreview = false;
      });
    },
    /**
     * 发布
     */
    async publishFn() {
      let data = { ...this.projectData };
      data.isPublish = true;
      this.$API.updatePage({ pageData: data }).then(() => {
        this.$message.success("已成功保存并发布!");
        this.showPreview = false;
        this.$router.push({ name: "pageList" });
      });
    },
    async showPreviewFn() {
      await this.screenshots();
      // 提交数据再预览
      this.$API.updatePage({ pageData: this.projectData }).then(() => {
        this.showPreview = true;
      });
    },
    /**
     * 退出
     */
    cancelFn() {
      this.$confirm("确认退出编辑?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$API.updatePage({ pageData: this.projectData })
          this.$router.push({ name: "Home" });
        })
        .catch(() => {});
    },
    /**
     * 截图作为主图
     */
    screenshots() {
      const el = document.querySelector("#canvas-panel");
      html2canvas(el, {
        logging: true,
        proxy: `${this.$config.baseURL}/html2canvas/corsproxy`,
      }).then((canvas) => {
        let url = canvas.toDataURL("image/jpeg");
        this.$store.commit("updateCoverImage", url);
      });
    },
    /**
     * 导入JSON文件
     */
    importJsonData(data){
        console.log(data)
    },
    /**
     * 导入PSD文件
     * @param dataList
     */
    importPsdData(psdData) {
      NProgress.start();
      let elementsList = psdData.elements;
      let psdWidth = psdData.document.width;
      let scalingRatio = this.projectData.width / psdWidth;
      elementsList.forEach((item) => {
        let { width, height, top, left, imageSrc, opacity, zIndex } = item;
        console.log(item)
        if (item.type == "text") {
          let colors = item.text.font.colors[0];
          setTimeout(()=>{
            this.$store.dispatch("addElement", {
              elName: "Ds-text",
              defaultStyle: {
                width: width * scalingRatio + 20,
                height: height * scalingRatio + 20,
                top: top * scalingRatio,
                left: left * scalingRatio,
                zIndex: zIndex,
                creState: "psd",
                opacity,
                fontSize: item.text.font.sizes[0] * scalingRatio,
                color: `rgba(${colors[0]},${colors[1]},${colors[2]},${colors[3]})`,
              },
              needProps: {
                text: item.text.value,
                algin: item.text.font.alignment,
                fontFamily: item.text.font.name,
                transMatrix: item.text.transform,
              },
            });
          },20)
        } else if (item.type == "picture") {
          setTimeout(() => {
            this.$store.dispatch("addElement", {
              elName: "Ds-image",
              defaultStyle: {
                width: width * scalingRatio,
                height: height * scalingRatio,
                top: top * scalingRatio,
                left: left * scalingRatio,
                zIndex: zIndex,
                creState: "psd",
                opacity,
              },
              needProps: {
                imageSrc: imageSrc,
              },
            });
          }, 2);
        }
      });
      NProgress.done();
    },
    /**
     * 快捷键操作
     */
    SaveData(e) {
      //快捷键保存
      this.saveFn();
      e.preventDefault();
    },
    Undo() {
      //撤回上一步
      this.$store.dispatch("editorUndo");
    },
    Redo() {
      //重做
      this.$store.dispatch("editorRedo");
    },
    DeleteElement() {
      //删除组件
      this.$store.dispatch("elementCommand", "delete");
    },
    Narrow(e) {
      //缩小画布
      // this.$emit('update:scale', this.canvasConfig.scale)
      this.updateScale("reduce");
      e.preventDefault();
    },
    Enlarge(e) {
      //放大画布
      this.updateScale("plus");
      e.preventDefault();
    },
    updateScale(type, value) {
      if (type === "plus") {
        this.canvasConfig.scale =
          this.canvasConfig.scale + (value || 0.1) > 2
            ? 2
            : this.canvasConfig.scale + (value || 0.1);
      } else if (type === "reduce") {
        this.canvasConfig.scale =
          this.canvasConfig.scale - (value || 0.1) > 0.5
            ? this.canvasConfig.scale - (value || 0.1)
            : 0.5;
      } else if (type === "reset") {
        this.canvasConfig.scale = value || 1;
      }

      this.$emit("update:scale", this.canvasConfig.scale);
    },
    Copy() {
      //复制
      if (this.activeElementUUID) {
        this.$message.success("复制成功！");
        this.activeEle = this.activeElementUUID;
      } else {
        this.$message.warning("请选择元素后再复制");
      }
    },

    Paste() {
      //粘贴
      if (!this.activeElementUUID)
        this.$store.dispatch("setActiveElementUUID", this.activeEle);
      this.$store.dispatch("elementCommand", "copy");
      //TODO 粘贴到鼠标停留对应位置
      // this.projectData.pages[0].elements[this.projectData.pages[0].elements.length-1].top=800
    },
    Cut(){
      // 剪切
      // this.$store.dispatch("elementCommand", "delete");
    },
    UpperLayer() {
      //移动到上一层
      this.$store.dispatch("elementCommand", "layerUp");
    },
    LowerLayer() {
      //移动到下一层
      this.$store.dispatch("elementCommand", "layerDown");
    },
    LayerTop() {
      //图层置顶
      this.$store.dispatch("elementCommand", "layerTop");
    },
    LayerBottom() {
      //图层置底
      this.$store.dispatch("elementCommand", "layerBottom");
    },
    leftMove(){
      // 左移
      this.activeElement.commonStyle.left--;
    },
    rightMove(){
      // 右移
      this.activeElement.commonStyle.left++;
    },
    upMove(){
      // 上移
      this.activeElement.commonStyle.top--;
    },
    downMove(){
      // 下移
      this.activeElement.commonStyle.top++;
    }
    /**
     * 快捷键操作结束
     */
  },
  mounted () {
    // 自动保存，TODO：这边改成操作一步保存一次感觉会更好，可以减少性能损耗，暂时先这样
    setInterval(() => {
        this.saveFn();//五分钟自动保存一次
      },300000)
  },
  destroy () {
    console.log("页面即将销毁")
  }
};
</script>

<style lang="scss" scoped>
.editor-wrapper {
  display: flex;
  height: 100%;
  position: relative;
  .editor-side-bar {
    width: 60px;
    margin-top: 20px;
    i {
      font-size: 1.3rem;
    }
    .boxshow {
      position: absolute;
      bottom: 50px;
      left: 20px;
      // text-align: center;
      color: #00acee;
      i {
        font-size: 1.5rem;
        width: 100%;
      }
      span {
        font-size: 0.7rem;
      }
    }
  }
  .editor-page-edit-wrapper {
    width: 250px;
    padding: 0 10px;
    position: relative;
  }
  .editor-main {
    flex: 1;
    background: #f0f2f5;
    // background: #ffffff;
    position: relative;
  }
  .el-attr-edit-wrapper {
    width: 380px;
    padding: 0;
  }
}

.control-bar-wrapper {
  position: absolute;
  top: -44px;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1000;
}
</style>
<style lang="scss" scope>
.editor-side-bar {
  .el-tabs__item {
    margin-bottom: 30px;
  }
.el-tabs__item.is-active {
    background: rgba(108, 161, 230, 0.09);
  }
}
#keyboard{
  position: absolute;
  right:80px;
  bottom:50px;
}
.el-attr-edit-wrapper {
  .el-tabs {
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 10px;
  }
  .el-tabs__content {
    height: calc(100% - 55px);
    & > div {
      height: 100%;
    }
    .attr-edit-inner {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
}
.shrink {
  height: 80px;
  width: 30px;
  position: absolute;
  line-height: 80px;
  text-align: center;
  color: #ccc;
  background: #fff;
  pointer-events: auto;
  z-index: 2;
  opacity: 0.8;
  i {
    font-size: 1.1rem;
  }
  &.left {
    top: 60%;
    right: -25px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    &:hover {
      opacity: 1;
      box-shadow: 1px 0px 2px 0 rgba(0, 0, 0, 0.12);
    }
  }
  &.right {
    top: 50%;
    right: 380px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    &:hover {
      opacity: 1;
      box-shadow: -1px 1px 2px 0 rgba(0, 0, 0, 0.12);
    }
  }
}

</style>
<style lang="scss" scope>
.history-panel{
  position: absolute;
  right: 10px;
  top: 30px;
  width: 17%;
  height: 40%;
  overflow-y: scroll;
    /*更改滚动条样式*/
     &::-webkit-scrollbar {
        width: 5px;
        height: 7px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(152, 155, 163, 0.3);
    }
    .el-table__header-wrapper{
      position: fixed;
      z-index: 1;
      width: 10%;
    }
    .el-table__body-wrapper{
      table{
            padding-top:30px
        }

    }

}

  .el-table--scrollable-x .el-table__body-wrapper{
      overflow-x: hidden;
      max-height: 40%;
  }
</style>
