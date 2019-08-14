import axios from "axios"
export const GET_LIST_DATA = "home/get_list_data";
export const loadListData = (res) => {
  return {
    type: GET_LIST_DATA,
    res
  }
}
export const loadListDataAsyanc = (dispatch) => {

  return () => {
    axios({
      method: 'get',
      url: '/apis/home/getRecommendShow',
      data: {
        cityAdd: "",
        page: "2",
        version: "5.1.4",
        referer: "2"
      }
    }).then((res) => {
      //  数据就变成了可以触发事件监听类型 
      dispatch(loadListData(res.data.data.recommend_show_list))
    })
  }
}

// 轮播图
// export const SWIPER_LIST_DATA = "home";
// export const swiperListData = (res) => {
//   return {
//     type: SWIPER_LIST_DATA,
//     res
//   }
// }
// export const swiperimgList = (dispatch) => {
//   return () => {
//     var ct = JSON.parse(localStorage.getItem("city"))
//     axios({
//       method: 'get',
//       url: '/apis/home/getSildeList',
//       params: {
//         abbreviation: ct,
//         limit: "",
//         version: "5.1.4",
//         referer: 2
//       }
//     }).then(res => {
//       console.log(res)
//       dispatch(swiperListData(res.data.data.silde_list))
//     })

//   }
// }




