import React from 'react';
import * as InfoDataDetail from './InfoData.js';
import Loading from '../../../components/Loading';
import DataInfo from '../../../components/DataInfo';
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            info:false
        }
    }
    render() {
        const info=this.state.info;
        return (
            <div>
                {
                    this.state.info?
                    <DataInfo info={info}/>:<Loading/>
                }
            </div>
        )

    }

    componentDidMount() {
        // 模拟后端数据
        var id=this.props.id;
        var InfoData=InfoDataDetail;
        setTimeout(()=>{
            this.loadFirstPageData(id,InfoData)
        },500)
    }
    loadFirstPageData(id,InfoData){
        this.setState((info)=>{
            return {info:InfoData}
        })
    }
}

export default Info;