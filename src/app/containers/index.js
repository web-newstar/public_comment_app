import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LocalStore from "../util/localStore";
import {CITYNAME} from "../config/localStoreKey";
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
}
            </div>
        )
    }S
    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京'
        }
        
        // 将城市信息存储到redux中
        this.props.userInfoActions.update({
            cityName: cityName
        })
        // 更新状态
        this.setState({initDone: true})

    }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
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
)(App)
// export default App;