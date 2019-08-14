import React, { Fragment, Component, PureComponent } from "react";
import Category from "./categoryStyled.js";
 import {withRouter} from "react-router-dom"
import axios from "axios"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { isArray } from "util";
import  Observer from "@/Observer";
class CategoryWraps extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: [],
            categoryBannerList: {}
        }
    }
    render() {
        if (isArray(this.state.categoryList)) {
            return (
                <Fragment>
                    <Category>
                        {

                            this.state.categoryList.map((item, ind) => {
                             
                                if (item.list.length < 4) return
                                return (
                                   
                                    <div key={ind} className="categoryWraps-box">
                                        <div className="category-box">
                                            <div className="category-title-wrap">
                                                <div className="category-title">
                                                    <h1>{item.title}</h1>
                                                    <i className="fa fa-angle-right"></i>
                                                </div>
                                                <div className="category-centre">
                                                    <div className="bg_c" >
                                                        <a href="javascript:void(0);" onClick={this.goDetails.bind(this,item.list[0].url)}>
                                                            <div className="category-item-top">
                                                                <img src={item.list[0].pic} alt="" />
                                                                <span className="juooo_sponsor"></span>
                                                            </div>
                                                            <div className="category-item-bottom">
                                                                <h2><span>{item.list[0].date}</span>{item.list[0].week}</h2>
                                                                <h3>{item.list[0].schedular_name}</h3>
                                                                <h4>{item.list[0].city_name} | {item.list[0].venue_name}</h4>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="category-bottom">
                                                    <div className="swiper-container category-banner">
                                                        <div className="swiper-wrapper">
                                                            {
                                                                item.list.map((item2, ind2) => {

                                                                    if (ind2 >= 1) {
                                                                        return (
                                                                            <div key={ind2} className="swiper-slide" >
                                                                                <a href="javascript:void(0);" onClick={this.goDetails.bind(this,item2.url)}>
                                                                                    <img src={item2.pic} alt="" />
                                                                                    <h5>{item2.schedular_name}</h5>
                                                                                    <p><span>￥{item2.low_price}</span>起</p>
                                                                                </a>
                                                                            </div>
                                                                        )
                                                                    }



                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Category>
                </Fragment>
            )
        } else {
            return null
        }

    }
    goDetails(item){
        Observer.$emit("test", true)
       var schId=item.slice(item.lastIndexOf("/")+1,item.length)
       this.props.history.push(`/details/${schId}`);
    }
    componentDidMount() {
        
        axios({
            method: 'get',
            url: '/apis/home/getFloorShow',
            params: {
                city_abb: JSON.parse(localStorage.getItem("city"))["Abbreviation"],
                city_id: JSON.parse(localStorage.getItem("city"))["id"],
                version: "5.1.4",
                referer: 2
            }
        }).then(res => {
            
            if (isArray(res.data.data)) {
                var categoryList = [...this.state.categoryList];
                this.setState({
                    categoryList: res.data.data
                }, () => {
                    new Swiper('.category-banner', {
                        slidesPerView: 3
                    });
                })
            }

        });



    }
}


export default withRouter(CategoryWraps) ;
