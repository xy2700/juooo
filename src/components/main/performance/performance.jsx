import React, { Fragment, Component, PureComponent } from "react";
import axios from "axios"
import { Perform, Warp, City } from "./performanceStyle"
import URL from "url"
import $ from "jquery"
import Observer from "@/Observer"
import ReactDOM from 'react-dom';
import { Toast, PullToRefresh } from 'antd-mobile';
import _ from "lodash"


export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            data: [],
            tabList: [],
            showList: [],
            cid: "",
            caid: "",
            cityName: "",
            num: 1,
            bool: true,
            cityList: [],
            cityBool: false,
            cityId: "",
            makeCity: "",
            makeId: "",
            showBool:true
        };
    }
    genData(num, ucid,callback) {
        let {cid, caid } = URL.parse(this.props.location.search, true).query;
        if (this.state.bool) {
            axios({
                method: 'get',
                url: '/apis/Search/getShowList',
                params: {
                    category: caid,
                    city_id: ucid||cid,
                    page: num,
                    version: "5.1.4",
                    keywords: "",
                    referer: 2
                }
            }).then((res) => {
                callback(res)
            })
        }
    }
    componentDidMount() {
        loadingToast();
        let { cid, caid } = URL.parse(this.props.location.search, true).query;
        axios({
            method: 'get',
            url: '/apis/Search/getShowCategory',
            params: {
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
            this.setState({ cityName: JSON.parse(localStorage.getItem("city")).name })
            this.setState({ tabList: res.data.data.show_category_list })
            this.setState({ cid, caid })
            this.setState({ cityId: JSON.parse(localStorage.getItem("city")).id })
            this.setState({ makeCity: JSON.parse(localStorage.getItem("city")).name })
            this.setState({ makeId: JSON.parse(localStorage.getItem("city")).id })
        })
        axios({
            method: 'get',
            url: '/apis/Search/getCity',
            params: {
                version: "5.1.4",
                referer: 2
            }
        }).then((res) => {
            this.setState({ cityList: res.data.data.city_list })
        })
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.genData(this.state.num,this.state.cityId, (res) => {
            if(_.isEmpty(res.data.data)){
                this.setState({ bool: false ,showBool:false})
                return;
            }
            this.setState({ showList: res.data.data.list }, () => {
                Toast.hide();
            })
        })
    }
    goBack() {
        this.props.history.goBack();
        Observer.$emit("updata", false)
    }
    select(catId, e) {
        $(e.target).attr("class", "active").siblings().attr("class", "")
        this.setState({ showList: [] })
        loadingToast();
        setTimeout(() => {
            axios({
                method: 'get',
                url: '/apis/Search/getShowList',
                params: {
                    category: catId,
                    city_id: this.state.makeId,
                    keywords: "",
                    version: "5.1.4",
                    referer: 2
                }
            }).then((res) => {
                this.setState({ showList: res.data.data.list }, () => {
                    Toast.hide();
                })
            })
        }, 1000)
    }
    showCity() {
        this.setState({ cityBool: true })
    }
    hideCity() {
        this.setState({ cityBool: false })
    }
    selectCity(item, e) {
        $(e.target).attr("class", "active").siblings().attr("class", "");
        this.setState({ makeCity: item.name,makeId: item.city_id })
    }
    resetCity(e) {
        $(e.target).parents(".filtrate-data").find("li").eq(JSON.parse(localStorage.getItem("city")).id).attr("class", "active").siblings().attr("class", "")
        this.setState({ makeCity: JSON.parse(localStorage.getItem("city")).name ,makeId: JSON.parse(localStorage.getItem("city")).id})
    }
    sureCity() {
        this.setState({ cityBool: false, cityName:this.state.makeCity,cityId:this.state.makeId});
        this.setState({ showList: [] });
        loadingToast();
        this.genData(this.state.num,this.state.makeId, (res) => {
            if(_.isEmpty(res.data.data)){
                Toast.hide();
                this.setState({ bool: false ,showBool:false})
                return;
            }
            this.setState({ showList: res.data.data.list }, () => {
                Toast.hide();
            })
        })
        // localStorage.setItem("city", JSON.stringify(item))
    }
    render() {
        return (<div>
            {
                this.state.cityBool ? (
                    <City>
                        <div className="dialog_bg">
                            <div className="filtrate_bg" onClick={this.hideCity.bind(this)}></div>
                            <div className="filtrate-data">
                                <div className="city-list">
                                    <h3 className="title">
                                        <span className="name">城市</span>
                                    </h3>
                                    <div className="list-wrap">
                                        <ul id="list">
                                            <li className={this.state.cityId == 0 ? "active" : null} onClick={this.selectCity.bind(this, { city_id: "0", name: "全国" })}>全国</li>
                                            {
                                                this.state.cityList.map((item, index) => (
                                                    <li key={index} className={this.state.cityId == item.city_id ? "active" : null} onClick={this.selectCity.bind(this, item)}>{item.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="foot">
                                    <span onClick={this.resetCity.bind(this)}>重置</span>
                                    <span className="active" onClick={this.sureCity.bind(this)}>确定</span>
                                </div>
                            </div>
                        </div>
                    </City>
                ) : (null)
            }

            <Perform>
                <div className="show_library">
                    <div className="head_nav">
                        <span onClick={this.goBack.bind(this)}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MDY3MDgxRjU2ODAxMUU5QTZCRkE3NDU1NDVGRERENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDY3MDgyMDU2ODAxMUU5QTZCRkE3NDU1NDVGRERENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNjcwODFENTY4MDExRTlBNkJGQTc0NTU0NUZEREQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwNjcwODFFNTY4MDExRTlBNkJGQTc0NTU0NUZEREQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sosNbgAAAglJREFUeNrsmDlLA2EQhhOzEiUeCII/IPkNIih4VIooCAbEgIWiAQ1WKh5YiGgUg5VEY7AzKEIqsbCwEBSEWFrmF4iFeBuP9R2YhWXJoSy7O4UDD+wWCw/zfcPMjltVVZfkKHMJD7ff7zfz/SoIg6tsNttthaBi4tsoGAc1oMmqDCom5CZANXgCKUmCJBcBVeAVHOB4J6UUyZxBLg25MSlVPA1mdXLHYMjqKlb+ILfABfEMTsAAUCUIktwiF8Q7OLVL7jdHHDHInYF+u+RKZZAu/wrLvYFz0GunXLEMjoI1vnOaHHWKL7tbnVJALsZyH+DSKbl8GRw2yGVAp1NyxgxSZW6yXA5cg3bwKWHcCoI4qOVsZVguJ2EepEkkAepYjjLXIUFOE9zVyd1IktMEG/j5DjSDF6kj/7fTBVFI8Jaf67mVeaQJUr+9B+WgkYcBjyRBamMz4IElW3ic8ki6g0kwxZn0glYpkvoiSXImSbICtEmQNPZikpzn4/ayZJr+nyVtFrbBMnhkSRoWjpySLDQPxgySXeDQCcliI/8GS9Kd9IEeJyRL/ZOQ5DpvDypZcl+SoItH/5hOsg/sSRKkWAJbOskgj2iO/tXlW3tQaButQX4PS1l9aJJxziStQEKBQCAhSVCT3OEViI8lo5IEtXVISic5IuEOGiPM65AQuLBK0P2/5TcZPwIMAAVtfNEiP57MAAAAAElFTkSuQmCC" alt="" />
                        </span>
                        <h3>演出</h3>
                    </div>
                    <div className="show_type_wrap">
                        <div className="show_type">
                            <ul>
                                <li onClick={this.select.bind(this, 0)} className={this.state.caid == 0 ? "active" : ""}>全部</li>
                                {
                                    this.state.tabList.map((item, index) => (
                                        <li key={index} onClick={this.select.bind(this, item.category_id)} className={this.state.caid == item.category_id ? "active" : ""}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="city_wrap" onClick={this.showCity.bind(this)}>
                            <span className="city">{this.state.cityName}</span>
                            <span className="city_icon"></span>
                        </div>
                    </div>
                </div>
            </Perform>
            <PullToRefresh
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                }}
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                direction={'up'}
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    if (!this.state.bool) {
                        return
                    }
                    this.state.num++;
                    this.genData(this.state.num,this.state.makeId, (res) => {
                        if (_.isEmpty(res.data.data)) {
                            this.setState({ bool: false })
                            return
                        }
                        let upList = [...this.state.showList, ...res.data.data.list];
                        this.setState({ showList: upList })
                    })

                }}
            >
                <Warp>
                    <div className="library-wrap">
                        <div className="recommend-wrap">
                            <div className="recommend-list">
                                <ul>
                                    {
                                        this.state.showBool?(
                                            this.state.showList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <div className="show-icon">
                                                            <a href="javascript:void(0);">
                                                                <img src={item.pic} alt="" />
                                                            </a>
                                                            <div className="juooo_sponsor">
                                                                <span className="logo_i">
                                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABGCAYAAACdW4eSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MjYyNjY3RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MjYyNjY4RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUyNjI2NjVGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUyNjI2NjZGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4a1BqAAAAEuUlEQVR42uxaSWgUQRStnhkVRAQ1egieRHAB8ShINCrugUgUxEgMKOTiyaMgeBACHj15CSiEYFTQSCCKCmo0CB5VcAHxFHLQuICimGSm/a+mftvTVC81052ZmCp4TKanl3p/efXrd5yp/S2umAcjJ+bJsEQtUUvUErVELVFL1BK1RC1RSzTDUbjUJxF5zsCQyHWelH/nz/VKGD0j6YlO6x5ROHs+8pzS2FORa9ke+vv0gW3xlicy+e5TFcfcL5PCfftG5LZsFbm2dnms2Hc5G6Lu6EMxTYBlSyPDojR4tcLafKyouRbWdzZsTPQc3CN4b5AsjT2RhnbfvxMzZ3rMo6aaUIPFg1bnseDeMzFz8YI0jOcl8jK8rQtHZ0VTxbUg4qxbL4r9V4SzZm3Ze73nykZo2eEZDNdizHR1JItI0w5DlEfdifHyd7I8iGGC8CaIRoUtE/R7CsckkYDRkMtsCDzP/9useZQfyiHOk8WkonJfJ06c81IXAtoAo+D5MEKmoYuJBz1a7XCaV5c/yUsyl1euEqKpyYuAYow4Ful6/1xSJRoMI/YycopFg1WWJ4TfONcqVJaUFKoqJidliAdDNU4cExs0aY7qlhf2LOcoyIRNFmEcjAR/fsrJf/4kPYrPqGWKw9dEfZ0s2p1BNQ3zEtZMGEeGK86jifNyAnUNU1TOYROihVpJhFl7OoHsY/HHwp/vOPrPKHSdadWTCVG/laVlSThwjCsaXlbi1lY5KC/lMR9RL9TImKzaYcbMtNYFIUxA5hblUrAUQ8hxTcrn6oqFqNCDoaRhSKQgaH7wsmNaHRnXuvxwP/GCEhr2OMjxOptURbVrMnkaqcJRxCGtU+/UPCrlnAjyQ0GcCQWrHnyXhTiFVzUk/R5HCHsRQkocVXxkJkZRZR3nra68ixq6vPRXYsGqLGnEFExyEw9Iqqj+nYhHmLwcV4Qn2cpVVYHZ14aW6Dwn6u/ppHGvuB5S3YiiPpU7GM3+8r/yKBZxuSHWlHONMIxUl9siVRcAIdu3NO6TasEArxVj1lnTSejWTa6Pg6WerhVqVbcRifpVlsXM/fghPIVIB0xDvu5EZZeBaufSi+eVKq5ap9oUGrrpXVu3DoOuPcl7SG1zrK1d1sDcS+KuYFSe4ze357RsrCXpANbcYahVjGR7k4zm7896XcG4DcPIsJEw1TV00Y0I7lnRPkXxoT1fvaLgnZF/M566R9Mcwegw7SCYbOkaZnlB6Ie9jKrIzwRh3bBEozqIFaGr+r+z0kpJe3BZGUuS1lfkb5zHa651k7zxjt3hBFopUa8U/e91vOurfAlsWymWqCVqiVqilqglaolaovWodb8T7ipwswd904OENsLSzPe+GZaAXwm3CbcIjwhTIectIuwiHCEcJiybC0R/EoYJg4QHEeREBOl9hE4C/l91cSMR/UO4r8iB5K+U5rZEkQXpvYSF9SCKhv0o4ZoKz28Zp9hyFdbHCa3ViKgp0ZeEfsJ1wkSdBLSZ0KWwKU2i48pzA4TXDbZqbCZ0E44pAxgT/aHUEuQeE0oNvkzmCbsJJwiHVH6HEi0qUQG5O4Tfc7Q2AMkO5emdygiS6Cv6RDf4Rh3zLst8hoB1/xVgAOy8jTaoIQsHAAAAAElFTkSuQmCC" alt="" />
                                                                </span>
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
                                        ):(null)
                                    }
                                </ul>
                            </div>
                        </div>
                        {
                            this.state.bool ? (null) : (
                                <p>没有更多了</p>
                            )
                        }
                    </div>
                </Warp>
            </PullToRefresh>
        </div>);
    }
}
function loadingToast() {
    Toast.loading('Loading...', 1000, () => {

    });
}

