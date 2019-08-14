import React, { Fragment, Component } from "react";
import axios from "axios"
import { Thrater } from "./thraterStyle"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Observer from "@/Observer";
import _ from "lodash";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theaterList: []
        }
    }
    render() {
        if(this.state.theaterList.length!=0){
        return (
            <Fragment>
                <Thrater>
                    <div className="theater-wrap">
                        <div className="theater-head">
                            <div className="head_nav">
                                <h3>剧院</h3>
                            </div>
                        </div>
                        <div className="theater-body">
                            <div className="wrapper">
                                <div className="content">
                                    <div className="theater-list">
                                        <ul>
                                            {
                                                this.state.theaterList.map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="theater-info-shows">
                                                                <div className="theater-info">
                                                                    <a href="javascript:void(0);" className="theater-pic-name-count">
                                                                        <div className="theater-pic-wrap">
                                                                            <img src={item.pic} alt="" />
                                                                        </div>
                                                                        <div className="theater-name-count-wrap">
                                                                            <p className="theater-name">{item.name}</p>
                                                                            <p className="theater-count">{item.count}场在售演出</p>
                                                                        </div>
                                                                    </a>
                                                                    <a href="javascript:void(0);" className="theater-link">
                                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC" alt="" />
                                                                    </a>
                                                                </div>
                                                                <div className="theater-shows">
                                                                    <div className="theater-show-wrap">
                                                                        <div className="swiper-container">
                                                                            <div className="swiper-wrapper">
                                                                                {
                                                                                    item.show_list.map((item2, index) => (
                                                                                    
                                                                                        <div className="swiper-slide" key={index}>
                                                                                            <div className="theater-show-date">
                                                                                                <p>{item2.show_time}</p>
                                                                                                <span></span>
                                                                                            </div>
                                                                                            <a href="javascript:void(0);" onClick={this.goDetails.bind(this,item2.schedular_url)}>
                                                                                                <img src={item2.pic} alt="" />
                                                                                            </a>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Thrater>


            </Fragment>
        )
    }
    return (
        <Thrater>
        <div className="ico" style={!_.isEmpty(this.props.theaterList)?{display:"none"}:{display:"block"}}><img src="https://res.bestcake.com/images/loading.gif"  />
        </div>
        </Thrater> 
        )
    }
    // https://m.juooo.com/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2
    componentDidMount() {
       
        Observer.$emit("tab","redTab")
        axios({
            method: 'get',
            url: '/apis/RestTheatre/getTheatreList',
            params: {
                page: 1,
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
            this.setState({ theaterList: res.data.data.theatre_list })
            var mySwiper = new Swiper('.swiper-container', {
                // autoplay: 5000,//可选选项，自动滑动
                // 默认水平滑动
                // direction : 'vertical', //垂直
                // 开启惯性
                // freeMode: true,
                // //打开或关闭惯性  false是关闭
                // freeModeMomentum: false,
                // // 分栏
                slidesPerView: 3,
                // //间隔
                spaceBetween: 35,
            })
           
        })
    }
    goDetails(item){
        Observer.$emit("test", true)
     
       var schId=item.slice(item.lastIndexOf("/")+1,item.length)
       this.props.history.push(`/details/${schId}`);
    }
}
