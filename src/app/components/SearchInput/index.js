import React from 'react';
import './style.css';
class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    render(){
        return (
            <input type="search" 
            className="search-input"    
            placeholder="请输入关键字" 
            onChange={this.changeHandle.bind(this)}
            onKeyUp={this.keyUpHandle.bind(this)}
            value={this.state.value} />
        )
    }

    componentDidMount(){
        this.setState({
            value:this.props.value
        })
    }
    changeHandle(e){
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandle(e){
        const value=e.target.value;
        if(e.keyCode!==13){
            return;
        }
        if(this.props.hasOwnProperty("enterHandle")){
            this.props.enterHandle(this.state.value)
        }
    }
}
export default SearchInput;