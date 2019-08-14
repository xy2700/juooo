import React,{Fragment,Component} from "react";
import My from "./meStyle"
// import {NavLink} from "react-router-dom";
import Observer from "../../../Observer";


class my extends Component{
    constructor(){
        super()
        this.state={
            user:JSON.parse(localStorage.getItem("user"))
        }
    }
    render(){
        return (
            <Fragment>
                <My>
                    <div className="pages">
                        {/*头部*/}
                        <div className="head">
                            <div className="head-top">
                                <div  onClick={this.goOutLogin.bind(this)}>
                                    <div className="head-img">
                                        <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" alt=""/>
                                    </div>
                                    <div>
                                        <p>{this.state.user.username}</p>
                                        <p className="id">ID : <span>XXXX</span></p>
                                    </div>
                                    <div >
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="head-buttom plus">
                                <div>
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/icon-cardLogo.png" alt=""/>
                                    <p>开通橙PLUS卡，限时送100元</p>
                                </div>
                                <div>
                                    <span>尊享多项特权</span>
                                </div>
                                <img className="flash flash-cartoon" src="https://m.juooo.com/public/basic//Home/app/app-juooo4/images/index/icon_cardLine.png" alt=""/>
                            </div>
                        </div>

                        {/*分类数据*/}
                        <div className="category-wrap">
                            <ul>
                                <li className="wrap1">
                                    <p className="warp-p"><span>XXX</span>元</p>
                                    <p>余额</p>
                                </li>
                                <li className="wrap2">
                                    <p className="warp-p"><span>X</span>分</p>
                                    <p>积分</p>
                                </li>
                                <li className="wrap3">
                                    <p className="warp-p"><span>X</span>张</p>
                                    <p>优惠卷</p>
                                </li>
                            </ul>
                        </div>

                        {/*列表*/}
                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-file-o"></i>
                                我的订单
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>

                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-tags"></i>
                                电子票夹
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>

                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-credit-card"></i>
                                我的卡包
                                <p>了解详情</p>
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>

                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-star-o"></i>
                                我的关注
                                <span className="fa fa-angle-right"></span>
                            </a>
                            <a  href="javascript:void(0);">
                                <i className="fa fa-map-marker"></i>
                                收货地址
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>

                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-envelope-o"></i>
                                我的消息
                                <span className="fa fa-angle-right"></span>
                            </a>
                            <a  href="javascript:void(0);">
                                <i className="fa fa-edit"></i>
                                意见反馈
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>

                        <div className="list">
                            <a  href="javascript:void(0);">
                                <i className="fa fa-phone"></i>
                                联系电话
                                <span className="fa fa-angle-right"></span>
                            </a>
                        </div>
                        <div className="service">
                            <div>
                                <i className="fa fa-phone"></i>
                                <span>在线客服</span>
                            </div>
                        </div>
                    </div>
                </My>
            </Fragment>
        )
    }
    goOutLogin() {
        Observer.$emit("test", true);
        
        this.props.history.push('/outLogin');
    }
    componentDidMount(){
        Observer.$emit("tab","yellowTab")
    }
}


export default my;
