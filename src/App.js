import React, { Component } from 'react';
import FeatureName from './FeatureName/FeatureName'
import Summary from './Summary/Summary'
import FeatureOption from './FeatureOption/FeatureOption'
import FeatureLabel from './FeatureLabel/FeatureLabel'
import Main from './Main/Main'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  constructor() {
    super();
    this.updateFeature = this.updateFeature.bind(this)
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

 
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <FeatureOption
              id={itemHash}
              name={slugify(feature)}
              feature={feature}
              checkedItem={item.name}
              item={item}
              selected={this.state.selected[feature].name}
              checked={item.name === this.state.selected[feature].name}
              handleChange={(feature, item) => this.updateFeature(feature, item)}
            />
            <FeatureLabel 
              itemHash={itemHash}
              item={item.name}
              cost={USCurrencyFormat.format(item.cost)}
            />
          </div>
        );
      });

      return (
        <FeatureName 
          feature={feature}
          options={options}
          key={featureHash}
          />
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <Summary
          key={featureHash}
          feature={feature}
          selectedOption={selectedOption.name}
          cost={USCurrencyFormat.format(selectedOption.cost)}
          />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <Main 
          features={features}
          summary={summary}
          total={USCurrencyFormat.format(total)}
        /> 
      </div>
    );
  }
}

export default App;
