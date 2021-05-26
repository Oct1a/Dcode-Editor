/*
 * image 图片库
 **/
import $axios from "@/service/httpServer";

// 获取我的图片列表
export const getMyImages = p => $axios.get('/imageLib/myImages', p);
// 上传图片
export const uploadImage = p => $axios.post('/imageLib/upload', p)
export const uploadCommonImage = p => $axios.post('/imageCommon/upload', p)

// 获取外部图片列表
export const getExternalImages = p => $axios.get('/imageLib/ExternalImages', p)