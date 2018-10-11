import { combineReducers } from 'redux'
import quiz from './quiz'
import sidenavstatus from './sidenavstatus'
import thislocation from './thislocation'

export default combineReducers({
  quiz,
  sidenavstatus,
  thislocation
})
