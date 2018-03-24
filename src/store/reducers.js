import { combineReducers } from 'redux'
import trip from 'containers/Trip/reducer'

const rootReducer = combineReducers({
  trip,
})

export default rootReducer
