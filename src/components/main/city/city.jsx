import React, { Component, Fragment } from 'react';
import {Header,Body,Anchor,Show } from "./cityStyle";
import axios from "axios";
import Observer from "@/Observer";
import _ from 'lodash';
class City extends Component {
    constructor() {
        super()
        this.state = {  
            htmlone: "",
            cityList: {},
            hotList: [{ id: "0", is_city: "1", Abbreviation: "", name: "全国" }, { id: "1", is_city: "0", Abbreviation: "SZ", name: "深圳" }, { id: "3", is_city: "0", Abbreviation: "GZ", name: "广州" }, { id: "5", is_city: "0", Abbreviation: "BJ", name: "北京" }, { id: "4", is_city: "0", Abbreviationeviation: "SH", name: "上海" }, { id: "6", is_city: "0", Abbreviationeviation: "CD", name: "成都" }, { id: "12", is_city: "0", Abbreviation: "CQ", name: "重庆" }, { id: "36", is_city: "0", Abbreviation: "SJZ", name: "石家庄" }, { id: "10055", is_city: "0", Abbreviation: "LSHU", name: "陵水" }, { id: "17", is_city: "0", Abbreviation: "WH", name: "武汉" }, { id: "10078", is_city: "0", Abbreviation: "LANGFANG", name: "廊坊" }, { id: "14", is_city: "0", Abbreviation: "CS", name: "长沙" }, { id: "54", is_city: "0", Abbreviation: "NJ", name: "南京" }, { id: "11", is_city: "0", Abbreviation: "HZ", name: "杭州" }, { id: "10007", is_city: "0", Abbreviation: "WX", name: "无锡" }, { id: "1001", is_city: "0", Abbreviation: "HF", name: "合肥" }, { id: "25", is_city: "0", Abbreviation: "SZS", name: "苏州" }, { id: "62", is_city: "0", Abbreviation: "QZ", name: "泉州" }, { id: "10070", is_city: "2", Abbreviation: "SX", name: "绍兴" }, { id: "10067", is_city: "2", Abbreviation: "LZ", name: "柳州" }, { id: "15", is_city: "1", Abbreviation: "XG", name: "香港" }, { id: "10017", is_city: "0", Abbreviation: "XZH", name: "徐州" }, { id: "10073", is_city: "0", Abbreviation: "YC", name: "宜昌" }, { id: "10006", is_city: "0", Abbreviation: "JN", name: "济南" }, { id: "41", is_city: "1", Abbreviation: "LB", name: "林波" }, { id: "68", is_city: "0", Abbreviation: "TB", name: "台北" }, { id: "50", is_city: "0", Abbreviation: "TJ", name: "天津" }, { id: "51", is_city: "0", Abbreviation: "XA", name: "西安" }, { id: "52", is_city: "0", Abbreviation: "KM", name: "昆明" }, { id: "53", is_city: "0", Abbreviation: "AM", name: "澳门" }, { id: "56", is_city: "0", Abbreviation: "ZZ", name: "郑州" }, { id: "60", is_city: "1", Abbreviation: "TY", name: "太原" }, { id: "63", is_city: "1", Abbreviation: "XM", name: "厦门" }, { id: "10149", is_city: "1", Abbreviation: "", name: "兴安门" }, { id: "10183", is_city: "1", Abbreviation: "MLXY", name: "马来西亚" }]
        }
      
    }
   
    componentDidMount() {
        axios.post("/apis/index/getCityList").then(res => {
            var cityList = { ...this.state.cityList }
            this.setState({ cityList: res.data.city_list },()=>{
                var item=JSON.parse(localStorage.getItem("city"))
                document.querySelector(".pre").innerText = item.name
            })
        })
    
        
    }
    render() {
        if(!_.isEmpty(this.state.cityList)){
        return (
            <Fragment>
                <Header>
                    <a href=""><i className="fa fa-angle-left fa-2x" ></i></a><div>切换城市</div>
                </Header>
                <Body>
                    <p id="dq">当前城市</p>
                    <div className="precity">
                        <a href="javascript:void(0)" className="pre"></a>
                    </div>
                    <p id="dw">定位城市</p>
                    <div className="loccity">
                        <a href="javascript:void(0)">定位中...</a>
                    </div>
                    <p id="rm">热门城市</p>
                    <div className="hotcity">
                        {
                            this.state.hotList.map((item, index) => {
                                return <a href="javascript:void(0);" cid={item.id} name={item.name} abbr={item.Abbreviation} iscity={item.is_city} key={index} onClick={this.setStorage.bind(this, item)} >{item.name}</a>
                            })
                        }
                    </div>
                    <p>全部城市</p>
                    <div className="allcity">
                        {
                            Object.keys(this.state.cityList).map((key, index) => {
                                return <span key={index}><a href="javascript:void(0);" className="citykey" id={key} >{key}</a><div className="cityclass">
                                    {
                                        this.state.cityList[key].lists.map((item, index) => {
                                            return (<a href="javascript:void(0);" cid={item.id} name={item.name} abbr={item.Abbreviation} iscity={item.is_city} className="citys" onClick={this.setStorage.bind(this, item)} key={index} >{item.name}</a>)
                                        })
                                    }
                                </div></span>
                            })
                        }
                    </div>
                </Body>
                <Anchor>
                    <a href="javascript:void(0)" data-id="dq" onClick={this.anchor.bind(this)}>当前</a>
                    <a href="javascript:void(0)" data-id="dw" onClick={this.anchor.bind(this)}>定位</a>
                    <a href="javascript:void(0)" data-id="rm" onClick={this.anchor.bind(this)}>热门</a>
                    {
                        Object.keys(this.state.cityList).map((key, index) => {
                            return <a href="javascript:void(0)" key={index} data-id={key} onClick={this.anchor.bind(this)}>{key}</a>
                        })
                    }
                </Anchor>
                <Show className="show"></Show>
            </Fragment>
        )
    }
    return (
        <Body>
        <div className="ico" style={!_.isEmpty(this.props.listRecom)?{display:"none"}:{display:"block"}}><img src="https://res.bestcake.com/images/loading.gif"  />
        </div>
        </Body> 
        )
    }
    //跳到指定位置
    anchor(e) {
        var tz = e.target.getAttribute("data-id")
        var wz = document.getElementById(tz).offsetTop
        window.scrollTo(100, wz - 50)
        var show = document.querySelector(".show")
        if (tz == "dq") {
            tz = "当前"
        } else if (tz == "dw") {
            tz = "定位"
        } else if (tz == "rm") {
            tz = "热门"
        }
        show.innerText = tz
        show.style.display = "block"
        setTimeout(() => {
            show.style.display = "none"
        }, 800)
    }

    setStorage(item, e) {
        // console.log(e.target.innerText)
        // console.log(item)
        localStorage.setItem("city", JSON.stringify(item))
        document.querySelector(".precity").childNodes[0].innerText = item.name
        this.props.history.push("/")
    }
}

export default City;
