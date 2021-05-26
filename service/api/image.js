const request = require('request');
const $config = require('../config')
module.exports = app => ({
  /**
   * 获取我的图片列表
   * @returns {Promise<*>}
   */
  async getMyImages() {
    const { ctx, $model } = app;
    let userData = ctx.userData
    let query = { author: userData._id };
    return await $model.image.find(query).select('_id url').exec();
  },
  /**
   * 添加图片
   * @param url
   * @returns {Promise<*>}
   */
  async addImage(url) {
    const { ctx, $model } = app;
    let userData = ctx.userData;
    return await $model.image.create({
      author: userData._id,
      url: url
    });
  },
  /**
   * 获取外部图片
   */
  async getExternalImages() {
    const { ctx } = app;
    let url = 'https://material-api.eqxiu.com/m/material/category/template/list?categoryId=898438&searchCode=94231&sortBy=0&fee=&pageNo=5&pageSize=20'
      // let url = 'https://www.vcg.com/api/common/searchImage?assetFormat%5B%5D=png&phrase=%E4%BA%BA%E7%89%A9&graphicalStyle=6&transform=renwu&isRecommendCreativeFreshData=false'
    var options = {
      url,
      'method': 'GET',
      'headers': {
        'cookie': $config.eqxiuCookie
      }
    };
    return new Promise((resolve, reject) => {
      request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          let arr = JSON.parse(body)
          resolve(arr.obj)
            // resolve(JSON.stringify(arr.list, ['equalw_url', 'url800', 'width', 'height']))
        } else {
          reject(error)
        }
      })
    })
  }
})