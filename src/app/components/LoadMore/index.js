import React from "react";
import './style.css';
class LoadMore extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="load-more" ref={(ref)=>{
                this.ele=ref
            }}>
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
        window.addEventListener('scroll',this.loadingDate.bind(this),false)
    }
    loadingDate(){
        // 节流
        function callBack(){
            const loadMoreHeight=this.ele.getBoundingClientRect().height;
            const loadMoreTop=this.ele.getBoundingClientRect().top;    
            const windowHeight=window.screen.height;
            if(loadMoreTop<=windowHeight){
                this.loadMoreHandle();
            }
            
        }
        if(this.props.isLoadingMore){
            return;
        }
        if(this.loading){
            clearTimeout(this.loading)
        }
        this.loading=setTimeout(callBack.bind(this),50)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.loadingDate.bind(this),false)
    }
}
export default LoadMore;