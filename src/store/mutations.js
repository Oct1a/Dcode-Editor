// import { INCREMENT } from '@/store/mutations-types.js' //引用常量
export default {
  canvas_Size_change: (state, playload) => {
    console.log(state, playload);
    if (playload === 'narrow' && state.canvaSize >= 50) {
      state.canvaSize -= 10;
    }
    if (playload === 'enlarge' && state.canvaSize <= 200) {
      state.canvaSize += 10;
    }
  }
}