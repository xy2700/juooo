import React, { Fragment, Component } from "react";
import axios from "axios"
import { RecommendWrap } from "./recommendStyle"
import ReactDOM from 'react-dom';
import { PullToRefresh } from 'antd-mobile';
import Observer from "@/Observer"
import { withRouter } from "react-router-dom";

class recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      recommendList: [],
      num: 1,
      bool: true
    };
  }
  genData(num, callback) {
    
    if (this.state.bool) {
      axios({
        method: 'get',
        url: '/apis/home/getRecommendShow',
        params: {
          cityAdd: JSON.parse(localStorage.getItem("city"))["Abbreviation"],
          page: num,
          version: "5.1.4",
          referer: 2
        }
      }).then((res) => {
        callback(res)
      })
    }
  }
  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    this.genData(this.state.num, (res) => {
      this.setState({
        recommendList: res.data.data.recommend_show_list,
      })
    })
  }
  handleScroll(){
    var top=ReactDOM.findDOMNode(this.ptr).scrollTop
    Observer.$emit("head",top)
  }
  Nation() {
    var cid = JSON.parse(localStorage.getItem("city")).id
    console.log(cid)
    this.props.history.push(`/perform?cid=${cid}&caid=0`)
    Observer.$emit("updata", true)
  }
  render() {
    return (<div>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={{ deactivate: '上拉可以刷新' }}
        direction={'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          if (!this.state.bool) {
            return
          }
          this.state.num++;
          this.genData(this.state.num, (res) => {
            this.setState({
              recommendList: this.state.recommendList.concat(res.data.data.recommend_show_list)
            }, () => {
              if (res.data.data.recommend_show_list.length == 0) {
                this.setState({ bool: false })
              }
            })
          })
        }}
        onScroll={this.handleScroll.bind(this)}
      >
        {this.props.children}
        {
          this.state.recommendList.length != 0 ? (
            <RecommendWrap>
              <div className="title-wrap">
                <h3>为你推荐</h3>
              </div>
              <div className="recommend-list">
                <ul>
                  {
                    this.state.recommendList.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="show-icon">
                            <a href="javascript:void(0);">
                              <img src={item.schePic} alt="" />
                            </a>
                            <div className="juooo_sponsor">
                              <span className="logo_i">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABGCAYAAACdW4eSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1MjYyNjY3RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1MjYyNjY4RjhBNzExRTZBQ0M4QjMyMDRDMkNENjk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDUyNjI2NjVGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDUyNjI2NjZGOEE3MTFFNkFDQzhCMzIwNEMyQ0Q2OTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4a1BqAAAAEuUlEQVR42uxaSWgUQRStnhkVRAQ1egieRHAB8ShINCrugUgUxEgMKOTiyaMgeBACHj15CSiEYFTQSCCKCmo0CB5VcAHxFHLQuICimGSm/a+mftvTVC81052ZmCp4TKanl3p/efXrd5yp/S2umAcjJ+bJsEQtUUvUErVELVFL1BK1RC1RSzTDUbjUJxF5zsCQyHWelH/nz/VKGD0j6YlO6x5ROHs+8pzS2FORa9ke+vv0gW3xlicy+e5TFcfcL5PCfftG5LZsFbm2dnms2Hc5G6Lu6EMxTYBlSyPDojR4tcLafKyouRbWdzZsTPQc3CN4b5AsjT2RhnbfvxMzZ3rMo6aaUIPFg1bnseDeMzFz8YI0jOcl8jK8rQtHZ0VTxbUg4qxbL4r9V4SzZm3Ze73nykZo2eEZDNdizHR1JItI0w5DlEfdifHyd7I8iGGC8CaIRoUtE/R7CsckkYDRkMtsCDzP/9useZQfyiHOk8WkonJfJ06c81IXAtoAo+D5MEKmoYuJBz1a7XCaV5c/yUsyl1euEqKpyYuAYow4Ful6/1xSJRoMI/YycopFg1WWJ4TfONcqVJaUFKoqJidliAdDNU4cExs0aY7qlhf2LOcoyIRNFmEcjAR/fsrJf/4kPYrPqGWKw9dEfZ0s2p1BNQ3zEtZMGEeGK86jifNyAnUNU1TOYROihVpJhFl7OoHsY/HHwp/vOPrPKHSdadWTCVG/laVlSThwjCsaXlbi1lY5KC/lMR9RL9TImKzaYcbMtNYFIUxA5hblUrAUQ8hxTcrn6oqFqNCDoaRhSKQgaH7wsmNaHRnXuvxwP/GCEhr2OMjxOptURbVrMnkaqcJRxCGtU+/UPCrlnAjyQ0GcCQWrHnyXhTiFVzUk/R5HCHsRQkocVXxkJkZRZR3nra68ixq6vPRXYsGqLGnEFExyEw9Iqqj+nYhHmLwcV4Qn2cpVVYHZ14aW6Dwn6u/ppHGvuB5S3YiiPpU7GM3+8r/yKBZxuSHWlHONMIxUl9siVRcAIdu3NO6TasEArxVj1lnTSejWTa6Pg6WerhVqVbcRifpVlsXM/fghPIVIB0xDvu5EZZeBaufSi+eVKq5ap9oUGrrpXVu3DoOuPcl7SG1zrK1d1sDcS+KuYFSe4ze357RsrCXpANbcYahVjGR7k4zm7896XcG4DcPIsJEw1TV00Y0I7lnRPkXxoT1fvaLgnZF/M566R9Mcwegw7SCYbOkaZnlB6Ie9jKrIzwRh3bBEozqIFaGr+r+z0kpJe3BZGUuS1lfkb5zHa651k7zxjt3hBFopUa8U/e91vOurfAlsWymWqCVqiVqilqglaolaovWodb8T7ipwswd904OENsLSzPe+GZaAXwm3CbcIjwhTIectIuwiHCEcJiybC0R/EoYJg4QHEeREBOl9hE4C/l91cSMR/UO4r8iB5K+U5rZEkQXpvYSF9SCKhv0o4ZoKz28Zp9hyFdbHCa3ViKgp0ZeEfsJ1wkSdBLSZ0KWwKU2i48pzA4TXDbZqbCZ0E44pAxgT/aHUEuQeE0oNvkzmCbsJJwiHVH6HEi0qUQG5O4Tfc7Q2AMkO5emdygiS6Cv6RDf4Rh3zLst8hoB1/xVgAOy8jTaoIQsHAAAAAElFTkSuQmCC" alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="item-desc">
                            <p className="show-date">
                              <strong>{item.show_time}</strong>
                              {item.week}
                            </p>
                            <a href="javascript:void(0);">
                              <h3>{item.show_name}</h3>
                            </a>
                            <p className="venue">{item.c_name} | {item.v_name}</p>
                            <p className="price">
                              <strong>{item.low_price}</strong>
                              起
                                                      </p>
                          </div>
                        </li>
                      )
                    })
                  }
                  {
                    this.state.bool ? (null) : (
                        <button className="btn-more" onClick={this.Nation.bind(this)}>
                        查看更多演出
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAMAAACDMFxkAAAAM1BMVEUAAAD/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTL/WTIMtL8tAAAAEXRSTlMA/AW1wr2r3K+fy6YKz5OSB/KUf8wAAABKSURBVAjXbc7bDoAwCAPQwjbBzdv/f60PSsUoTyehTQorivtcaG0yIVxedvxlqozkOWU2ultwWS3UZb90sKaNqkmDX/8MewTz0AmWCAFo1w/zpQAAAABJRU5ErkJggg==" alt="" />
                        </button>
                    )
                  }
                </ul>
              </div>
            </RecommendWrap>
          ) : (null)
        }
      </PullToRefresh>
    </div>);
  }
}

export default withRouter(recommend)


