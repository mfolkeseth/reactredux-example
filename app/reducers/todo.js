import {
  TOGGLE_TODO,
  UPDATE_VALUE,
  ADD_TODO
} from '../constants.js'

const initialState = {
  todos: [
    {
      task: 'Clean the garage',
      done: false
    },
    {
      task: 'Write a boot',
      done: true
    },
    {
      task: 'Feed the cat',
      done: false
    }
  ],
  newTodo: {
    task: ''
  }
}

export default function todo(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          return {
            task: todo.task,
            done: index === action.payload.index ? !todo.done : todo.done
          }
        })
      }
    case UPDATE_VALUE:
      return {
        ...state,
        newTodo: { task: action.payload.task }
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ],
        newTodo: { task: '' }
      }
    default:
      return state;
  }
}
