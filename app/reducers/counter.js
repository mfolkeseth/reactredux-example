import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../constants.js'

const initialState = {
  number: 0
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        number: state.number + action.payload.increase
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        number: state.number - action.payload.decrease
      }
    default:
      return state;
  }
}
