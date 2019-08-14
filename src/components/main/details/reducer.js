
import { fromJS } from "immutable"
import { GET_LIST_DATA, GET_LIST_CITY, GET_LIST_RECOM ,GET_LIST_CARD} from "./actionCreator"
const defaultStore = fromJS({
    listData: {},
    cityList: {},
    recomList:{},
    cardList:[]
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case GET_LIST_DATA:
            return state.update("listData", x => {
                return x.merge(fromJS(action.res));
            });
        case GET_LIST_CITY:
            return state.update("cityList", x => {
                return x.merge(fromJS(action.res))
            })
        case GET_LIST_RECOM:
            return state.update("recomList", x => {
                return x.merge(fromJS(action.res))
            })
            case GET_LIST_CARD:
            return state.update("cardList", x => {
                return x.concat(fromJS(action.res))
            })
    }

    return state;
}