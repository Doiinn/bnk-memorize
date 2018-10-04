import { combineReducers } from 'redux'
import counters from './counters'
import sidenavstatus from './sidenavstatus'
import thislocation from './thislocation'

export default combineReducers({
  counters,
  sidenavstatus,
  thislocation
})
