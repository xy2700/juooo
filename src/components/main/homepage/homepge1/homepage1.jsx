import React, { Component, Fragment } from 'react';
import axios from "axios";
import { NavCont, Classify, Advert, Operation } from "./homeStyled1";
import { withRouter  } from "react-router-dom";
import Observer from "@/Observer"
class Nav extends Component {
    constructor() {
        super()
        this.state = {
            classifyList: [],
            operationList: [],
            advertList:[],
            cityId:JSON.parse(localStorage.getItem("city"))
        }
    }
    componentDidMount() {
        if(this.state.cityId==null)return
        axios("/apis/home/getClassifyItem", {
            params: {
                city_id:this.state.cityId["id"],
                operation_limit: 5,
                version: " 5.1.4",
                referer: 2,
            }
        }).then(res => {        
            var classifyList = [...this.state.classifyList]      
            var operationList = [...this.state.operationList]
            this.setState({ classifyList: res.data.data.classify_list, operationList: res.data.data.operation_list }, () => {
                // console.log(this.state.operationList)
            })
        })
        axios("/apis/home/getAd", {
            params: {
                city_id: 1,
                version: "5.1.4",
                referer: 2
            }
        }).then(res => {
            var advertList = [...this.state.advertList]
            this.setState({ advertList: res.data.data.advert1 })
        })

    }
    render() {
        return (
            <Fragment>
                <NavCont>
                    <Classify>
                        {
                            this.state.classifyList.map((item, index) => {
                                return (
                                    <div className="clf" key={index}>
                                        <a href="javascript:void(0)">
                                            <img src={item.pic} alt="" onClick={this.toPerform.bind(this,item)} />
                                            <span>{item.name}</span>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </Classify>
                    <Advert>
                        {
                            this.state.advertList.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <a href="">
                                            <img src={item.pic} alt="" />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </Advert>

                    <Operation>
                        <ul className="option-a">
                            {
                                this.state.operationList.map((item, index) => {
                                    if (index < 2) {
                                        return (
                                            <li key={index}>
                                                <a href="">
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                                                    </div>
                                                    <div>
                                                        <img src={item.pic} alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                        <ul className="option-a">
                            {
                                this.state.operationList.map((item, index) => {
                                    if (index >= 2) {
                                        return (
                                            <li key={index}>
                                                <a href="">
                                                    <div>
                                                        <h3>{item.name}</h3>
                                                        <p dangerouslySetInnerHTML={{ __html: item.describe }}></p>
                                                    </div>
                                                    <div>
                                                        <img src={item.pic} alt="" />
                                                    </div>
                                                </a>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </Operation>
                </NavCont>
            </Fragment>
        )
    }
    toPerform(item){
        var cid="";
        var caid="";
        var ww=item.url.slice(item.url.indexOf("?")+1)
        cid=ww.slice(0,ww.indexOf("&"))
        caid=ww.slice(ww.indexOf("&")+1)
        this.props.history.push(`/perform?${cid}&${caid}`)
        Observer.$emit("updata", true)
    }
}
export default withRouter(Nav)
