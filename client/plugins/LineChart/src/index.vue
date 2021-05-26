<!--test.vue-->
<template>
  <div>
     <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
/**
 * 更多用法
 * https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md
 */
import VeLine from 'v-charts/lib/line'
	export default {
    name: 'DsLinechart',
    components: {
      VeLine
    },
    created () {
      this.chartData = {
        columns: ['日期', '销售量'],
        rows: [
          { '日期': '1月1日', '销售量': 123 },
          { '日期': '1月2日', '销售量': 1223 },
          { '日期': '1月3日', '销售量': 2123 },
          { '日期': '1月4日', '销售量': 4123 },
          { '日期': '1月5日', '销售量': 3123 },
          { '日期': '1月6日', '销售量': 7123 }
        ]
      }
  },
    data() {
       return {
         chartData:{},
          option: {
            title: {
              text: "Traffic Sources",
              left: "center"
            },
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: "vertical",
              left: "left",
              data: [
                "Direct",
                "Email",
                "Ad Networks",
                "Video Ads",
                "Search Engines"
              ]
            },
            series: [
              {
                name: "Traffic Sources",
                type: "pie",
                radius: "55%",
                center: ["50%", "60%"],
                data: [
                  { value: 335, name: "Direct" },
                  { value: 310, name: "Email" },
                  { value: 234, name: "Ad Networks" },
                  { value: 135, name: "Video Ads" },
                  { value: 1548, name: "Search Engines" }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          }
        };
      }
	}
</script>

<style lang="scss" scoped>

</style>
