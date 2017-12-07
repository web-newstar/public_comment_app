import React from 'react'
import './style.css';
import Item from './item';
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const data=this.props.data;
        const listValue=data.map((item,index)=>{
            return (
                <Item key={index} data={item}/>
            )
        })
        return (
            <div className="list-container">
                {listValue}
            </div>
        )
    }
    componentDidMount() {
        
    }
}

export default List;
