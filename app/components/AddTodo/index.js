import React from 'react';

export default class AddTodo extends React.Component {
  render() {

    const { todo, submit, update } = this.props;

    return (
      <form onSubmit={(e) => { e.preventDefault();  return submit(todo.task); } }>
        <input type="text" value={todo.task} onChange={(e) => update(e.target.value)}/>
        <button type="submit">Add todo</button>
      </form>
    )
  }
}
