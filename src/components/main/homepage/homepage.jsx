import React, { Fragment, Component } from "react";
import { connect } from "react-redux"
import { loadListDataAsyanc } from "./actionCreator";
import { HeaderCont } from "./homeStyled.js";
import Swiper from "../../layout/swiper/swiper";
import HotShow from "./homeshow/hotshow.jsx";
import Recommend from "./recommend/recommend"
import Categorys from "./category/category"
import Observer from "../../../Observer";
import HomeNav from "./homepge1/homepage1";
import HotTour from "./hottour/hottour";
import HotVenue from "./hotvenue/hotvenue";
class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            city: "",
            scr: ""
        }
        Observer.$on("head",(res)=>{
           this.setState({scr:res})
        })
    }
    render() {
        return (
            <Fragment>
                 <HeaderCont className={this.state.scr > 0 ? "scrSelect" : ""}>
                        <div className="city" onClick={this.goCity.bind(this)}>
                            <i className="fa fa-map-marker"></i>
                            <span>{this.state.city}</span>
                        </div>
                        <div className="search"  onClick={this.goseek.bind(this)}>
                            <i className="fa fa-search"></i>
                            <span>搜索热门演出</span>
                        </div>
                        <span>
                            <img src="http://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="" />
                        </span>
                    </HeaderCont>
                <Recommend>
                   
                    <Swiper></Swiper>
                    <HomeNav></HomeNav>
                    <HotShow></HotShow>
                    <HotTour></HotTour>
                    <Categorys></Categorys>
                    <HotVenue></HotVenue>
                </Recommend>
            </Fragment>

        )
    }
    componentDidMount() {
        Observer.$emit("test",false)
            this.setState({ city: JSON.parse(localStorage.getItem("city"))["name"] })
    }
    goCity() {
        Observer.$emit("test", true)
        this.props.history.push('/city');

    }
    goseek() {
        Observer.$emit("test", true)
        this.props.history.push('/search');

    }
}
const mapStateToProps = (store) => {
    return {
        listData: store.getIn(["infoReducer", "listData"])
    }
}
const mapDispathToProps = (dispatch) => ({
    handleTest() {
        dispatch(loadListDataAsyanc(dispatch))
    },
})
export default connect(mapStateToProps, mapDispathToProps)(Homepage);
