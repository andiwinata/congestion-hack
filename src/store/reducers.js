import { combineReducers } from 'redux'
import trip from 'containers/Trip/reducer'
import map from 'containers/Map/reducer'

const rootReducer = combineReducers({
  map,
  trip,
})

export default rootReducer
