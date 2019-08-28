import React, {Component} from 'react';

class Main extends Component {
    render(){
        return(
            <main>
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {this.props.features}
                </form>
                <section className="main__summary">
                    <h2>Your cart</h2>
                    {this.props.summary}
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                            {this.props.total}
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Main