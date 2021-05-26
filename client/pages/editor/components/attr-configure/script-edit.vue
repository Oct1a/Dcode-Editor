<template>
  <div class="components-script-edit">
    <p class="page-title fontBold">脚本编辑</p>
    <p class="gray paddingL10 fontsize-12">js脚本在编辑模式下无效果</p>
    <div class="paddingT20">
      <el-input type="textarea" :rows="20"
                v-model="projectData.script"
                placeholder="请输入代码"></el-input>
      <!-- <VueDataEditor :content="11" :lang="'sql'" :theme="'chrome'" :height="'500px'" :width="'50%'"></VueDataEditor> -->
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  // import VueDataEditor from 'vue-ace'
  // import 'brace/mode/javascript'
  // import 'brace/theme/chrome'
  export default {
		computed: {
			...mapState({
				projectData: state => state.editor.projectData,
				activePageUUID: state => state.editor.activePageUUID,
				activeElementUUID: state => state.editor.activeElementUUID
			}),
			...mapGetters([
				'currentPageIndex',
				'activeElementIndex',
				'activeElement',
				'activePage'
      ])

    },
    components: {
      // VueDataEditor
    },
	}
</script>

<style scoped>

</style>
