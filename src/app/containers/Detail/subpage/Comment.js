import React from 'react';
import * as CommentDataDetail from './CommentData.js';
import Loading from '../../../components/Loading';
import LoadMore from "../../../components/LoadMore";
import CommentList from "../../../components/CommentList";
import './style.css'
class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:[], // 存储列表信息
            hasMore:false, // 记录当前状态下，还没有更多的的数据可供加载
            isLoadingMore:false, // 记录当前状态下，是'加载中...'和还是'点击加载更多'
            page:1   // 记录下一页的页码，首页的页码是 0
        }
    }
    render() {
        const data=this.state.data;
        return (
            <div className="detail-comment-subpage">   
                <h2>用户点评</h2>
                {this.state.data.length?<CommentList data={data}/>:<Loading/>}
                {
                    <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.LoadMoreData.bind(this)} dataLength={this.state.data.length}/>
                }
            </div>
            
        )

    }
    componentDidMount(){
        // 获取首屏数据
        const id=this.props.id;
        this.loadingFirePageData(id)
    }
    loadingFirePageData(id){
        setTimeout(()=>{
            this.setState((preState)=>{
                return {data:preState.data.concat(CommentDataDetail.data)}
            })
        },500)
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
            const result=CommentDataDetail;
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

export default Comment;