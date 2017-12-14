import React from 'react';
import { connect } from 'react-redux';
import './style.css'
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import localStore from '../../util/localStore';
import {CITYNAME} from "../../config/localStoreKey";
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const history=this.props.history;
        const cityName=this.props.userinfo.cityName;
        return (
            <div>
                <Header title="选择城市" history={history}/>
                <CurrentCity cityName={cityName}/>
                <CityList history={history} changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
        if(newCity==null){
            return;
        }
        // 修改redux
        const userinfo=this.props.userinfo;
        userinfo.cityName=newCity;
        this.props.userInfoActions.update(userinfo)
        
        // 修改localStorage
        localStore.setItem(CITYNAME,newCity)
        // 跳转到首页
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
// export default City
