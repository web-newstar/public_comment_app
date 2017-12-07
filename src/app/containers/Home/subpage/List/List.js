import React from 'react';
import "./style.css";
import * as ListData from './ListData';
import ListComponent from '../../../../components/List'
import LoadMore from "../../../../components/LoadMore"
class List extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            data:[], // 存储列表信息
            hasMore:false, // 记录当前状态下，还没有更多的的数据可供加载
            isLoadingMore:false, // 记录当前状态下，是'加载中...'和还是'点击加载更多'
            page:1   // 记录下一页的页码，首页的页码是 0
        }
    }
    render(){
        const data=this.state.data;
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.data.length?<ListComponent data={data}/>:<div>加载中...</div>}
                {
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.LoadMoreData.bind(this)} dataLength={this.state.data.length}/>
                }
            </div>
        )
    }
    componentDidMount(){
        // 获取首屏数据
        this.loadFirstPageData()
    }
    // 获取首屏数据
    loadFirstPageData(){
        const cityName=this.props.cityName;
        // 假设获取后端数据，待处理
        setTimeout(()=>{
            const result=ListData;
            this.resultHandle(result);
        },300)
    }
    // 加载更多数据
    LoadMoreData(){
        // 记录状态
        this.setState({
            isLoadingMore:true
        })
        const cityName=this.props.cityName;
        const page=this.state.page //下一页的页码

        // 假设获取后端数据，待处理
        setTimeout(()=>{
            const result=ListData;
            this.resultHandle(result);
            // 增加page的基数
            this.setState((preState)=>{
                return {page:preState.page+1,isLoadingMore:false}
            })
        },300)

    }

    // 数据处理的函数
    resultHandle(result){
        const hasMore=result.hasMore;
        const data=result.data;

        // 存储
        this.setState((preState)=>{
            return {data:preState.data.concat(data),hasMore:hasMore}
        })
    }
}
export default List