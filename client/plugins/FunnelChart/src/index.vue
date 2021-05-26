<!--test.vue-->
<template>
  <div>
     <ve-funnel :data="chartData"></ve-funnel>
  </div>
</template>

<script>
/**
 * 更多用法
 * https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md
 */
// import VeLine from 'v-charts/lib/line'
	export default {
    name: 'DsFunnel',
    data() {
       return {
         chartData: {
          columns: ['状态', '数值'],
          rows: [
            { '状态': '展示', '数值': 900 },
            { '状态': '访问', '数值': 600 },
            { '状态': '点击', '数值': 300 },
            { '状态': '订单', '数值': 100 }
          ]
        }
        };
      }
	}
</script>

<style lang="scss" scoped>

</style>
