import { register_components_object } from '@client/plugins/index'
import { camelCase } from 'lodash'
/**
 *  元素点击事件相关方法
 * */
export default {
  methods: {
    /**
     * 链接跳转
     */
    _event_link(eventData) {
      return new Promise((resolve) => {
        if (eventData.url) {
          window.location.href = eventData.url;
        }
        resolve()
      })
    },
    /**
     * 分享
     * @private
     */
    _event_share() {
      return new Promise((resolve) => {
        window.alert('分享')
        resolve()
      })
    },
    /**
     * 表单提交
     * @private
     */
    _event_submitForm() {
      // return new Promise((resolve) => {
      // window.alert('表单提交，待完善...')
      //获歇提交接口
      var apiUrl = eventData.url; //获歇页面表单数据
      var formdata = {};
      page.pages.forEach(function(data) {
        data.elements.forEach(function(item) {
          if (!item.isForm) return;
          var key = item.propsValue.keyName || '';
          formdata[key] = item.value;
        });
      });
      console.log(apiUrl);
      console.log(formdata);

      //   resolve()
      // })
    },

    /**
     * 根据elname获取组件默认props数据
     * @param elName
     */
    getComponentProps(elName) {
      let elComponentData
      for (let key in register_components_object) {
        if (key.toLowerCase() === camelCase(elName).toLowerCase()) {
          elComponentData = register_components_object[key];
          break;
        }
      }
      if (!elComponentData) return {}

      let props = {}
      for (let key in elComponentData.props) {
        props[key] = [Object, Array].includes(elComponentData.props[key].type) ? elComponentData.props[key].default() : elComponentData.props[key].default
      }
      return props;
    },


  }
}