import React from 'react';

const Counter = React.createClass({
  render() {
    var buttonStyle = {
      padding: '5px 10px'
    };

    var labelStyle = {
      margin: '0 10px'
    };

    return(
      <div>
        <h3>Counter example:</h3>
        <form>
          <button type="button" style={buttonStyle} onClick={() => this.props.decreaseCounter()} disabled={this.props.canDecrease}>-</button>
          <label style={labelStyle}>{this.props.number}</label>
          <button type="button" style={buttonStyle} onClick={() => this.props.increaseCounter()}>+</button>
        </form>
      </div>
    );
  }
});

export default Counter;
