import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { updateLocation } from '../actions'

const About = ({ location, sidenavStatus, dispatch }) => {
  dispatch(updateLocation(location.pathname))
  return (
    <Background color="#D7FFFF" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'bgStart' : 'bgEnd'}>
      <Gap />
      <h1>About</h1>
    </Background>
  )
}

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false,
  thislocation: state.thislocation || '/'
})

const AppWithConnect = connect(mapStateToProps)(About)

export default AppWithConnect
