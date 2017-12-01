import React from 'react'
import {getAdData} from '../../../fetch/home/home.js'
class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <h1>这是ad</h1>
            </div>
        )
    }
    componentDidMount() {
        const result = getAdData();
        console.log(result)
        // result.then((res) => {
        //     return res.json()
        // }).then((json) => {
        //     const data = json;
        //     if (data.length) {
        //         this.setState({data: data})
        //     }

        // })
    }
}

export default Ad
