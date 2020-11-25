import dialogDrag from './dialog-drag';

const util = {
  install(Vue) {
    Vue.directive('el-dialog-drag', dialogDrag);
  }
};

export default util;