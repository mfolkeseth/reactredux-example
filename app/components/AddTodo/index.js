import React from 'react';

const AddTodo = React.createClass ({
  handleSubmit(event){
    const { todo, submit } = this.props;
    event.preventDefault();
    submit(todo.task);
  },

  handleUpdate(event){
    const { update } = this.props;
    update(event.target.value)
  },

  render() {

    const { todo, submit, update } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" value={todo.task} onChange={ this.handleUpdate }/>
        <button type="submit">Add todo</button>
      </form>
    )
  }
});

export default AddTodo;
