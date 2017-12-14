import React from 'react'
import Header from '../../components/Header';
import Info from "./subpage/Info"
class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        // 获取商户id
        const id=this.props.match.params.id;
        return (
            <div>
                {<Header title="商户详情"/>}
                <Info id={id}/>
            </div>
        )
    }
}

export default Detail