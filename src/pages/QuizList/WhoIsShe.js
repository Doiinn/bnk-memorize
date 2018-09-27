import React from 'react'
import { Background } from '../../components/Background'
import { Timer, animatedConfig } from '../../components/Timer'
import { QuizImage } from '../../components/QuizImage'
import { ChoiceButton } from '../../components/ChoiceButton'
import { ScoreLabel } from '../../components/ScoreLabel'
import { TimeoutLabel } from '../../components/TimeoutLabel'
import { ResultScoreLabel } from '../../components/ResultScoreLabel'
import { TimeoutMask } from '../../components/TimeoutMask'
import { ScoreSummary } from '../../components/ScoreSummary'
import { PlayAgainButton } from '../../components/PlayAgainButton'
import { BackToMainButton } from '../../components/BackToMainButton'
import { Flex, Box } from 'grid-styled'
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

let ansHistory = []
let selectPic = getRandomInt(2)

const removeUnderline = {
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '1.5em'
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
      answer = choice[getRandomInt(4)]
    }

    ansHistory.push(answer)
    selectPic = getRandomInt(2)
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
              <TimeoutLabel width='60%' background='#d63c3d' pose={this.state.timer > 0 ? 'start' : 'end'}>Time's up</TimeoutLabel>
              <ResultScoreLabel width='60%' background='#FF90C3' pose={this.state.timer > 0 ? 'start' : 'end'}>Your Score: {this.state.score.toString()}</ResultScoreLabel>
              <ScoreSummary pose={this.state.timer > 0 ? 'start' : 'end'}>
                <p className="summary-text">Answered: {this.state.correct + this.state.wrong}</p>
                <p className="summary-text">Correct: {this.state.correct}</p>
                <p className="summary-text">Wrong: {this.state.wrong}</p>
                <p className="summary-text">Accurate rate: {((this.state.correct / (this.state.correct + this.state.wrong)) * 100).toFixed(2)}%</p>
              </ScoreSummary>
              <PlayAgainButton onClick={this.resetState} pose={this.state.timer > 0 ? 'start' : 'end'}>Try Again</PlayAgainButton>
              <Link to="/quiz" style={removeUnderline}><BackToMainButton pose={this.state.timer > 0 ? 'start' : 'end'}>Back to quiz page</BackToMainButton></Link>
            </Box>
          </Flex>
        </TimeoutMask>
        <Flex>
          <Box mt={3} ml={3} width={1 / 4}>
            <Timer pose={'idle'}><span id="timerNum"><SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.state.timer.toString()}</SplitText></span></Timer>
          </Box>
          <Box m='auto' width={2 / 4}>
            <QuizImage src={member.data[this.state.answer].pic[selectPic]}alt="Who ?" pose={this.state.isPicShow ? 'end' : 'start'} />
          </Box>
          <Box mt={3} mr={3} width={1 / 4}>
            <ScoreLabel width='300px' height='75px' background='#FF90C3'><span id="scoreNum">Score: <SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.state.score.toString()}</SplitText></span></ScoreLabel>
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
