import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

// action creators
export const incrementCounter = () => {
  return {
    // type is required
    type: INCREMENT_COUNTER
    // payload is optional
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}