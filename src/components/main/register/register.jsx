import React,{Fragment,Component} from "react";
import RegisterStyled  from "./registerStyled";
import { Toast} from 'antd-mobile';
import {createHashHistory} from 'history'//返回上一页这段代码
import axios from "axios";
import Observer from "@/Observer";
const history = createHashHistory();//返回上一页这段代码

class Register extends Component{
    goBackPage = () => {
        history.goBack();  //返回上一页这段代码
        
    };
    constructor(){
        super()
        this.state={
            username:"",
            userpwd:"",
            userqpwd:""
        }
    }
    render(){
        return(
            <Fragment>
                <RegisterStyled>
                    <div className="notlogin-bg">
                        <div className="navbar">
                            <div>
                                <a href="javascript:void(0);">
                                    <i className="fa fa-angle-left" onClick={this.goBackPage}></i>
                                </a>
                            </div>
                        </div>
                        <div className="content">
                            <div className="content-box">
                                <h1>欢迎来到聚橙网</h1>
                                <div className="content-form">
                                    <div className="content-form-box">
                                        <form >
                                            <p>
                                                <input type="text" placeholder="请输入用户名" value={this.state.username} onChange={this.handleName.bind(this)}/>
                                            </p>
                                            <p>
                                                <input type="password" placeholder="请输入密码"  value={this.state.userpwd} onChange={this.handlePwd.bind(this)}/>
                                            </p>
                                            <p>
                                                <input type="password" placeholder="请确认密码"  value={this.state.userqpwd} onChange={this.handleQpwd.bind(this)}/>
                                            </p>
                                            <p>
                                                <button className={this.state.userpwd || this.state.username || this.state.userqpwd?"butselect":"" } onClick={this.regist.bind(this)}>注 册</button>
                                            </p>
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
                </RegisterStyled>
            </Fragment>
        )
    }
    handleName(e){
        this.setState({username:e.target.value})
    }
    handlePwd(e){
        this.setState({userpwd:e.target.value})
    }
    handleQpwd(e){
        this.setState({userqpwd:e.target.value})
    }
    regist(e){
        e.preventDefault()
        if(!this.state.username || !this.state.userpwd || !this.state.userqpwd ){
            this.showToast("用户名/密码不能为空")
            return
        }
        if(this.state.userpwd!=this.state.userqpwd){
            this.showToast("两次密码不一致")
            return
        }
        //axios.get("http://localhost:5000/userInfo.json")
        var data={
            username:this.state.username,
            password:this.state.userpwd
        }
        axios({
            method: 'get',
            url: '/regist',
            params: {
              data
            }
          }).then((res)=>{
            this.showToast(res.data.msg)
            console.log(res.data.msg)
            if(res.data.msg=="注册成功"){
                this.props.history.push("/notlogin")
                Observer.$emit("login",data)
            }
        })
    }
    showToast(val) {
        Toast.info(val, 1);
      }
      componentDidMount(){
       
        Observer.$emit("test",true)
    }
}




export default Register;


