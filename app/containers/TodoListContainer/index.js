import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleTodo, updateValue, addTodo } from '../../actions';

import AddTodo from '../../components/AddTodo';
import TodoListItem from '../../components/TodoListItem';

const TodoListContainer = React.createClass({

  propTypes: {
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateValue: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  },

  render() {

    const { todos, newTodo, addTodo, updateValue, toggleTodo } = this.props;

    return(
      <div>
        <h3>Todo list:</h3>
        <AddTodo todo={newTodo} submit={addTodo} update={updateValue} />
        <ul>
          {todos.map((todo, index) =>
            <li key={index}>
              <TodoListItem toggle={toggleTodo} todo={todo} index={index} />
            </li>
          )}
        </ul>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
    newTodo: state.todo.newTodo
  };
}

export default connect(mapStateToProps,
  { toggleTodo, updateValue, addTodo }
)(TodoListContainer);
