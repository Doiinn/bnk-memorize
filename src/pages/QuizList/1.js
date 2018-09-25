import React from 'react'
import { Background } from '../../components/Background'
import styled from 'styled-components'
import {Flex, Box} from 'grid-styled'
import posed from 'react-pose'
import SplitText from 'react-pose-text'
import './styles.css'
import member from '../../quiz-data/bnk-gen2.json'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const dataName = (member.data).map((values, index, array) => {
  return values.name
})

const animatedImg = posed.div({
  start: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 0,
      duration: 500
    },
    opacity: 0
  },
  end: {
    scale: 1,
    transition: { ease: 'easeOut', duration: 500 },
    opacity: 1
  }
})

const Img = styled(animatedImg)`
  width: 20vw;
  height: 52vh;
  margin: 1.5em auto;
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
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  :hover {
    background-color: #FF99C3;
    color: white;
  }
`
// eslint-disable-next-line
const answer = (test) => (e) => {
  alert(test)
}

let ansHistory = []

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
})

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: #FF90C3;
  text-align: center;
  display: inline-block;
`

const ScoreText = styled(Square)`
  width: 300px;
  height: 75px;
  background: #FF90C3;
  text-align: center;
  display: block;
  float: right;
`

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 50
  }
}

let selectPic = getRandomInt(2)

const TimeoutMask = styled.div`
  background-color: rgba(0,0,0,0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: ${props => props.timer > 0 ? 'none' : 'block'};
`

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.randomChoice = this.randomChoice.bind(this)
    this.answer = this.answer.bind(this)
    this.state = {
      answer: 0,
      choice: [],
      timer: 20,
      score: 0,
      isPicShow: false
    }
    this.tick = this.tick.bind(this)
    this.tick()
  }

  componentDidMount() {
    this.randomChoice()
  }

  tick() {
    this.timer = setInterval(() => {
      if (this.state.timer > 1) {
        this.setState({timer: this.state.timer - 1})
      } else {
        this.setState({timer: 0})
        clearInterval(this.timer)
      }
    }, 1000)
  }

  randomChoice() {
    let choice = []
    console.log(ansHistory)
    while (choice.length !== 4) {
      let inRandom = getRandomInt(27)
      if (choice.indexOf(inRandom) === -1) {
        choice.push(inRandom)
      }
    }

    let answer = choice[getRandomInt(4)]
    if (ansHistory.length >= 7) {
      ansHistory.shift()
    }

    while (ansHistory.includes(answer)) {
      console.log('Answer: ' + answer)
      answer = choice[getRandomInt(4)]
    }

    ansHistory.push(answer)
    selectPic = getRandomInt(2)
    console.log('answer: ' + answer)
    this.setState({answer: answer, choice: choice, isPicShow: true})
  }

  answer(choose) {
    if (choose === dataName[this.state.answer] && this.state.timer > 0) {
      this.setState({score: this.state.score + 1})
    }

    this.setState({isPicShow: false})

    setTimeout(() => {
      this.randomChoice()
    }, 350)
  }

  render() {
    return (
      <Background color="#FFD7F9">
        <TimeoutMask timer={this.state.timer}></TimeoutMask>
        <Flex>
          <Box mt={3} ml={3} width={1 / 4}>
            <StyledSquare pose={'idle'}><span id="timerNum"><SplitText initialPose="exit" pose="enter" charPoses={charPoses}>{this.state.timer.toString()}</SplitText></span></StyledSquare>
          </Box>
          <Box m='auto' width={2 / 4}>
            <Img src={member.data[this.state.answer].pic[selectPic]}alt="Who ?" pose={this.state.isPicShow ? 'end' : 'start'} />
          </Box>
          <Box mt={3} mr={3} width={1 / 4}>
            <ScoreText><span id="scoreNum">Score: <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>{this.state.score.toString()}</SplitText></span></ScoreText>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx='14em' mt={3} mb={2}>
          <Box width={1 / 4} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, dataName[this.state.choice[0]])}>{dataName[this.state.choice[0]]}</ChoiceButton>
          </Box>
          <Box width={1 / 4} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, dataName[this.state.choice[1]])}>{dataName[this.state.choice[1]]}</ChoiceButton>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx='14em' mt={4}>
          <Box width={1 / 4} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, dataName[this.state.choice[2]])}>{dataName[this.state.choice[2]]}</ChoiceButton>
          </Box>
          <Box width={1 / 4} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, dataName[this.state.choice[3]])}>{dataName[this.state.choice[3]]}</ChoiceButton>
          </Box>
        </Flex>
      </Background>
    )
  }
}

export default Question
