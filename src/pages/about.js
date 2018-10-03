import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'

const About = ({ sidenavStatus }) => (
  <Background color="#D7FFFF" marginLeft={sidenavStatus}>
    <Gap />
    <h1>About</h1>
  </Background>
)

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false
})

const AppWithConnect = connect(mapStateToProps)(About)

export default AppWithConnect
