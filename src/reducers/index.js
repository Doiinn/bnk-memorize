import { combineReducers } from 'redux'
import counters from './counters'
import sidenavstatus from './sidenavstatus'

export default combineReducers({
  counters,
  sidenavstatus
})
