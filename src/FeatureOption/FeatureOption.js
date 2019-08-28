import React, {Component} from 'react';
class FeatureOption extends Component {
    render() {
        return(
            <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={this.props.name}
                checked={this.props.checkedItem === this.props.selected}
                onChange={e => this.props.handleChange(this.props.feature, this.props.item)}
            />
        )
    }
}

export default FeatureOption
