import React from 'react'
import { Background } from '../../components/Background'
import styled from 'styled-components'
import {Flex, Box} from 'grid-styled'
import member from '../../quiz-data/bnk-gen2.json'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export default () => {
  const dataName = (member.data).map((values, index, array) => {
    return values.name
  })
  // eslint-disable-next-line
  const ListItem = (props) => {
    // return <li>{props.value}</li>
    // eslint-disable-next-line
    return <img src={props.value} />
  }

  const Img = styled.div`
    width: 20vw;
    height: 52vh;
    margin: 1.5em 0em;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    outline: 0.5em;
    outline-color: #FF90C3;
    outline-style: solid;
  `

  const ChoiceButton = styled.div`
    font-size: 1.4em;
    color: black;
    background-color: white;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
    outline: 3px;
    outline-color: #FF90C3;
    outline-style: solid;
    :hover {
      background-color: #FF99C3;
      color: white;
    }
  `
  const answer = (test) => (e) => {
    alert(test)
  }

  const NumberList = (props) => {
    const numbers = props.numbers
    let choice = []
    while (choice.length !== 4) {
      let inRandom = getRandomInt(27)
      if (choice.indexOf(inRandom) === -1) {
        choice.push(inRandom)
      }
    }
    const result = choice[getRandomInt(4)]
    console.log(choice)
    return (
      // <ul>
      //   {numbers.map((number) =>
      //     <ListItem key={number.toString()} value={number} />
      //   )}
      // </ul>
      <div>
        <Flex>
          <Box m='auto'>
            <Img src={numbers[result]} alt="Who ?"/>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx='14em' mt={3} mb={2}>
          <Box width={1 / 5} m='auto'>
            <ChoiceButton onClick={answer(dataName[choice[0]])}>{dataName[choice[0]]}</ChoiceButton>
          </Box>
          <Box width={1 / 5} m='auto'>
            <ChoiceButton onClick={answer(dataName[choice[1]])}>{dataName[choice[1]]}</ChoiceButton>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx='14em' mt={4}>
          <Box width={1 / 5} m='auto'>
            <ChoiceButton onClick={answer(dataName[choice[2]])}>{dataName[choice[2]]}</ChoiceButton>
          </Box>
          <Box width={1 / 5} m='auto'>
            <ChoiceButton onClick={answer(dataName[choice[3]])}>{dataName[choice[3]]}</ChoiceButton>
          </Box>
        </Flex>
      </div>
    )
  }
  // for (let index in member.data) {
  //   console.log(member.data[index])
  // }

  const data = (member.data).map((values, index, array) => {
    return values.pic
  })

  return (
    <Background color="#FFD7F9">
      <NumberList numbers={data} />
    </Background>
  )
}
