import React,{Fragment,Component} from "react";
import NotLogins  from "./notLoginStyled";
import {NavLink} from "react-router-dom";
import Observer from "@/Observer";
import axios from "axios";
import { Toast } from 'antd-mobile';
class NotLogin extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            userpwd:"",
        }
    }
    goBackPage  () {
        this.props.history.goBack()//做返回
        Observer.$emit("test",false)
        
    };
    render(){
        return(
            <Fragment>
                <NotLogins>
                    <div className="notlogin-bg">
                        <div className="navbar">
                            <div>
                                <p>
                                    <i className="fa fa-angle-left" onClick={this.goBackPage.bind(this)} ></i>
                                </p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-box">
                                <h1>欢迎来到聚橙网</h1>
                                <div className="content-form">
                                    <div className="content-form-box">
                                        <form >
                                            <p>
                                               <input type="text" value={this.state.username} onChange={this.handleUser.bind(this)} placeholder="请输入手机号/邮箱"/>
                                            </p>
                                            <p>
                                               <input type="password" value={this.state.userpwd} onChange={this.handlePwd.bind(this)} placeholder="请输入密码"/>
                                            </p>
                                            <p>
                                                <button className={this.state.userpwd || this.state.username?"butselect":"" } onClick={this.login.bind(this)}> 登 录</button>
                                            </p>
                                            <br/>
                                            <NavLink to="/register">立即注册</NavLink>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-wrap">
                            <div className="footer-box">
                                <div className="footer-icon">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/qq.png" alt=""/>
                                </div>
                                <div className="footer-icon">
                                    <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/weibo.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </NotLogins>
            </Fragment>
        )
    }
    componentDidMount(){
        Observer.$emit("test",true)
        Observer.$emit("tab","blueTab")
        Observer.$on("login",(res)=>{
            console.log(res)
            this.setState({username:res.username,userpwd:res.password})
        })
    }
    handleUser(e){
    this.setState({username:e.target.value})
    }
    handlePwd(e){
    this.setState({userpwd:e.target.value})
    }
    login(e){
        e.preventDefault()
        if(this.state.username=="" || this.state.userpwd==""){
            this.showToast("密码和账号不得为空")
            return
        }
       var data={
           username:this.state.username,
           password:this.state.userpwd
       }
  
        axios({
            method: 'get',
            url: '/login',
            params: {
              data
            }
          }).then(res=>{
            console.log(res)
            if(res.data.msg=="登录成功"){
                this.showToast("登录成功")
                localStorage.setItem("user",JSON.stringify(res.data.data))
                this.props.history.push("/me")
                Observer.$emit("test",false)
                
            }else{
                this.showToast("用户名或密码错误！")
            }
        })
        
    }
    showToast(val) {
        Toast.info(val, 1);
      }
}
export default NotLogin;


