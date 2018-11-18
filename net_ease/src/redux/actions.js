import {
  reqBanner,
  reqHomeData,
  reqKnowData,
  reqClassifyData
} from "../api";
import {
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_KNOWDATA,
  RECEIVE_CLASSIFYDATA
} from "./action-types";

const receiveBanner = (bannerList) => ({type: RECEIVE_BANNER, data: bannerList})
const receiveHomeData = (homeData) => ({type: RECEIVE_HOMEDATA, data: homeData})
const receiveClassifyData = (classifyData) => ({type: RECEIVE_CLASSIFYDATA, data: classifyData})
const receiveKnowData = (knowData) => ({type: RECEIVE_KNOWDATA, data: knowData})

export const getBanner = () => {
  return async dispatch => {
    const result = await reqBanner()
    if(result.code === 0){
      const bannerList = result.focusList
      dispatch(receiveBanner(bannerList))
    }
  }
}
export const getHomeData = () => {
  return async dispatch => {
    const result = await reqHomeData()
    if(result.code === 0){
      const homeData = result.home
      dispatch(receiveHomeData(homeData))
    }
  }
}
export const getClassifyData = () => {
  return async dispatch => {
    const result = await reqClassifyData()
    if(result.code === 0){
      const classifyData = result.nav
      dispatch(receiveClassifyData(classifyData))
    }
  }
}
export const getKnowData = () => {
  return async dispatch => {
    const result = await reqKnowData()
    if(result.code === 0){
      const knowData = result.detail
      dispatch(receiveKnowData(knowData))
    }
  }
}