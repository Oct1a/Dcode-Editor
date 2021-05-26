<template>
  <div class="components-default-style">
    <div>
      <img class="default-style-img" src="../common/images/nodata.jpg" alt=""  :style="{width: width, height: height}" />
      <p class="tips">暂无数据</p>
    </div>
  </div>
</template>

<script>
	export default {
		name: "notFundData",
		props: {
			width: {
				type: String,
				default: '80%'
			},
			height: {
				type: String,
				default: '80%'
			}
		},
	}
</script>

<style lang="scss" scoped>
  .components-default-style {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    & > div {
      display: inline-block;
    }
    .default-style-img {
      display: inline-block;
    }
    .tips{
      margin-top: 30px;
      color:gray;
    }
  }
</style>
