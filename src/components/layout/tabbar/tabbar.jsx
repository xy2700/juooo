import React from "react";
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import axios from "axios";
import Observer from "@/Observer";

class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false,
            bool:false
        };
        Observer.$on("test",(res)=>{
            
            this.setState({hidden:res})
        })
        Observer.$on("tab",(sc)=>{  
            this.setState({selectedTab:sc})
        })
    }
    componentDidMount() {
        if(this.props.location.pathname.indexOf("homepage")!=-1){
            this.setState({selectedTab:"blueTab"})
        }else if(this.props.location.pathname.indexOf("theater")!=-1){
            this.setState({selectedTab:"redTab"})
        }else if(this.props.location.pathname.indexOf("notlogin")!=-1){
            this.setState({selectedTab:"greenTab"})
        }else if(this.props.location.pathname.indexOf("me")!=-1){
            this.setState({selectedTab:"yellowTab"})
        }
    }
    
    renderContent(pageText) {
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0,zIndex:2}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#f3b816ef"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                            width: '30px',
                            height: '25px',
                            background: 'url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png) center center /  30px 40px no-repeat',
                            backgroundPositionY: "4px"
                        }
                        }
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '25px',
                            background: 'url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQecmATGXZAAAUKcf_gA0402.png) center center /  30px 45px no-repeat',
                            backgroundPositionY: "-22px"
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        // badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            }, () => {
                                
                                this.props.history.push('/homepage')
                               
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '25px',
                                background: 'url(http://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png) center center /   30px 40px no-repeat',
                                backgroundPositionY: "4px"
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '25px',
                                background: 'url(http://image.juooo.com/group1/M00/02/7F/rAoKNVwtUeGAOGfGAAAKR4Zrvs0487.png) center center /   30px 45px no-repeat',
                                backgroundPositionY: "-22px"
                            }}
                            />
                        }
                        title="剧院"
                        key="Koubei"
                        // badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            }, () => {
                                this.props.history.push('/theater')
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '25px',
                                background: 'url(http://image.juooo.com/group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png) center center / 30px 40px  no-repeat',
                                backgroundPositionY: "4px"
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '25px',
                                background: 'url(http://image.juooo.com/group1/M00/02/71/rAoKNVwRraqAMv3SAAAIdQJTBKA919.png) center center /  30px 45px  no-repeat',
                                backgroundPositionY: "-22px"
                            }}
                            />
                        }
                        title="票夹"
                        key="Friend"
                        // dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                       
                            if(localStorage.getItem("user")!=null){
                               
                                this.setState({
                                    selectedTab: 'greenTab',
                                }, () => {
                                    this.props.history.push('/wallet')
                                });
                            }else {
                                this.props.history.push('/notlogin')
                                Observer.$emit("test",true)
                            }
                            
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={ <div style={{
                            width: '30px',
                            height: '25px',
                            background: 'url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png) center center /  30px 40px  no-repeat',
                            backgroundPositionY: "4px"
                        }}
                        />}
                        selectedIcon={ <div style={{
                            width: '30px',
                            height: '25px',
                            background: 'url(http://image.juooo.com/group1/M00/01/81/rAoKmVuQedqADpfXAAAQDvkHt5o350.png) center center /  30px 45px  no-repeat',
                            backgroundPositionY: "-22px"
                        }}
                        />}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            if(localStorage.getItem("user")!=null){
                                this.setState({
                                    selectedTab: 'yellowTab',
                                }, () => {
                                    this.props.history.push('/me')
                                });
                                
                            }else {
                                this.props.history.push('/notlogin')
                                Observer.$emit("test",true)
                            }
                            
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default withRouter(TabBarExample)
