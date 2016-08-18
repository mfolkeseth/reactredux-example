import {
  TOGGLE_TODO,
  UPDATE_VALUE,
  ADD_TODO
} from '../constants.js'

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    payload: {
      index: index
    }
  }
}

export function updateValue(value) {
  return {
    type: UPDATE_VALUE,
    payload: {
      task: value
    }
  }
}

export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: {
      task: task,
      done: false
    }
  }
}
