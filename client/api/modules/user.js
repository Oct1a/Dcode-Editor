/*
	用户相关api
**/
import $axios from "@/service/httpServer";
// 登录
export const login = p => $axios.post('/auth/login', p);
// 注册
export const register = p => $axios.post('/auth/register', p);
// 获取用户信息
export const getUserInfo = () => $axios.get('/user/info');
// 修改用户昵称
export const updateNickName = p => $axios.post('/user/update/name', p);
// 修改密码
export const updateUserPass = p => $axios.post('/user/update/pass', p);
// 修改头像
export const updateUserAvatar = p => $axios.post('/user/update/avatar', p);
// 关键字搜索用户列表
export const getUserListByKeywords = p => $axios.get('/user/getUserList', p);

// 下载JSON文件
export const JsonDownload = p => $axios.get('/tool/jsonload', p)