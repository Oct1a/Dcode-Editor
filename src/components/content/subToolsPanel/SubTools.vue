<template>
    <!-- 该组件是传递小组件  -->
    <div class="sub">
        <div class="detail">
          <img src="http://placehold.it/150x150/ff3333/ffffff" draggable="false">
        </div>
      <div class="desc">轮播图组件</div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
  @bg: #f1f5f9;
  .sub{
    width: 100%;
    border:1px dotted @bg;
    .detail{
      overflow: hidden;
      border-radius: 5px;
      img{
        width: 100%;
      }
    }
    .desc{
      background: @bg;
      text-align: center;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      line-height: 30px;
      font-size: 14px;
      color: rgba(0, 0, 0, .6);
    }
  }
</style>