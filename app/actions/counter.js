import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../constants.js';

export function increaseCounter() {
  return {
    type: INCREASE_COUNTER,
    payload: {
      increase: 1
    }
  }
}

export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER,
    payload: {
      decrease: 1
    }
  }
}
