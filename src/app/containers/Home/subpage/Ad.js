import React from 'react'
import {getAdData} from '../../../fetch/home/home.js';
import * as homeAdData from './AdData.js';
import HomeAd from '../../../components/HomeAd'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }
    render() {
        const data=this.state.data;
        return (
            <div>
                {this.state.data.length?
                <HomeAd data={data}/>:<div>加载中...</div>}
            </div>
        )
    }
    componentDidMount() {
        setTimeout(()=>{
            if(homeAdData.length){
                this.setState((preState)=>{
                    return {data:preState.data.concat(homeAdData)}
                })
            }
        },300)
    }
}

export default Ad
