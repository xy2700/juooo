import React, { Fragment, Component } from "react";
import {withRouter} from "react-router-dom";
import Swiperss from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from "axios"
import  {HotShow}  from "./hotshow";
import  Observer from "@/Observer";

 class Hot extends Component {
    
    constructor() {
        super()
        this.state = {
            hostList: []
        }
    }
    componentDidMount() {
        
        axios("/apis/home/getHotsRecommendList", {
            params: {
                city_id: JSON.parse(localStorage.getItem("city"))["id"],
                rows: 50,
                version: "5.1.4",
                referer: 2
            }
        }).then(res => {
            var hostList = [...this.state.hostList]
            //console.log(res.data.data.hots_show_list.length)
            if(res.data.data.hots_show_list.length!=0){
                this.setState({ hostList: res.data.data.hots_show_list }, () => {
                    var mySwiper = new Swiperss('.swiper-b', {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    })
                })
            }
           

        })
    }
    render() {
        if(this.state.hostList.length!=0){
            return (
                <Fragment>
                    <HotShow>
                        <div className="hot-title">
                            <h3>热门演出</h3><i className="fa fa-angle-right"></i>
                        </div>
                        <div className="hot-list">
                            <div className="swiper-container swiper-b">
                                <div className="swiper-wrapper">
                                    {
                                        this.state.hostList.map((item, index) => {
                                            return (
                                                <div className="swiper-slide" key={index} onClick={this.goDetails.bind(this,item.schedular_url)}>
                                                    <div>
                                                    <img src={item.pic} alt=""/>
                                                    </div>
                                                    
                                                    <h3>{item.show_name}</h3>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </HotShow>
                </Fragment>
            )
        }else{
            return null
        }
       
    }
    goDetails(item){
        Observer.$emit("test", true)
       var schId=item.slice(item.lastIndexOf("/")+1,item.length)
       this.props.history.push(`/details/${schId}`);
    }
}
export default withRouter(Hot)