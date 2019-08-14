import React, { Fragment, Component } from "react";
import axios from "axios"
import { HotVenueCont } from "./hotvenuestyled"
import Swiper4 from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theatreList: [],
        };
    }
    render() {
    if(JSON.parse(localStorage.getItem("city"))==null )return null
    if ( JSON.parse(localStorage.getItem("city"))["id"]== 0) {
        return (
            <Fragment>
                <HotVenueCont>
                    <div className="venuetitle">
                        <h3>热门场馆</h3><i className="fa fa-angle-right"></i>
                    </div>
                    <div className="swiper-container venueContent" id="box" >
                        <div className="swiper-wrapper" >
                            {
                                this.state.theatreList.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <div className="venueInfo">
                                                <div className="info-img">
                                                    <img src={item.pic} alt="" />
                                                </div>
                                                <div className="info-name">
                                                    <h3>{item.name}</h3>
                                                    <p>{item.count}场在售演出</p>
                                                </div>
                                                <a href=""></a>
                                            </div>
                                            <div className="venuecon">
                                            {
                                                item.show_list.map((item, index) => {
                                                    return (
                                                        <div className="venuetime" key={index}>
                                                            <p>{item.show_time}
                                                                <span></span>
                                                            </p>
                                                            <a href="">
                                                                <img src={item.pic} alt="" />
                                                            </a>
                                                        </div>)
                                                })
                                            }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </HotVenueCont>
            </Fragment >
        )
          } else {
        return null
    }

    }
    componentDidMount() {
        axios({
            method: 'get',
            url: '/apis/home/getHotTheatre',
            params: {
                limit: 6,
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
         
             if (res.data.data.theatre_list.length != 0) {
            this.setState({ theatreList: res.data.data.theatre_list },()=>{
                var mySwiper = new Swiper4 ('.venueContent', {
                   slidesPerView:"auto",
                   paginationClickable:true,
                    spaceBetween:30,
                  })    
            })
            }

        })
    }
}