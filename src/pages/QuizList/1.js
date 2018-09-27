import React from 'react'
import { Background } from '../../components/Background'
import styled from 'styled-components'
import {Flex, Box} from 'grid-styled'
import posed from 'react-pose'
import SplitText from 'react-pose-text'
import './styles.css'
import member from '../../quiz-data/bnk-gen2.json'
import { Link } from 'react-router-dom'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const dataName = (member.data).map((values, index, array) => {
  return values.name[0]
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
  border: 5px solid;
  border-color: #FF90c3;
  text-align: center;
  display: inline-block;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

const ScoreText = styled(Square)`
  width: 300px;
  height: 75px;
  background: #FF90C3;
  text-align: center;
  display: block;
  float: right;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
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
  background-color: rgba(0,0,0,0.75);
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  position: fixed;
  display: ${props => props.timer > 0 ? 'none' : 'block'};
  text-align: center;
`

const animatedTimeoutTitle = posed.div({
  start: {
    scale: 1.2,
    opacity: 0
  },
  end: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      damping: 3,
      duration: 500
    },
    opacity: 1
  }
})

const TimeoutTitle = styled(animatedTimeoutTitle)`
  width: 60%;
  background-color: #d63c3d;
  color: #fff;
  font-size: 42px;
  margin: 0 auto;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

const ResultScore = styled(animatedTimeoutTitle)`
  width: 60%;
  background-color: #FF90C3;
  color: #fff;
  font-size: 42px;
  margin: 0.25em auto;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`
const animatedScoreSummary = posed.div({
  start: {
    y: -75,
    scale: 1,
    opacity: 0,
    transition: {
      delay: 250
    },
    height: 0
  },
  end: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 750,
      ease: 'easeOut',
      delay: 250
    },
    height: 'auto'
  }
})

const ScoreSummary = styled(animatedScoreSummary)`
  width: 60%;
  background-color: rgba(255,255,255,0.25);
  outline: 7px;
  outline-color: #FF90C3;
  outline-style: solid;
  color: #fff;
  font-size: 26px;
  margin: 1em auto;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`

const animatedButton = posed.div({
  start: {
    width: '500px',
    opacity: 0
  },
  end: {
    width: '250px',
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 750,
      delay: 1000
    }
  }
})

const animatedButton2 = posed.div({
  start: {
    width: '500px',
    opacity: 0
  },
  end: {
    width: '250px',
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 750,
      delay: 1250
    }
  }
})

const PlayAgainButton = styled(animatedButton)`
  width: 250px;
  margin-top: 1.5em;
  margin-left: auto;
  margin-right: auto;
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
const BackToQuizButton = styled(animatedButton2)`
  width: '250px';
  margin-top: 1.5em;
  margin-left: auto;
  margin-right: auto;
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

const removeUnderline = {
  textDecoration: 'none',
  display: 'inline-block'
}

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.randomChoice = this.randomChoice.bind(this)
    this.answer = this.answer.bind(this)
    this.state = {
      answer: 0,
      choice: [],
      timer: 10,
      correct: 0,
      wrong: 0,
      score: 0,
      isPicShow: false
    }
    this.baseState = this.state
    this.tick = this.tick.bind(this)
    this.resetState = this.resetState.bind(this)
    this.tick()
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.randomChoice()
  }

  resetState() {
    this.setState(this.baseState)
    this.randomChoice()
    this.tick()
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
      this.setState({correct: this.state.correct + 1})
      this.setState({score: this.state.score + 1})
    } else {
      this.setState({wrong: this.state.wrong + 1})
    }

    this.setState({isPicShow: false})

    setTimeout(() => {
      this.randomChoice()
    }, 350)
  }

  render() {
    return (
      <Background color="#FFD7F9">
        <TimeoutMask timer={this.state.timer}>
          <Flex>
            <Box m='auto' py={10} width={2 / 4}>
              <TimeoutTitle pose={this.state.timer > 0 ? 'start' : 'end'}>Time's up</TimeoutTitle>
              <ResultScore pose={this.state.timer > 0 ? 'start' : 'end'}>Your Score: {this.state.score.toString()}</ResultScore>
              <ScoreSummary pose={this.state.timer > 0 ? 'start' : 'end'}>
                <p className="summary-text">Answered: {this.state.correct + this.state.wrong}</p>
                <p className="summary-text">Correct: {this.state.correct}</p>
                <p className="summary-text">Wrong: {this.state.wrong}</p>
                <p className="summary-text">Accurate rate: {((this.state.correct / (this.state.correct + this.state.wrong)) * 100).toFixed(2)}%</p>
              </ScoreSummary>
              <PlayAgainButton onClick={this.resetState} pose={this.state.timer > 0 ? 'start' : 'end'}>Try Again</PlayAgainButton>
              <Link to="/quiz" style={removeUnderline}><BackToQuizButton pose={this.state.timer > 0 ? 'start' : 'end'}>Back to quiz page</BackToQuizButton></Link>
            </Box>
          </Flex>
        </TimeoutMask>
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
