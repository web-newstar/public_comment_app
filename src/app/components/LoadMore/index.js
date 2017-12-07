import React from "react";
import './style.css';
class LoadMore extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore?<span>加载中...</span>:<span onClick={this.loadMoreHandle.bind(this)}>{this.props.dataLength>=15?'到底了 客官!':'加载更多'}</span>
                }
            </div>
        )
    }
    loadMoreHandle(){
        if(this.props.dataLength>=15){
            return;
        }
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn()
    }
    componentDidMount(){
        // 节流
        
        let timeOutID;
        function callBack(){
            console.log(this.refs)
            const loadMoreHeight=this.refs.wrapper.getBoundingClientRect().height;
            const loadMoreTop=this.refs.wrapper.getBoundingClientRect().top;    
            const windowHeight=window.screen.height;
            if(loadMoreTop<=windowHeight){
                this.loadMoreHandle();
            }
            
        }
        window.addEventListener('scroll',()=>{
            if(this.props.isLoadingMore){
                return;
            }
            if(timeOutID){
                clearTimeout(timeOutID)
            }
            timeOutID=setTimeout(callBack.bind(this),50)
        },false)
    }
}
export default LoadMore;