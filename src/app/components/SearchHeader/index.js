import React from 'react';
import './style.css';
import SearchInput from "../SearchInput";
import {hashHistory} from 'react-router-dom'
class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const value=this.props.keyword;
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={value?value:''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    clickHandle(){
        const history=this.props.history;
        history?history.goBack():window.history.back();
    }
    enterHandle(value){
        const history=this.props.history;
        history.push("/search/all/"+encodeURIComponent(value))        
    }
}
export default SearchHeader;