import React, { PropTypes } from 'react';

const TodoListItem = React.createClass({

  propTypes: {
    index: PropTypes.number.isRequired,
    toggle: PropTypes.func.isRequired,
    todo: PropTypes.shape({
      task: PropTypes.string.isRequired,
      done: PropTypes.bool
    }),

  },

  handleToggle() {
    const { index, toggle } = this.props;
    toggle(index);
  },

  render() {

    const { todo } = this.props;

    return(
      <label>
        <input type="checkbox" checked={todo.done} onChange={this.handleToggle} />
        {todo.task}
      </label>
    );
  }
});

export default TodoListItem;
