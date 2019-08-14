import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import Route from "@/router"
import Tabber from "./components/layout/tabbar/tabbar";
import GlobalStyle from "@/css/createGlobalStyle"
import { withRouter } from "react-router-dom";
import Observer from "@/Observer";


class App extends React.Component{
  constructor(){
    super()
    localStorage.setItem("city", JSON.stringify({ id: 1, is_city: 0, Abbreviation: "SZ", name: "深圳" }))
    this.state={
      bool:false
    }
  }
  render(){
    return (
    <div>
      < GlobalStyle/>
        <Route/>
        {
          this.state.bool?(null):(<Tabber/>)
        }
    </div>
    )
  }
  componentDidMount(){
   
    if(this.props.location.pathname.indexOf("perform")!=-1){
      this.setState({bool:true});
    }else{
      this.setState({bool:false});
    }
    Observer.$on("updata", (res)=>{
      this.setState({bool:res});
    });
  }
}

export default withRouter(App);
