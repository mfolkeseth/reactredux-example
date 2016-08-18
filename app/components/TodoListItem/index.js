import React from 'react';

export default class TodoListItem extends React.Component {
  render() {

    const { todo, index, toggle } = this.props;

    return(
      <label>
          <input type="checkbox" checked={todo.done} onChange={() => toggle(index)} />
          {todo.task}
      </label>
    )
  }
}
