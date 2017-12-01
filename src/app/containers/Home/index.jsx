import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader';
import CateGory from "../../components/CateGory";
import Ad from "./subpage/Ad";
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
               <HomeHeader cityName={this.props.userinfo.cityName}/>
               <CateGory/>
               <div style={{height:"15px"}}></div>
               <Ad/>
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
