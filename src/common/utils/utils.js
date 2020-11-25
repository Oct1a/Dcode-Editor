//去掉字符串头尾空格
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 生成组件ID
export const getRandomId = (radix = 10) => Date.now().toString(radix);

// 页面ID
export const getNewPageId = () => getRandomId(32)

// 添加新的组件
export const getNewComp = (name) => {
    const compData = ComponentData[name] && ComponentData[name]()
    if (compData) {
      return {
        ...compData,
        id: getRandomId()
      }
    }
    return null
  }
  // 创建新的页面
export const getNewPage = () => {
  return {
    id: getNewPageId(),
    css: {
      bgc: '', // 背景色
      bgi: '' // 背景图片
    },
    props: {},
    comps: []
  }
}