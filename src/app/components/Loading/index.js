import React from 'react';
import './style.css'
class Loading extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {

        return (
            <div className="loading-container">
                <div className="clear-fix ">
                    <span className="icon-share-square-o float-left"></span>
                    <span className="loading-text float-left">数据正在加速赶来</span>
                </div>
            </div>
        )
    }
}

export default Loading;