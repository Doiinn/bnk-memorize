import React from 'react'
import { connect } from 'react-redux'
import { sidenavmenu } from './actions'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import posed from 'react-pose'
import Router from './routes'
import './index.css'
import { ConnectedRouter } from 'connected-react-router'

const animatedNav = posed.nav({
  start: {
    marginLeft: 0
  },
  end: {
    marginLeft: '225px'
  }
})

const Header = styled(animatedNav)`
  width: 100vw;
  height: 72px;
  background-color: #E5AADC;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1;
  margin-left: ${props => props.marginLeft === true ? '225px' : '0'}

  @media (max-width: 991.98px) {

  }


  @media (max-width: 575.98px) {

  }
`

const animated = posed.div({
  start: {
    marginLeft: 0
  },
  end: {
    marginLeft: '225px'
  }
})

const Sidenav = styled(animated)`
  width: 225px;
  height: 100vh;
  background-color: #ffe3fb;
  position: absolute;

  @media (min-width: 831.98px) {
    display: none;
  }
}
`

const Label = styled.h1`
  margin: 0px 0px;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 991.98px) {
    font-size: 26px;
    margin-top: 7px;
  }
  @media (max-width: 767.98px) {

  }
  @media (max-width: 575.98px) {

  }
`

const removeUnderline = {
  textDecoration: 'none'
}

const App = ({history, sidenavStatus, thislocation, dispatch}) => {

  window.addEventListener('resize', console.log(window.innerWidth))

  const ButtonMenu = styled.div`
    color: ${props => props.path === thislocation ? 'white' : 'black'};
    background-color: ${props => props.path === thislocation ? ' #FF99C3' : 'white'};
    text-align: center;
    cursor: pointer;
    padding: 5px;
    outline: 3px;
    outline-color: #FF90C3;
    outline-style: solid;
    :hover {
      background-color: #FF99C3;
      color: white;
    }
    @media (max-width: 831.98px) {
      display: none;
    }
`
  const ButtonSideMenu = styled.div`
    color: ${props => props.path === thislocation ? 'white' : 'black'};
    background-color: ${props => props.path === thislocation ? ' #FF99C3' : 'white'};
    text-align: center;
    cursor: pointer;
    padding: 5px;
    outline: 3px;
    outline-color: #FF90C3;
    outline-style: solid;
    :hover {
      background-color: #FF99C3;
      color: white;
    }
    @media (min-width: 831.98px) {
      display: none;
    }
  `

  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Sidenav>
          <Flex flexWrap='wrap' alignItems='center'>
            <Box p={2} width={1} m='auto'>
              <ButtonSideMenu path='/' onClick={() => { dispatch(sidenavmenu()); history.push('/') }}>หน้าแรก</ButtonSideMenu>
            </Box>
            <Box p={2} width={1} m='auto'>
              <ButtonSideMenu path='/quiz' onClick={() => { dispatch(sidenavmenu()); history.push('/quiz') }}>คำถาม</ButtonSideMenu>
            </Box>
            <Box p={2} width={1} m='auto'>
              <ButtonSideMenu path='/stat' onClick={() => { dispatch(sidenavmenu()); history.push('/stat') }}>สถิติ</ButtonSideMenu>
            </Box>
            <Box p={2} width={1} m='auto'>
              <ButtonSideMenu path='/about' onClick={() => { dispatch(sidenavmenu()); history.push('/about') }}>เกี่ยวกับ</ButtonSideMenu>
            </Box>
          </Flex>
        </Sidenav>
        <Header marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'start' : 'end'}>
          <Flex flexWrap='wrap' alignItems='center'>
            <Box p={2} width={[1, 1, 1 / 3]}>
              <i className="material-icons" id="mobile-menu" onClick={() => dispatch(sidenavmenu())}>menu</i>
              <Label>BNK MEMORIZE</Label>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink exact to="/" style={removeUnderline}><ButtonMenu path='/'>หน้าแรก</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/quiz" style={removeUnderline}><ButtonMenu path='/quiz'>คำถาม</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/stat" style={removeUnderline}><ButtonMenu path='/stat'>สถิติ</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/about" style={removeUnderline}><ButtonMenu path='/about'>เกี่ยวกับ</ButtonMenu></NavLink>
            </Box>
          </Flex>
        </Header>
        <Router />
      </React.Fragment>
    </ConnectedRouter>
  )
}

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false,
  thislocation: state.thislocation || '/'
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect
