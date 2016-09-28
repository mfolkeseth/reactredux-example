import React from 'react';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../../actions'

import Counter from '../../components/Counter'

const CounterContainer = React.createClass({
  render() {
    const {
      number,
      increaseCounter,
      decreaseCounter
    } = this.props;

    return(
      <Counter
        number={number}
        canDecrease={number === 0}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
      />
    );
  }
});

function mapStateToProps(state) {
  return {
    number: state.counter.number,
    canDecrease: state.counter.canDecrease
  }
}

export default connect(mapStateToProps,
  {
      increaseCounter,
      decreaseCounter
  }
)(CounterContainer);
