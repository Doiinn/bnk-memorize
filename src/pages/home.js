import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { updateLocation } from '../actions'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 36px;
  @media (max-width: 575.98px) {
    font-size: 24px;
  }
`

const Home = ({location, dispatch, sidenavStatus}) => {
  dispatch(updateLocation(location.pathname))
  return (
    <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'bgStart' : 'bgEnd'}>
      <Gap />
      <Flex alignItems='center'>
        <Box m='auto' px={2}>
          <Text>คลิกที่เมนู "คำถาม" เพื่อเลือกคำถามที่ต้องการเล่น</Text >
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

const AppWithConnect = connect(mapStateToProps)(Home)

export default AppWithConnect
