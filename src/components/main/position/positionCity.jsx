import React, { Fragment, Component } from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import Observer from "@/Observer";
import { PosCity } from "./positionStyle";
import axios from "axios";
import _ from "lodash";





class Position extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: {}
        }
    }
    render() {
        if(!_.isEmpty(this.state.cityList)){
        return (
            <Fragment>
                <PosCity>
                    <div className="head">
                        <i className="fa fa-angle-left" onClick={this.goback.bind(this)}></i>
                        <span>场馆地址</span>
                        <i className="fa fa-ellipsis-h" onClick={this.home.bind(this)}></i>
                    </div>
                    <div id="container" style={{ height: "100%" }}></div>
                    <div className="info">
                        <div className="info_cont">
                            <div className="cont-img">
                                <img src={" http://image.juooo.com/"+this.state.cityList.list[0].pic} alt="" />
                            </div>
                            <span className="cont-title">
                                <span className="title-name">{this.state.cityList.list[0].venue_name}</span>
                                <span className="title-phone">联系电话：</span>
                                <span className="title-yc">近期演出：<i>{this.state.cityList.totalRows}场</i></span>
                            </span>
                            <span className="cont-right">
                                <i className="fa fa-angle-right"></i>
                            </span>
                        </div>
                    </div>
                    <div className="home" onClick={this.hide.bind(this)}>
                        <div className="home-cont">
                            <ul>
                                <li onClick={this.gohome.bind(this)}><i className="fa fa-home"></i>首页</li>
                                <li  onClick={this.gome.bind(this)}><i className="fa fa-user-o"></i>我的聚橙</li>
                            </ul>
                        </div>
                    </div>
                </PosCity>
            </Fragment>
        )
    }
    return null
    }
    goback() {
        this.props.history.goBack()
        Observer.$emit("test", false)
    }
    componentDidMount() {
        const { BMap, BMAP_STATUS_SUCCESS } = window
        Observer.$emit("test", true)
        axios({
            method: 'post',
            url: '/apis/Venue/getVenueRecentShow',
            params: {
                venueId: this.props.match.params.venueid
            }
        }).then(res => {
            var cityList = { ...this.state.cityList }
            this.setState({ cityList: res.data.data })
            $.ajax({
                url: "http://api.map.baidu.com/geocoder/v2/?address=" + res.data.data.list[0].venue_name + "&output=json&ak=nSxiPohfziUaCuONe4ViUP2N&city="+res.data.data.list[0].city_name,
                dataType: 'jsonp',
                processData: false,
                type: 'get',
                success: function (data) {

                    if (data.status == 0) {
                    
                        
                        var lng = data.result.location.lng;
                        var lat = data.result.location.lat;
                        var map = new BMap.Map("container");
                        // 创建地图实例  
                        var point = new BMap.Point(lng, lat);
                        // 创建点坐标  
                        map.centerAndZoom(point, 18);
                        // 初始化地图，设置中心点坐标和地图级别  
                        map.enableScrollWheelZoom(true);

                        var infoWindow = new BMap.InfoWindow(res.data.data.list[0].venue_name); // 创建信息窗口对象
                        map.openInfoWindow(infoWindow, point);
                        var smarker = new BMap.Marker(point);// 创建标注
                        map.addOverlay(smarker); // 将标注添加到地图中

                        
                        // map.addControl(new BMap.MapTypeControl());
                        // map.addControl(new BMap.CopyrightControl());
                        map.addControl(new BMap.ScaleControl());
                        map.addControl(new BMap.NavigationControl());
                        map.addControl(new BMap.OverviewMapControl());
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(XMLHttpRequest.status);
                    console.log(XMLHttpRequest.readyState);
                    console.log(textStatus);
                    console.log(XMLHttpRequest);
                }
            });
        })


    }
    home(){
       // console.log($(".home"))
        $(".home").show()
    }
    hide(){
        $(".home").hide()
    }
    gohome(){
        this.props.history.push("/")
        Observer.$emit("test", false)
    }
    gome(){
        this.props.history.push("/me")
        Observer.$emit("test", false)
    }

}
export default withRouter(Position)
