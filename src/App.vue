<template>
  <div id="app" v-hotkey="hot">
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
      save (e) {
        alert('alt+s')
        e.preventDefault();
      },

      ctrlX () {
        alert('ctrl+x')
      },

      ctrlC () {
        alert('ctrl+c')
      },

      ctrlV () {
        alert('ctrl+v')
      },
      enlarge(e){ //放大
        console.log('画布放大');
        this.$store.commit('canvas_Size_change','enlarge')
        console.log(this.$store.state.canvaSize);

        e.preventDefault();
      },
      narrow(e){ //缩小
        console.log('画布放大');
        this.$store.commit('canvas_Size_change','narrow')
        e.preventDefault();
      //  function bodyScale() {
      //     var devicewidth = document.documentElement.clientWidth;
      //     var scale = devicewidth / 1440;  // 分母——设计稿的尺寸
      //     document.body.style.zoom = scale;
      // }
      // window.onload = window.onresize = function () {
      //     bodyScale();
      // };

      },

  },
  computed: {
    hot(){
      return {
        'ctrl.s': this.save,
        'ctrl.x': this.ctrlX,
        'ctrl.c': this.ctrlC,
        'ctrl.v': this.ctrlV,
        'ctrl.-': this.narrow,
        'ctrl.=': this.enlarge
      }
    }
  }

}
</script>

<style>
@import 'assets/css/base.css';
</style>
