/**
 * 组件库入口
 * */

import Text from './text'
import Input from './input'
import Image from './image'
import ImageCarousel from './image-carousel'
import RectangleBorder from './rectangle-border'
import CircleBorder from './circle-border'
import Iframe from './iframe'
import Button from './button'
import bgMusic from './bg-music'
import Avatar from './avatar'
import Notice from './notice'
import Tabars from './tabars'
import bdMap from './map'
import Banner from './banner'
import Video from './video'
import PieChart from './PieChart'
import LineChart from './LineChart'
import wordcloud from './WordCloud'
import FunnelChart from './FunnelChart'
import Form_Radio from './radio'
import Form_Checkbox from './checkbox'
import Form_Rate from './rate'
import Form_Stepper from './stepper'
import Qrcode from './qrcode'


// 所有组件列表
const components = [
    Text,
    Input,
    Image,
    ImageCarousel,
    RectangleBorder,
    Iframe,
    Button,
    bgMusic,
    Avatar,
    Notice,
    Tabars,
    bdMap,
    Banner,
    CircleBorder,
    Video,
    PieChart,
    LineChart,
    wordcloud,
    FunnelChart,
    Form_Radio,
    Form_Checkbox,
    Form_Rate,
    Form_Stepper,
    Qrcode
  ]
  // 定义 install 方法，接收 Vue 作为参数
const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
    // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

let register_components_object = {};
components.forEach(item => {
  register_components_object[item.name] = item
})


export {
  Text,
  Input,
  Image,
  ImageCarousel,
  RectangleBorder,
  Iframe,
  Button,
  bgMusic,
  register_components_object,
  Avatar,
  Notice,
  Tabars,
  bdMap,
  Banner,
  CircleBorder,
  Video,
  PieChart,
  LineChart,
  wordcloud,
  FunnelChart,
  Form_Radio,
  Form_Checkbox,
  Form_Rate,
  Form_Stepper,
  Qrcode
}



export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
}