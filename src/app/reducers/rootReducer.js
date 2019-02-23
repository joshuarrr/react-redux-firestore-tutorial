import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  test: testReducer,
  events: eventReducer
})

export default rootReducer