<template>
    <!-- 该组件是展示小组件用，可更改样式  -->
    <div class="sub">
        <div class="detail">
          <img :src="img" draggable="false">
        </div>
      <div class="desc">{{desc}}</div>
    </div>
</template>

<script>
export default {
  props: {
    desc:String,
    img:''
  }
}
</script>
<style lang="less" scoped>
  @bg: #f1f5f9;
  .sub{
    width: 100%;
    border:1px dotted @bg;
    cursor: pointer;
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