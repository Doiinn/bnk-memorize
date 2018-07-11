import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  background-color: #C995C1;
  font-family: 'Mitr', sans-serif;
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
              <Link to="/" style={removeUnderline}><ButtonMenu>หน้าแรก</ButtonMenu></Link>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <Link to="/quiz" style={removeUnderline}><ButtonMenu>คำถาม</ButtonMenu></Link>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <Link to="/stat" style={removeUnderline}><ButtonMenu>สถิติ</ButtonMenu></Link>
            </Box>
            <Box p={2} width={1 / 8} m='auto'>
              <Link to="/about" style={removeUnderline}><ButtonMenu>เกี่ยวกับ</ButtonMenu></Link>
            </Box>
          </Flex>
        </Header>
        <Router />
      </div>
    )
  }
}

export default App
