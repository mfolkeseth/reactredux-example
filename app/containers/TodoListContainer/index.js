import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo, updateValue, addTodo } from '../../actions';

import AddTodo from '../../components/AddTodo';
import TodoListItem from '../../components/TodoListItem';

const TodoListContainer = React.createClass({

  render() {

    const { todos, newTodo } = this.props;

    return(
      <div>
        <h3>Todo list:</h3>
        <AddTodo todo={newTodo} submit={this.props.addTodo} update={this.props.updateValue}/>
        <ul>
          {todos.map((todo, index) =>
            <li key={index}>
              <TodoListItem toggle={this.props.toggleTodo} todo={todo} index={index}/>
            </li>
          )}
        </ul>
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
    newTodo: state.todo.newTodo
  }
}

export default connect(mapStateToProps,
  { toggleTodo, updateValue, addTodo }
)(TodoListContainer);
