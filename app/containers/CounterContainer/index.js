import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../../actions';

import Counter from '../../components/Counter';

const CounterContainer = React.createClass({

  propTypes: {
    number: PropTypes.number.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired
  },

  render() {
    const { number, increaseCounter, decreaseCounter } = this.props;

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
  };
}

export default connect(mapStateToProps,
  {
    increaseCounter,
    decreaseCounter
  }
)(CounterContainer);
