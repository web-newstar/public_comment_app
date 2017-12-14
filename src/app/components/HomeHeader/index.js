import React from 'react';
import './style.css'
import {Link} from "react-router-dom";
import SeacthInput from "../SearchInput"
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>    
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>                
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SeacthInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
        const history=this.props.history;
        history.push("/search/all/"+encodeURIComponent(value));
        
    }
}

export default HomeHeader