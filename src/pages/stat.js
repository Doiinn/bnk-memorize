import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { updateLocation } from '../actions'

const Stat = ({ location, sidenavStatus, dispatch }) => {
  dispatch(updateLocation(location.pathname))
  return (
    <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'start' : 'end'}>
      <Gap />
      <h1>Stat</h1>
    </Background>
  )
}

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false,
  thislocation: state.thislocation || '/'
})

const AppWithConnect = connect(mapStateToProps)(Stat)

export default AppWithConnect
