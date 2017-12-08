import React from "react";
import './style.css';
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const title=this.props.title;
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h2>{title}</h2>
            </div>
        )
    }
    clickHandle(){
        const history=this.props.history;
        history?history.goBack(): window.history.back()    
    }
}
export default Header;