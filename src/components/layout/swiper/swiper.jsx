import React, { Fragment, Component } from "react";
import styled from "styled-components";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from "axios"
import SwiperStyle from "./swiperStyled";
class Swipers extends Component {
    constructor(){
       super()
       this.state={
           imgList:[]
       }
    }
    render() {
       if(this.state.imgList.length!=0){
        return (
            <Fragment>
                <SwiperStyle>
                <div className="swiper-container swiper-a">
                    <div className="swiper-wrapper">
                        {
                            this.state.imgList.map((item,index)=>{
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.touch_image_url} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                </SwiperStyle>
            </Fragment>
        )
       }else{
           return (
               <Fragment></Fragment>
           )
       }
        
    }
    componentDidMount(){
        if(JSON.parse(localStorage.getItem("city")==null))return
        axios({
                  method: 'get',
                  url: '/apis/home/getSildeList',
                  params: {
                    abbreviation:JSON.parse(localStorage.getItem("city")).Abbreviation,
                    limit: "",
                    version: "5.1.4",
                    referer: 2
                  }
                }).then(res=>{
                    var imgList=[...this.state.imgList]
                    this.setState({imgList:res.data.data.silde_list},()=>{
                        new Swiper ('.swiper-a',{
                            autoplay:1000,
                            loop:true,
                            pagination : '.swiper-pagination',
                            autoplayDisableOnInteraction : false
                        })
                    })
                })
        
    }
}
export default Swipers
