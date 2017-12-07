import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader';
import CateGory from "../../components/CateGory";
import Ad from "./subpage/Ad";
import List from "./subpage/List/List"
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const cityName=this.props.userinfo.cityName;
        return (
            <div>
               <HomeHeader cityName={cityName}/>
               <CateGory/>
               <div style={{height:"15px"}}></div>
               <Ad/>
               <List cityName={cityName}/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
// export default Home;
