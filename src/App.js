import React from 'react'
import { connect } from 'react-redux'
import { sidenavmenu } from './actions'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Router from './routes'
import './index.css'
import { ConnectedRouter } from 'connected-react-router'

const Header = styled.nav`
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

const Sidenav = styled.div`
  width: 225px;
  min-height: 100vh;
  background-color: #ffe3fb;
  position: fixed;
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

const ButtonMenu = styled.div`
  color: black;
  background-color: white;
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
  color: black;
  background-color: white;
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

const removeUnderline = {
  textDecoration: 'none'
}

const App = ({history, sidenavStatus, dispatch}) => {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Sidenav>
          <Box p={2} width={1} m='auto'>
            <NavLink exact to="/" activeClassName="is-active" style={removeUnderline}><ButtonSideMenu>หน้าแรก</ButtonSideMenu></NavLink>
          </Box>
          <Box p={2} width={1} m='auto'>
            <NavLink to="/quiz" activeClassName="is-active" style={removeUnderline}><ButtonSideMenu>คำถาม</ButtonSideMenu></NavLink>
          </Box>
          <Box p={2} width={1} m='auto'>
            <NavLink to="/stat" activeClassName="is-active" style={removeUnderline}><ButtonSideMenu>สถิติ</ButtonSideMenu></NavLink>
          </Box>
          <Box p={2} width={1} m='auto'>
            <NavLink to="/about" activeClassName="is-active" style={removeUnderline}><ButtonSideMenu>เกี่ยวกับ</ButtonSideMenu></NavLink>
          </Box>
        </Sidenav>
        <Header marginLeft={sidenavStatus}>
          <Flex flexWrap='wrap' alignItems='center'>
            <Box p={2} width={[1, 1, 1 / 3]}>
              <i className="material-icons" id="mobile-menu" onClick={() => dispatch(sidenavmenu())}>menu</i>
              <Label>BNK MEMORIZE</Label>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink exact to="/" activeClassName="is-active" style={removeUnderline}><ButtonMenu>หน้าแรก</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/quiz" activeClassName="is-active" style={removeUnderline}><ButtonMenu>คำถาม</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/stat" activeClassName="is-active" style={removeUnderline}><ButtonMenu>สถิติ</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={[0, 0, 1 / 8]} m='auto'>
              <NavLink to="/about" activeClassName="is-active" style={removeUnderline}><ButtonMenu>เกี่ยวกับ</ButtonMenu></NavLink>
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
  sidenavStatus: state.sidenavstatus || false
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect
