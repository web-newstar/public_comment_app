import React from 'react';
import * as InfoData from './InfoData.js';
import Loading from '../../../components/Loading'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            info:false
        }
    }
    render() {

        return (
            <div>
                {
                    this.state.info?
                    <div>有数据了</div>:<Loading/>
                }
            </div>
        )

    }
    componentDidMount() {
        // 模拟后端数据
        var id=this.props.id;
    }
}

export default Info;