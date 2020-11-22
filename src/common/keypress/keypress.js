import keyCode from './keycode';
const getKeyMap = (keymap) => Object.keys(keymap).map((input) => {
  const result = { callback: () => { console.log(11); } };
  input.split('.').forEach((keyName) => {
    switch (keyName.toLowerCase()) {
      case 'ctrl':
      case 'alt':
      case 'shift':
      case 'meta':
        result[keyName] = true;
        break;
      default:
        result.keyCode = keyCode(keyName);
    }
  });
  result.callback = keymap[input];
  return result;
});
export default {
  install(Vue) {
    Vue.directive('hotkey', {
      bind(el, binding) {
        const _keymap = getKeyMap(binding.value);
        el._keyHandler = (e) => {
          for (const hotkey of _keymap) {
            hotkey.keyCode === e.keyCode &&
              !!hotkey.ctrl === e.ctrlKey &&
              !!hotkey.alt === e.altKey &&
              !!hotkey.shift === e.shiftKey &&
              !!hotkey.meta === e.metaKey &&
              hotkey.callback(e);
          }
        };
        document.addEventListener('keydown', el._keyHandler);
      },
      unbind(el) {
        document.removeEventListener('keydown', el._keyHandler);
      }
    });
  }
};