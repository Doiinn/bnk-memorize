import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'

const Stat = ({ sidenavStatus }) => (
  <Background color="#FFD7F9" marginLeft={sidenavStatus}>
    <Gap />
    <h1>Stat</h1>
  </Background>
)

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false
})

const AppWithConnect = connect(mapStateToProps)(Stat)

export default AppWithConnect
