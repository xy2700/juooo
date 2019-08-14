import React,{Fragment,Component} from "react";
import OutLogin from "./outLoginStyle"
import {NavLink} from "react-router-dom";

import {createHashHistory} from 'history'
import Observer from "../../../Observer";
//返回上一页这段代码
const history = createHashHistory();//返回上一页这段代码


class outLogins extends Component{

    goBackPage = () => {
        history.goBack();  //返回上一页这段代码
        Observer.$emit("test", false);
    };
    render(){
        return (
            <Fragment>
                <OutLogin>
                    <div className="body-box">
                        <div className="navbar">
                            <div className="nav">
                                <div className="left">
                                    <i className="fa fa-angle-left" onClick={this.goBackPage} ></i>
                                </div>
                                <div className="conter">
                                    <span>账户设置</span>
                                </div>
                                <div className="right">
                                    <i className="fa fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-top">
                                <div>
                                    <span>头像</span>
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" alt=""/>
                                </div>
                                <div >
                                    <span>昵称</span>
                                </div>
                            </div>
                            <div className="content-bottom">
                                <div>
                                    <span>手机号</span>
                                    <div>XXXXXXXXXXX</div>
                                </div>
                                <div>
                                    <span>邮箱</span>
                                </div>
                                <div>
                                    <span>
                                        生日信息
                                        <span className="sr">(只允许设置一次)</span>
                                    </span>

                                    <div>去完善<i className="fa fa-angle-right"></i></div>
                                </div>
                                <div>
                                    <span>登录密码</span>
                                    <div>修改<i className="fa fa-angle-right"></i></div>
                                </div>
                                <div>
                                    <span>支付密码</span>
                                    <div>设置<i className="fa fa-angle-right"></i></div>
                                </div>
                                <div>
                                    <span>实名认证</span>
                                    <div>未认证<i className="fa fa-angle-right"></i></div>
                                </div>
                                <div>
                                    <span>学生身份验证</span>
                                    <div>未认证<i className="fa fa-angle-right"></i></div>
                                </div>
                            </div>
                            <div className="footer">
                                <span onClick={this.tuiLogin.bind(this)}>退出登陆</span>
                            </div>
                        </div>
                    </div>
                </OutLogin>
            </Fragment>
        )
    }
    tuiLogin(){
        
        this.props.history.push("/")
        localStorage.removeItem("user")
      Observer.$emit("tab","blueTab")
      
    }
}


export default outLogins;
