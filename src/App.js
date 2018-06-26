import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'
import styled from 'styled-components';
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

const Header = styled.div`
  background-color: #C995C1;
  font-family: 'Mitr', sans-serif;
  color: white;
  `
const Label = styled.h1`
  margin: 0px 0px;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Flex>
            <Box p={1}>
              <Label>BNK MEMORIZE</Label>
            </Box>
          </Flex>
        </Header>
        <Router />
      </div>
    )
  }
}

export default App