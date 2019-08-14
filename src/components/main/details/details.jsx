import React, { Fragment, Component, PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { detailListDataAsyanc,detailListDataCart } from "./actionCreator";
import { DetailsCont } from "./detailsStyled"
import Swiper3 from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { RecommendWrap } from "../homepage/recommend/recommendStyle";
import _ from 'lodash';
import Observer from "@/Observer";
import $ from "jquery";


class Detail extends PureComponent {
    constructor() {
        super()
        this.state = {
            cls: 0
        }
    }
    render() {

        if (!_.isEmpty(this.props.listData) && !_.isEmpty(this.props.listCity) && !_.isEmpty(this.props.listRecom)) {
            return (
                <Fragment>
                    <DetailsCont>
                        <div className="detail_brief">
                            <div className="brief_pri">
                                <img src={this.props.listData.scheInfo.pic} alt="" />
                                <div className="brief_mask"></div>
                                <div className="brief_fg">
                                    <div className="fg_title">
                                        <i className="fa fa-angle-left" onClick={this.goback.bind(this)}></i>
                                        <span>演出详情</span>
                                        <i className="fa fa-home" onClick={this.gohome.bind(this)}></i>
                                        <i className="fa fa-heart" onClick={this.shouchan.bind(this)}></i>

                                    </div>
                                    <div className="fg_content">
                                        <div className="cont_img">
                                            <img src={this.props.listData.scheInfo.pic} alt="" />
                                        </div>
                                        <div className="cont_info">
                                            <div className="info_name">
                                                {this.props.listData.scheInfo.schedular_name}
                                            </div>
                                            <div className="info_tag">

                                            </div>
                                            <div className="info_price">
                                                <span>
                                                    ￥{this.props.listData.scheInfo.price_interval}

                                                </span>
                                                <i></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="brief_sec">
                                <div className="sec_info">
                                    <div className="info_poi">
                                        <div className="sinfo_time">
                                            <span>
                                                {
                                                    this.props.listData.scheInfo.time_interval_data.day
                                                }
                                            </span>
                                            <span>
                                                {
                                                    this.props.listData.scheInfo.time_interval_data.hour || this.props.listData.scheInfo.time_interval_data.date
                                                }
                                            </span>
                                            <span>
                                                {
                                                    
                                                }
                                            </span>
                                        </div>
                                        <div className="info_place">
                                            {this.props.listData.scheInfo.city_name} | {
                                                this.props.listData.scheInfo.venue_name
                                            }
                                        </div>
                                    </div>
                                    <div className="info_pon" onClick={this.goPostion.bind(this)}>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail_tips">
                            <div className="bis_tips">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAcCAMAAACDFrsfAAAAbFBMVEUAAAA6ODdFQ0FFQ0FFQ0FFQ0EsKiksKiksKiksKiksKilFQ0FFQ0FFQ0H13qnQvZK8q4Xs1qPjzp5mYFOCeGPZxZimmHibjnFWUkqxon/GtIx1bFtNSkWPg2rgy5wsKinKuI/Ar4lvaFpfWVBK1qJ1AAAADXRSTlMAB/XJbtD11aBeKRvRN2x4+gAAAe9JREFUSMft1OmumzAQhmGynL3fjMcLNlu2c//3WA8BdNLSUlSJX+dVolgo0iPjgaIo3rBxb0Xu/Rkb9/xeFLuXMzbu/LIrXs/bs+fXIoeNy+Q3+1tskMqybBjcrDXI/xMbaSg+sI5ZYhAG4Eut09X4n3HR6dWSufYr2Yammi9stpKgE9Q1DIlGHsaib1owoxFhDsQT2xf/zrYnotNF8vdEpxZ9lnKdFQMECZPBMsuGHvQU1+y2osyiI4MrUYU+56R2MJLvbEVxMjpKc6w10EK9hiWt9fTpKYfBJZuCRM5FqhbYWsbDqVmjwH1xabf0eatam3+r6aLlKqHPu8FIwWKORSCpm5UsTOZuKSlvMGSDsZHH2RhGisTPs0hllst1k9xeiTxuGbi2uFcyG6/TnLPK6ilHB8yzfSWZkQ3NIqvuhS7liegyqkm8kly7XGZHY461phEPrbIjy8RuiVWXKcctxiooW0vfPNvdH3JHEVL9wvqU4bTAqhuIgqpjPZuCB0qDR9b1JVib3cZK9kiPNcrXB8gFXmRVCAmPrBoBkO6Rnd6jLlAuOKirmTUjNZ+ytQj1n4j5km76nnPK/z9bRbixhHWx+xO7x6btB/aATTsM7BGbdhzY3RM27MeuGPrY0H36KKZ2x8Mmc7U/HO97/QlTd6w9nye0eAAAAABJRU5ErkJggg==" alt="" />
                                <div className="tips_info">
                                    <span>
                                        开卡送￥{this.props.listData.pre.card_plus.buy_return_money}&emsp;
                                     最高可省￥{this.props.listData.pre.card_plus.card_save_max_price}</span>
                                    {this.props.listData.pre.card_plus.card_text}<i className="fa fa-angle-right"></i>

                                </div>
                            </div>
                        </div>
                        {
                            this.props.listCard.length!=0?(
                                <div className="detail_dis">
                                <div className="dis_cont">
                                <span>{this.props.listCard[0].card_name}</span>
                                <span>1:1起兑换<i className="fa fa-angle-right"></i></span>
                                </div>
                            </div>
                            ):("")
                            
                        }
                        
                        <div className="detail_scount">
                            <div className="scount_cont">


                                <div className="scount_item">
                                    <span>
                                        入场：
                                        </span><span>
                                        {
                                            this.props.listData.scheInfo.tips
                                        }
                                    </span>
                                </div>
                                <div className="scount_sup">
                                    <span>
                                        支持：
                                        </span>
                                    <span className="zc">
                                        {
                                            this.props.listData.supportType.map((item, index) => {
                                                return (
                                                    <span key={index}>
                                                        {item}
                                                    </span>
                                                )
                                            })
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="detail_city">
                            <div className="city_title">
                                <h3>巡演城市</h3><span><b>{this.props.listCity.showtotal}</b>场<i className="fa fa-angle-right"></i></span>
                            </div>
                            <div className="city_info">
                                <div className="info_list">
                                    {
                                        this.props.listCity.tourlist.map((item, index) => {
                                            return (
                                                <div key={index} className={this.props.listData.scheInfo.id == item.id ? "select" : item.active_state==0?"forbidden":""} onClick={this.tourCity.bind(this, item.id)} >
                                                    <span>
                                                        {item.city_name}
                                                    </span>
                                                    <span>
                                                        {
                                                            item.date
                                                        }
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={"detail_introduce"} style={this.state.cls==1?{height:"auto"}:{overflow:"hidden"}}>
                            <div className="intro_title">
                                演出介绍
                            </div>
                            <div className="intro_cont" dangerouslySetInnerHTML={{ __html: this.props.listData.scheInfo.schedular_desc }} >

                            </div>
                            <div className="intro_mask" onClick={this.allintro.bind(this)} style={this.state.cls==1?{display:"none"}:{display:"block"}}>
                                展示全部
                            </div>
                            <div className="intro_more"  style={this.state.cls==1?{display:"none"}:{display:"block"}}>

                            </div>
                        </div>
                        <div className="detail_warn" onClick={this.Shows.bind(this)}>
                            <div className="warn_title">
                                <h3>温馨提醒</h3> <i className="fa fa-angle-right"></i>
                            </div>
                            <div className="warn_cont">
                                {
                                    this.props.listData.notice.map((item, index) => {
                                        return (
                                            <span className="cont_list" key={index}>
                                                <span className="list_dian"></span>
                                                <span>        {item.title}
                                                </span>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <RecommendWrap className="detail_recom">
                            <div className="title-wrap">
                                <h3>为你推荐</h3>
                            </div>
                            <div className="recommend-list">
                                <ul>
                                    {
                                        this.props.listRecom.list.map((item, index) => {
                                            if (item.schedular_id == this.props.listData.scheInfo.id) return
                                            return (
                                                <li key={index}>
                                                    <div className="show-icon">
                                                        <a href="javascript:void(0);">
                                                            <img src={item.pic} alt="" />
                                                        </a>
                                                        <div className="juooo_sponsor">
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                    <div className="item-desc">
                                                        <p className="show-date">
                                                            <strong>{item.show_time_top}</strong>
                                                            {item.show_time_bottom}
                                                        </p>
                                                        <a href="javascript:void(0);">
                                                            <h3>{item.name}</h3>
                                                        </a>
                                                        <p className="venue">{item.city_name} | {item.venue_name}</p>
                                                        <p className="price">
                                                            <strong>{item.min_price}</strong>
                                                            起
                                                    </p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </RecommendWrap>
                        <div className="detail_bottom">
                            <div className="bottom_kf">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" alt="" />
                                <div>
                                    客服
                                    </div>
                            </div>
                            <div className="bottom_mai">
                                选座购买
                            </div>
                        </div>
                        <div className="zhezhao">
                            <div className="zhezhao-cont">
                                <div className="zcont-title">
                                    <h3>温馨提醒</h3> <i className="fa fa-times" onClick={this.Hide.bind(this)}></i>
                                </div>
                                    {
                                        this.props.listData.notice.map((item,index)=>{
                                            return (
                                                <div className="zcont-neiron" key={index}>
                                                    <div className="neron-head">
                                                        <span></span>{item.title}
                                                    </div>
                                                    <div className="neron-info">
                                                    {item.desc}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </DetailsCont>
                </Fragment>
            )

        }
        return (
        <DetailsCont>
        <div className="ico" style={!_.isEmpty(this.props.listRecom)?{display:"none"}:{display:"block"}}><img src="https://res.bestcake.com/images/loading.gif"  />
        </div>
        </DetailsCont> 
        )
    }
    Shows(){
        $(".zhezhao").animate({zIndex:20,opacity:1})
        $(".zhezhao-cont").animate({bottom:"0rem"})
    }
    Hide(){
        $(".zhezhao").animate({zIndex:-1,opacity:0})
        $(".zhezhao-cont").animate({bottom:"-12rem"})
    }
    gohome(){
        this.props.history.push("/")
    }
    shouchan(){

    }
    componentDidMount() {
        Observer.$emit("test",true)
        var schid = this.props.match.params.schid
        this.props.handleTest(schid)
        this.props.handleCard(schid)
    }
    //演出介绍
    allintro() {
        this.setState({ cls: 1 })
    }
    //返回
    goback() {
        Observer.$emit("test",false)
        this.props.history.goBack()

    }
    //巡演城市跳转
    tourCity(schid,e) {
        if(e.currentTarget.className=="forbidden")return
        this.props.history.push(`/details/${schid}`);
        window.location.reload()
    }
    goPostion(){
        this.props.history.push(`/position/${this.props.listData.scheInfo.venue_id}`)
    }
    
}
//数据
const mapStateToProps = (store) => {
    return {
        listData: store.getIn(["detailsReducer", "listData"]).toJS(),
        listCity: store.getIn(["detailsReducer", "cityList"]).toJS(),
        listRecom: store.getIn(["detailsReducer", "recomList"]).toJS(),
        listCard: store.getIn(["detailsReducer", "cardList"]).toJS()
    }
}
//方法
const mapDispathToProps = (dispatch) => ({
    handleTest(schid) {
        dispatch(detailListDataAsyanc(dispatch, schid))
    },
    handleCard(schid){
        dispatch(detailListDataCart(dispatch, schid))
    }

})

export default connect(mapStateToProps, mapDispathToProps)(Detail);