<template>
      <div>
        <el-form-item label="地理位置">
          <el-input v-model="mapLocationTemp.center" placeholder="请输入定位的位置"></el-input>
        </el-form-item>
        <el-form-item label="标注文字">
          <el-input v-model="mapLocationTemp.content" placeholder="请输入标注内容"></el-input>
        </el-form-item>
        <el-form-item label="缩放层级">
          <el-input-number v-model="mapLocationTemp.zoom" :precision="2" :step="0.1" :max="15"></el-input-number>
        </el-form-item>
         <baidu-map
              :center="mapLocationTemp.center"
              :zoom="mapLocationTemp.zoom"
              @dragend="dragend"
              @ready="handler"
              class="map"
              @moving="syncCenterAndZoom"
              @moveend="syncCenterAndZoom"
              @zoomend="syncCenterAndZoom"
              :ak="ak">
        <!-- 控件将定位到地图的右上角 -->
          <!-- <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> -->
          <!-- 平移缩放组件 -->
          <!-- <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation> -->
          <!-- 缩略图 -->
          <!-- <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map> -->
          <!-- 定位 -->
          <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" :showAddressBar="true" -->
                          <!-- :autoLocation="true"></bm-geolocation> -->
          <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" -->
                        <!-- anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> -->
          <!-- <bm-marker style="width:100px;" :position="mapCenter"  :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
          </bm-marker> -->
      </baidu-map>
      </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmLabel from 'vue-baidu-map/components/overlays/Label'
	export default {
    name: "attr-mapLocation",
    components: {
      BaiduMap,
      BmMarker,
      BmLabel
    },
		props: {
			mapLocation: Object
		},
		data() {
			return {
        ak: '6WI7mIYhPtjXH4v7fpiONVpsEGjm7DSC',
        mapLocationTemp:Object
			}
    },
    created(){
      this.mapLocationTemp = this.mapLocation;
    },
    methods: {
      // 百度地图
      handler ({
        BMap,
        map
      }) {
        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
        this.pt = new BMap.Point(116.117, 39.909)
        // 中心点
        this.mapLocationTemp.lng = 118.03394
        this.mapLocationTemp.lat = 24.48405
        this.mapLocationTemp.zoom = 11
      },
      dragend(type, target, pixel, point){
        console.log("地图拖拽结束")
        console.log(type, target, pixel, point)
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      }
		},
		watch: {
      mapLocation(v){
        this.mapLocationTemp.center = v;
      },
			mapLocationTemp() {
        console.log("更改了值")
				this.$emit('update:mapLocation', this.mapLocationTemp)
			}
		}
	}
</script>

<style scoped>
.map {
    opacity: 0.9;
    height: 200px;
  }
</style>
