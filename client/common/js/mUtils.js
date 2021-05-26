/**
 * 公共方法
 * */

/**
 * 存储localStorage
 */
export const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getLocalStorage = name => {
  if (!name) return;
  let data = window.localStorage.getItem(name)

  return data ? JSON.parse(data) : undefined;
}

/**
 * 删除localStorage
 */
export const removeLocalStorage = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


export const Cookie = {
  /**
   * 获取Cookie
   * @param name
   * @returns {*}
   */
  get(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split("=");
      if (arr[0] == name) return arr[1];
    }
    return "";
  },

  /**
   * 添加cookie
   * @param name
   * @param value
   * @param expiresHours
   * @param domain
   */
  set(name, value, expiresDays, domain, path) {
    var cookieString = name + "=" + (value ? value : '');
    var date = new Date();
    domain = domain != undefined ? ";domain=" + domain : ''
    date.setTime(date.getTime() + (expiresDays || 1) * 24 * 3600 * 1000);
    cookieString = cookieString + domain + "; path=" + (path || "/") + "; expires=" + date.toGMTString();

    document.cookie = cookieString;
  },

  /**
   * 删除cookie
   * @param name
   */
  remove(name) {
    this.set(name, '', -1);
  }
};

/**
 * base64 转 二进制文件
 * dataURL to blob, ref to https://gist.github.com/fupslot/5015897
 * @param dataURI
 * @returns {Blob}
 */

export function dataURItoBlob(dataURI) {

  var byteString = atob(dataURI.split(',')[1])

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  var ab = new ArrayBuffer(byteString.length)

  var ia = new Uint8Array(ab)

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  var blob = new Blob([ab], { type: mimeString })
  return blob
}