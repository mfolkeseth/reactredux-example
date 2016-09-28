import React, { PropTypes } from 'react';

const AddTodo = React.createClass ({
  propTypes: {
    todo: PropTypes.shape({
      task: PropTypes.string.isRequired,
      done: PropTypes.bool
    }),
    submit: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  },

  handleSubmit(event){
    const { todo, submit } = this.props;
    event.preventDefault();
    submit(todo.task);
  },

  handleUpdate(event){
    const { update } = this.props;
    update(event.target.value);
  },

  render() {

    const { todo } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={todo.task} onChange={this.handleUpdate} />
        <button type="submit">Add todo</button>
      </form>
    );
  }
});

export default AddTodo;
