import React, {Component} from 'react';

class Summary extends Component {
    render() {
        return(
        <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selectedOption}</div>
            <div className="summary__option__cost">
                {this.props.cost}
             </div>
        </div>
        )
    }
}

export default Summary;