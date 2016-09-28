import React, { PropTypes } from 'react';

const Counter = React.createClass({

  propTypes: {
    increaseCounter: PropTypes.func.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
    canDecrease: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired
  },

  render() {
    const { increaseCounter, decreaseCounter, canDecrease, number } = this.props;

    const buttonStyle = {
      padding: '5px 10px'
    };

    const labelStyle = {
      margin: '0 10px'
    };

    return(
      <div>
        <h3>Counter example:</h3>
        <form>
          <button type="button" style={buttonStyle} onClick={decreaseCounter} disabled={canDecrease}>-</button>
          <label style={labelStyle}>{number}</label>
          <button type="button" style={buttonStyle} onClick={increaseCounter}>+</button>
        </form>
      </div>
    );
  }
});

export default Counter;
