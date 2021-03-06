import { createReducer } from '../../app/common/util/reducerUtil'
// import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './testConstants'

const initialState = {
  data: 420
}

// update the store
export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 }
}

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 }
}

// switch based
// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 }
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 }
//     default:
//       return state
//   }
// }

export default createReducer(initialState, {
  INCREMENT_COUNTER: incrementCounter,
  DECREMENT_COUNTER: decrementCounter
})
