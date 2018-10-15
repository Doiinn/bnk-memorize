import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { updateLocation } from '../actions'
import { Flex, Box } from 'grid-styled'

const center = {
  textAlign: 'center'
}

const About = ({ location, sidenavStatus, dispatch }) => {
  dispatch(updateLocation(location.pathname))
  return (
    <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'bgStart' : 'bgEnd'}>
      <Gap />
      <Flex alignItems='center'>
        <Box m='auto'>
          <h1 style={center}>About</h1>
          <p style={center}>BNK MEMORIZE Version 0.1</p>
          <p style={center}>Most photo from <a href='https://www.bnk48.com'>www.bnk48.com</a></p>
          <p style={center}>This website made for improve my skill</p>
          <p style={center}>Not for commerce and profile</p>
          <p style={center}>Hosted with ❤ by github</p>
          <p style={center}>Made with react</p>
        </Box>
      </Flex>
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
