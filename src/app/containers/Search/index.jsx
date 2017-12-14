import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchHeader from '../../components/SearchHeader';
import SearchList from "./subpage/List/List"
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const params=this.props.match.params;
        const history=this.props.history;
        const cityName=this.props.userinfo.cityName;

        return (
            <div>
                <SearchHeader keyword={params.keyword} history={history}/>
                <SearchList keyword={params.keyword} category={params.Category} cityName={cityName}/>
            </div>
        )
    }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
// export default Search