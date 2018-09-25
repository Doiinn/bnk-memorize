import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Router from './routes'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React ya</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

const Header = styled.nav`
  background-color: #E5AADC;
  color: white;
  position: fixed;
  top: 0;
  width: 100vw;
`

const Label = styled.h1`
  margin: 0px 0px;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
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
`
const removeUnderline = {
  textDecoration: 'none'
}

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Flex flexWrap='wrap' alignItems='center'>
            <Box p={2} width={1 / 3}>
              <Label>BNK MEMORIZE</Label>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <NavLink exact to="/" activeClassName="is-active" style={removeUnderline}><ButtonMenu>หน้าแรก</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <NavLink to="/quiz" activeClassName="is-active" style={removeUnderline}><ButtonMenu>คำถาม</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <NavLink to="/stat" activeClassName="is-active" style={removeUnderline}><ButtonMenu>สถิติ</ButtonMenu></NavLink>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <NavLink to="/about" activeClassName="is-active" style={removeUnderline}><ButtonMenu>เกี่ยวกับ</ButtonMenu></NavLink>
            </Box>
          </Flex>
        </Header>
        <Router />
      </div>
    )
  }
}

export default App
