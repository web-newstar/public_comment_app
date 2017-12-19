import React from "react";
import './style.css';
import Star from '../../Star'
class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // 获取数据
        const item = this.props.data
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}
export default Item;