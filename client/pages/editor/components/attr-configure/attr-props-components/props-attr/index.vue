<template>

  <div v-if="currentElementProps.length">
    <div class="attr-title marginB10 fontBold">组件属性</div>
    <el-form>
      <component
              v-for="item in currentElementProps"
              :key="item" :is="'attr-' + item"
              v-bind.sync="activeElement.propsValue"
      />
    </el-form>
  </div>
</template>

<script>
	import attrComponents from './index.js'
	import {mapState, mapGetters} from 'vuex'

	export default {
		components: {
			...attrComponents
		},
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
			]),
			/**
       * 当前选中元素需要编辑得props 列表
			 */
			currentElementProps(){
				if(!this.activeElement.propsValue){
					return []
        }
        // console.log(this.activeElement.propsValue)
        let keyList = Object.keys(this.activeElement.propsValue);
        console.log("keyList",keyList)
        console.log("attrComponents",attrComponents)
				let editPropsComponentNameList = Object.keys(attrComponents)
				// 过滤掉找不到对应attr props编辑组件的key
        console.log(editPropsComponentNameList)
				keyList = keyList.filter(v => {
					return editPropsComponentNameList.includes('attr-' + v)
        })
        // this.activeElement.elName.split('Ds')[1]
        // console.log("attrComponents",attrComponents)
        // console.log(keyList)
				return keyList
      }
		},
	}
</script>

<style scoped>

</style>
