import React from 'react';

const TodoListItem = React.createClass({
  render() {

    const { todo, index, toggle } = this.props;

    return(
      <label>
          <input type="checkbox" checked={todo.done} onChange={() => toggle(index)} />
          {todo.task}
      </label>
    )
  }
});

export default TodoListItem;
