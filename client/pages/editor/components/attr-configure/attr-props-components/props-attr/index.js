import Text from './text'
import imageSrc from './imageSrc'
import imageSrcList from './imageSrcList'
import Url from './url'
import musicSrc from './musicSrc'
import btnType from './btnType'
import location from './location'
import grid from './grid'
import NoticeBar from './NoticeBar'
import avatar from './avatar'
import Video from './video'

export default {
  [Text.name]: Text,
  [imageSrc.name]: imageSrc,
  [Url.name]: Url,
  [musicSrc.name]: musicSrc,
  [imageSrcList.name]: imageSrcList,
  [btnType.name]: btnType, //类型选择
  [location.name]: location, //地图位置
  [grid.name]: grid, //地图位置
  [NoticeBar.name]: NoticeBar,
  [avatar.name]: avatar,
  [Video.name]: Video,
}