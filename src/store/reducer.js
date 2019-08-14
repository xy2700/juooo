// import {combineReducers} from "redux"
import {combineReducers} from "redux-immutable"
import homeReducer from "@/components/main/homepage/reducer"
import theaterReducer from "@/components/main/theater/reducer"
import detailsReducer from "@/components/main/details/reducer"
export default combineReducers({
    homeReducer,
   theaterReducer,
   detailsReducer
})

// import {combineReducers} from "redux"  他只能返回一js对象类型
//redux给提供了     redux-immutable ,从根把数据类型转成 immutable类型