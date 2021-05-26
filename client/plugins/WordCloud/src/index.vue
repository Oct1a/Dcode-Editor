<!--test.vue-->
<template>
  <div>
     <ve-wordcloud :data="chartData"></ve-wordcloud>
  </div>
</template>

<script>
/**
 * 更多用法
 * https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md
 */
// 文字数量需自动生成
	export default {
    name: 'DsWordcloud',
    data() {
       return {
          chartData: {
            columns: ['word', 'count'],
            rows: [{
              'word': 'visualMap',
              'count': 22199
            }, {
              'word': 'continuous',
              'count': 10288
            }]
           }
        };
      }
	}
</script>

<style lang="scss" scoped>

</style>
