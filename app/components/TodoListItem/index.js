import React from 'react';

const TodoListItem = React.createClass({

  handleToggle() {
    const { index, toggle } = this.props;
    toggle(index);
  },

  render() {

    const { todo, index, toggle } = this.props;

    return(
      <label>
          <input type="checkbox" checked={todo.done} onChange={this.handleToggle} />
          {todo.task}
      </label>
    )
  }
});

export default TodoListItem;
