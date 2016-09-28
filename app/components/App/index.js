import React from 'react';

import CounterContainer from '../../containers/CounterContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const App = React.createClass({

  render() {
    return (
      <div className="app">
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
});

export default App;
