import React, {Component} from 'react'

class FeatureLabel extends Component {
    render() {
        return (
            <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item} ({this.props.cost})
            </label>
        )
    }
}

export default FeatureLabel