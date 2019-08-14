import React, { Fragment, Component } from "react";
import axios from "axios"
import { HotTourcont } from "./hottourstyled"
import Swiper3 from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tourshowList: [],
        };
    }
    render() {
        if (this.state.tourshowList.length != 0) {
            return (
                <Fragment>
                    <HotTourcont>
                    <div className="tourtitle">
                    <h3>巡回演出</h3><i className="fa fa-angle-right"></i>
                    </div>
                    <div className="swiper-container swiper-container-horizontal swiper-container-3d swiper-container-coverflow swiper-3d" style={{cursor: "grab"}}>
                        <div className="swiper-wrapper" style={{transform: "translate3d(-510px, 0px, 0px)", transitionDuration: "0ms"}}>
                        {
                            this.state.tourshowList.map((item,index)=>{
                                return <div className="swiper-slide" style={{ backgroundImage: " url()", transform: "translate3d(0px, 0px, -300px) rotateX(0deg) rotateY(150deg)", zIndex: " -2", transitionDuration: "0ms" }} key={index}>
                                <a href="">
                                    <div className="itemimg">
                                    <img src={item.pic} alt=""/>
                                    </div>
                                    <h3>{item.show_name}</h3>
                                    <p>{item.schedular_num}场巡演</p>
                                </a>
                            </div>
                            })
                        } 
                        </div>
                    </div>
                    </HotTourcont>
                </Fragment>
            )
        } else {
            return null
        }

    }
    componentDidMount() {
        
        axios({
            method: 'get',
            url: '/apis/home/getTourRecommendList',
            params: {
                city_id: JSON.parse(localStorage.getItem("city"))["id"],
                rows: 6,
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
            if (res.data.data.tour_show_list.length != 0) {
                this.setState({ tourshowList: res.data.data.tour_show_list }, () => {
                    var swiper = new Swiper3('.swiper-3d', {
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 'auto',
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows : true
                        }
                    });
                })
            }

        })
    }
}