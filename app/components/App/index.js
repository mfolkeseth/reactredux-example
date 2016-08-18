import React from 'react';

import CounterContainer from '../../containers/CounterContainer';
import TodoListContainer from '../../containers/TodoListContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}
