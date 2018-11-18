import {combineReducers} from 'redux'
import {
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_KNOWDATA,
  RECEIVE_CLASSIFYDATA
} from "./action-types";

const initState = {
  bannerList: [],
  homeData: {},
  knowData: {},
  classifyData: [],
}


function data(state = initState, action) {
  switch (action.type){
    case RECEIVE_BANNER :
      return {...state, bannerList: action.data}
    case RECEIVE_HOMEDATA :
      return {...state, homeData: action.data}
    case RECEIVE_CLASSIFYDATA :
      return {...state, classifyData: action.data}
    case RECEIVE_KNOWDATA :
      return {...state, knowData: action.data}
    default :
      return state
  }
}
export default combineReducers({data})
