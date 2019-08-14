import axios from "axios";

export const GET_LIST_DATA = "home/get_list_data";
export const GET_LIST_CITY = "details/get_list_city";
export const GET_LIST_RECOM = "details/get_list_recom";
export const GET_LIST_CARD= "details/get_list_card";
export const detailListData = (res) => {
  return {
    type: GET_LIST_DATA,
    res
  }
}
export const cityListData = (res) => {
  return {
    type: GET_LIST_CITY,
    res
  }
}
export const recomListData = (res) => {
  return {
    type: GET_LIST_RECOM,
    res
  }
}
export const cardListData = (res) => {
  return {
    type: GET_LIST_CARD,
    res
  }
}
export const detailListDataAsyanc = (dispatch,schid) => {

  return () => {
    axios({
      method: 'get',
      url: '/apis/restTicket/getSchDetail',
      params: {
        sch_id:schid,
        current_url: "https://m.juooo.com/ticket/" + schid,
        version: "5.1.4",
        referer: 2
      }
    }).then((res) => {
      dispatch(detailListData(res.data.data))
      axios({
        method: 'get',
        url: '/apis/restTicket/getTour',
        params: {
          show_id: res.data.data.scheInfo.show_id,
          venue_id: res.data.data.scheInfo.venue_id,
          version: "5.1.4",
          referer: 2
        }
      }).then(res => {
        dispatch(cityListData(res.data.data))
      })
      axios({
        method: 'get',
        url: '/apis/Search/getShowList',
        params: {
          category:res.data.data.scheInfo.cate_parent_id,
          city_id:res.data.data.scheInfo.city_id,
          version: "5.1.4",
          referer: 2
        }
      }).then(res => {
        dispatch(recomListData(res.data.data))
        
      })
    })
  }
}

export const detailListDataCart=(dispatch,schid)=>{
  return () => {
    axios({
      method: 'get',
      url: '/apis/RestTicket/getCardSupport',
      params: {
        sch_id:schid,
        version: "5.1.4",
        referer: 2
      }
    }).then((res) => {
      dispatch(cardListData(res.data.data.card_list))
    })
  }
}



