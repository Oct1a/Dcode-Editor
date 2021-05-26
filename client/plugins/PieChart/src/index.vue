<!--test.vue-->
<template>
  <div>
     <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
/**
 * 更多用法
 * https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md
 */
// import VeLine from 'v-charts/lib/line'
	export default {
    name: 'DsPiechart',
    data() {
       return {
         chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        }
        };
      }
	}
</script>

<style lang="scss" scoped>

</style>
