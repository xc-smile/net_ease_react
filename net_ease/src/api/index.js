import ajax from './ajax'

//请求轮播图
export const reqBanner = () => ajax('/banner')
//请求主页数据
export const reqHomeData = () => ajax('/home')
//请求识物数据
export const reqKnowData = () => ajax('/detail')
//请求分类数据
export const reqClassifyData = () => ajax('/nav')
