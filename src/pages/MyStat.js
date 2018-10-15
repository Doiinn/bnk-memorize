import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { updateLocation } from '../actions'
import { Flex, Box } from 'grid-styled'

const MyStat = ({ location, sidenavStatus, dispatch }) => {
  dispatch(updateLocation(location.pathname))
  return (
    <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'bgStart' : 'bgEnd'}>
      <Gap />
      <Flex alignItems='center'>
        <Box m='auto'>
          <h1>Coming Soon...</h1>
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

const AppWithConnect = connect(mapStateToProps)(MyStat)

export default AppWithConnect
