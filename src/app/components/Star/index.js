import React from 'react';
import './style.css';
class Star extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 获取star数量、并取余5（最多5个star）
        let star = this.props.star || 0;
        if (star > 5) {
            star = star % 5;
        }
        const starArr=[1,2,3,4,5].map((item,index)=>{
            const lightClass=star>=item?' light':""
            return <i key={index} className={"icon-star"+lightClass}></i>
        })
        return (
            <div className="star-container">
                {starArr}
            </div>
        )
    }
}
export default Star;