import React from 'react';
import './style.css';
class HomeAd extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const data = this.props.data;
        const show=data.map((item,index)=>(
            <div key={index} className="ad-item float-left">
                <a href={item.link} arget="_blank">
                    <img src={item.img}/>                    
                </a>
            </div>
        ))
        return (
            <div id="home-ad">
            <h2>超值特惠</h2>
            <div className="ad-container clear-fix">
                {this.props.data.map((item, index) => {
                    return <div key={index} className="float-left ad-item">
                        <a href={item.link} target="_blank">
                            <img src={item.img} alt={item.title}/>
                        </a>
                    </div>
                })}
            </div>
        </div>
        )
    }
}
export default HomeAd;