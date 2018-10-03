import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'

const Home = ({ sidenavStatus }) => (
  <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'start' : 'end'}>
    <Gap />
    <h1>Home</h1>
  </Background>
)

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false
})

const AppWithConnect = connect(mapStateToProps)(Home)

export default AppWithConnect
