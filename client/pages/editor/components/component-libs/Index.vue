<template>
  <div class="components-libs-wrapper scrollbar-wrapper">
    <p class="page-title text-center">组件库</p>
    <el-scrollbar style="height: 100%;">
      <ul class="scrollbar-wrapper">
        <li v-for="(item, index) in componentsList" :key="index" class="clearfix paddingB30">
          <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item :title="item.title" :name="index">
                <div v-if="item.components && item.components.length">
                <!-- 拖拽组件 -->
                <div class="components-lib-item" v-for="(element,i) in item.components" :key="i"
                    @click="handleClick(element)">
                      <draggable
                        :data=element
                        @dragstart="onSourceDragStart"
                        @dragsend="onSourceDragEnd">
                        <div class="lib-item-img">
                            <div :style="{backgroundImage:'url('+element.img +')' }" style="width: 100px; height: 100px;background-size:cover"></div>
                          </div>
                        <p class="lib-item-title">{{element.title}}</p>
                      </draggable>
                   </div>
                  </div>
                  <div v-else>
                    <p class="gray text-center paddingT20">待完善...</p>
                  </div>
              </el-collapse-item>
            </el-collapse>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
	// import {camelCase} from 'lodash'
	import eleConfig from '../../ele-config'

  import {Draggable} from '@/libs/drag' //拖拽
  import elementEvents from '@/mixins/elementEvents'

  // import {register_components_object} from '@client/plugins/index'
  // window.register_components_object=register_components_object;
  // console.log(register_components_object)

	export default {
    name: "component-libs",
    mixins: [elementEvents],
		data() {
			return {
        activeNames:[0],
				componentsList: eleConfig
			}
    },
    components:{
      Draggable
    },
		methods: {
			/**
			 * 点击事件, 向父组件派发add-element事件，参数： 当前组件对象
			 * @param item
			 */
			handleClick(item) {
        item.creState = 'click'
				let props = this.getComponentProps(item.elName);
				this.$store.dispatch('addElement', {...item, needProps: props})
			},
      onSourceDragStart (params) {
        console.log('被拖动元素监听到拖动开始',params)
      },
      onSourceDragEnd () {
        console.log('被拖动元素监听到拖动结束')
      },
      pauseEvent(e){ //允许img拖拽
      //已做兼容性处理
        if(e.stopPropagation) e.stopPropagation();
        if(e.preventDefault) e.preventDefault();
        e.cancelBubble=true;
        e.returnValue=false;
        return false;
      },
      // 手风琴操作
      handleChange(val) {
        console.log(val);
      }
		}
	}
</script>

<style lang="scss" scoped>
  /deep/.paddingB30{
    padding-bottom: 10px;
  }
  /deep/ .el-collapse{
    border:none;
  }
  .components-libs-wrapper {
    user-select: none;
    height: 100%;
    padding-top: 60px;
    position: relative;
    & ul {
      padding: 10px;
    }
  }

  .page-title {
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
  }

  .components-libs-title {
    margin-bottom: 16px;
  }

  .components-lib-item {
    color: #424242;
    text-align: center;
    width: 100px;
    float: left;
    padding: 6px 0;
    margin: 0px 2px;
    font-size: 12px;
    cursor: pointer;
    transition: All 0.3s ease-in-out;
    &:hover {
      background: #fff;
      color: $primary;
    }
    .lib-item-title {
      color:#767676;
      margin:12px 0px;
      font-weight: bold;
      font-family: Arial, Helvetica, sans-serif;
      background: #f5f5f5;
      padding:8px;
    }
  }
</style>
