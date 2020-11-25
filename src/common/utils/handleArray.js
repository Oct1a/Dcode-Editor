export default {
  /**
   * 交换数组元素
   * @param arr 操作数据
   * @param index1 当前需要移动的下标
   * @param index2 最终下标
   * @returns {*}
   */
  swapItems(arr, index1, index2) {
    if (index1 <= 0 || index2 >= arr.length - 1) {
      return
    }
    arr[index1] = arr.splice(index2, 1, arr[index1])[0]
    return arr
  },
  // 上移
  upRecord(arr, index) {
    if (index <= 0) {
      return
    }
    this.swapItems(arr, index, index - 1)
  },
  // 下移
  downRecord(arr, index) {
    if (index >= arr.length - 1) {
      return
    }
    this.swapItems(arr, index, index + 1)
  },
  // 置顶
  topRecord(arr, index) {
    if (index <= 0) {
      return
    }
    this.swapItems(arr, index, 0)
  },
  // 置底
  bottomRecord(arr, index) {
    if (index >= arr.length - 1) {
      return
    }
    this.swapItems(arr, index, arr.length)
  },
  // 数组操作
  swapByOperate(arr, index, operateName) {
    switch (operateName) {
      // 上移
      case 'up':
        return this.upRecord(arr, index)
          // 下移
      case 'down':
        return this.downRecord(arr, index)
          // 置顶
      case 'top':
        return this.topRecord(arr, index)
          // 置底
      case 'bottom':
        return this.bottomRecord(arr, index)
      default:
        return null
    }
  }
}