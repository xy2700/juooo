import React,{Fragment,Component} from "react";
import { Route ,Redirect,Switch} from "react-router-dom";

import Homepage from "@/components/main/homepage/homepage"
import Me from "@/components/main/me/me"
import Theater from "@/components/main/theater/theater"
import Wallet from "@/components/main/wallet/wallet"
import NotLogin from "@/components/main/notLogin/notLogin"
import Register from "@/components/main/register/register"
import City from "@/components/main/city/city"
import Details from "@/components/main/details/details"
import OutLogin from "@/components/main/outLogin/outLogin"
import Perform from "@/components/main/performance/performance"
import Search from "@/components/main/search/scout"
import Position from "@/components/main/position/positionCity";




export default class extends Component{
    render(){
        return (
            <Fragment>
                    <Switch>
                    <Route path="/position/:venueid" component={Position}></Route>
                    <Route path="/details/:schid" component={Details}></Route>
                        <Route path="/city" component={City}></Route>
                        <Route path="/homepage" component={Homepage} />
                        <Route path="/me"  component={Me} />
                        <Route path="/theater"  component={Theater} />
                        <Route path="/wallet"  component={Wallet} />
                        <Route path="/notlogin"  component={NotLogin} />
                        <Route path="/register"  component={Register} />
                        <Route path="/outLogin"  component={OutLogin} />
                        <Route path="/perform"  component={Perform} />
                        <Route path="/search"  component={Search} />
                        {/* exact绝对匹配 */}
                        {/* <Route path="/Test/:name/:id" exact component={Test} /> */}
                        <Redirect path="/" to="/homepage"/>
                    </Switch>
            </Fragment>
        )
    }
}
