// lookup table for actions from Redux docs
export const createReducer = (initialState, fnMap) => {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type]
    return handler 
      ? handler(state, payload)
      : state
  }
}