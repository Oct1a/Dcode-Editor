<!--test.vue-->
<template>
  <div class="Ds-map">
    <baidu-map
        :map-click="false"
        :min-zoom="mapLocation.zoom"
        :max-zoom="mapLocation.zoom"
        :center="mapLocation.center"
        :zoom="mapLocation.zoom"
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom"
        @zoomend="syncCenterAndZoom"
        @ready="handler" class="map" :ak="ak">
       <!--显示点  -->
      <!-- <bm-marker :position="{lng:mapLocation.lng, lat:mapLocation.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
        <bm-label :content="mapLocation.content" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
      </bm-marker> -->
      <!-- 显示弹窗信息 -->
    </baidu-map>
    <!-- <template v-else>
      <div>
        <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
          这是另一种显示地理位置方式
        </van-notice-bar>
      </div>
    </template> -->
  </div>
</template>

<script>
/**
 * 更多用法
 * https://dafrok.github.io/vue-baidu-map/#/zh/overlay/marker
 */
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
// import BmLabel from 'vue-baidu-map/components/overlays/Label'
	export default {
    name: 'DsMap',
    components: {
      BaiduMap,
      BmMarker,
      // BmLabel
    },
		props: {
			mapLocation:{
        type:Object,
        default:()=>({
          lng: 118.03394,
          lat: 24.48405,
          zoom:11.5,
          scrolling:'yes',
          type:"map",
          content:"我爱厦门",
          center:"厦门",
        }),
      }
    },
    data() {
      return {
         ak: '6WI7mIYhPtjXH4v7fpiONVpsEGjm7DSC'
      }
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
        this.mapLocation.lng = 118.03394
        this.mapLocation.lat = 24.48405
        this.mapLocation.zoom = 11
      },
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.mapLocation.center.lng = lng
        this.mapLocation.center.lat = lat
        this.mapLocation.zoom = e.target.getZoom()
      }
		}
	}
</script>

<style lang="scss" scoped>
  .map {
    opacity: 0.9;
    height: 550px;
  }
</style>
