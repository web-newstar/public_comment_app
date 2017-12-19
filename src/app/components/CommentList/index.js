import React from 'react';
import './style.css';
import Item from "./item"
class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data=this.props.data;
        const commentListData=data.map((item,index)=>{
            return  <Item key={index} data={item}></Item>
        })
        return (
            <div className="comment-list">   
                {commentListData}
            </div>
        )

    }
}

export default CommentList;