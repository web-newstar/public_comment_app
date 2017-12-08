import React from "react";
import './style.css'
class CurrentCity extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const cityName = this.props.cityName;
        return (
            <div className="current-city">
                <h2>{cityName}</h2>
            </div>
        )
    }
}
export default CurrentCity;