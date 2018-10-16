import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../../components/Background'
import { Gap } from '../../components/Gap'
import { Timer, animatedConfig } from '../../components/Timer'
import { MiniTimer } from '../../components/MiniTimer'
import { QuizImage } from '../../components/QuizImage'
import { ChoiceButton } from '../../components/ChoiceButton'
import { ScoreLabel } from '../../components/ScoreLabel'
import { MiniScoreLabel } from '../../components/MiniScoreLabel'
import { TimeoutLabel } from '../../components/TimeoutLabel'
import { ResultScoreLabel } from '../../components/ResultScoreLabel'
import { TimeoutMask } from '../../components/TimeoutMask'
import { ScoreSummary } from '../../components/ScoreSummary'
import { PlayAgainButton } from '../../components/PlayAgainButton'
import { BackToMainButton } from '../../components/BackToMainButton'
import { Flex, Box } from 'grid-styled'
import SplitText from 'react-pose-text'
import './styles.css'
import { Link } from 'react-router-dom'
import { decreaseSecond, timeOut, correct, wrong, closePic, randomChoice, reset, updateLocation } from '../../actions'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

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
    this.props.updateLocation(this.props.location.pathname)
    this.memberSet = this.props.data
    this.dataName = (this.memberSet.data).map((values, index, array) => {
      return values.name[0]
    })
    this.randomChoice = this.randomChoice.bind(this)
    this.answer = this.answer.bind(this)
    this.tick = this.tick.bind(this)
    this.resetState = this.resetState.bind(this)
    this.tick()
    this.reloadCheck = (e) => {
      e.preventDefault()
      e.returnValue = ''
    }
  }

  componentDidMount() {
    this.props.reset()
    if (this.props.gen === '1') {
      this.member = 25
      this.photoset = 6
    } else if (this.props.gen === '2') {
      this.member = 27
      this.photoset = 2
    }
    this.randomChoice()
    window.addEventListener('beforeunload', this.reloadCheck)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.props.reset()
    window.removeEventListener('beforeunload', this.reloadCheck)
  }

  resetState() {
    this.props.reset()
    setTimeout(() => {
      this.randomChoice()
    }, 250)

    this.tick()
  }

  tick() {
    this.timer = setInterval(() => {
      if (this.props.quiz.timer > 1) {
        this.props.decreaseSecond()
      } else {
        this.props.timeOut()
        clearInterval(this.timer)
      }
    }, 1000)
  }

  randomChoice() {
    let choice = []
    while (choice.length !== 4) {
      let inRandom = getRandomInt(this.member)
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
    selectPic = getRandomInt(this.photoset)
    this.props.randomChoice(answer, choice)
  }

  answer(choose) {
    if (choose === this.dataName[this.props.quiz.answer] && this.props.quiz.timer > 0) this.props.correct()
    else this.props.wrong()

    this.props.closePic()

    setTimeout(() => {
      this.randomChoice()
    }, 350)
  }

  render() {
    return (
      <Background color="#FFD7F9" marginLeft={this.props.sidenavStatus} pose={this.props.sidenavStatus === false ? 'bgStart' : 'bgEnd'}>
        <Gap />
        <TimeoutMask timer={this.props.quiz.timer}>
          <Flex>
            <Box m='auto' py={10} width={[1, 1, 2 / 4]}>
              <TimeoutLabel width='60%' background='#d63c3d' pose={this.props.quiz.timer > 0 ? 'start' : 'end'}>Time's up</TimeoutLabel>
              <ResultScoreLabel width='60%' background='#FF90C3' pose={this.props.quiz.timer > 0 ? 'start' : 'end'}>Your Score: {this.props.quiz.score.toString()}</ResultScoreLabel>
              <ScoreSummary pose={this.props.quiz.timer > 0 ? 'start' : 'end'}>
                <p className="summary-text">Answered: {this.props.quiz.correct + this.props.quiz.wrong}</p>
                <p className="summary-text">Correct: {this.props.quiz.correct}</p>
                <p className="summary-text">Wrong: {this.props.quiz.wrong}</p>
                <p className="summary-text">Accurate rate: {((this.props.quiz.correct / (this.props.quiz.correct + this.props.quiz.wrong)) * 100).toFixed(2)}%</p>
              </ScoreSummary>
              <PlayAgainButton onClick={this.resetState} pose={this.props.quiz.timer > 0 ? 'start' : 'end'}>Try Again</PlayAgainButton>
              <Link to="/quiz" style={removeUnderline}><BackToMainButton pose={this.props.quiz.timer > 0 ? 'start' : 'end'}>Back to quiz page</BackToMainButton></Link>
            </Box>
          </Flex>
        </TimeoutMask>
        <Flex>
          <Box mt={3} ml={3} width={[0, 0, 1 / 4]}>
            <Timer pose={'idle'}><span id="timerNum"><SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.props.quiz.timer.toString()}</SplitText></span></Timer>
          </Box>
          <Box m='auto' width={[1, 1, 2 / 4]}>
            <Box m='auto' mt={2} width={[68 / 100, 68 / 100, 0]}>
              <MiniTimer pose={'idle'}><span id="timerNum"><SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.props.quiz.timer.toString()}</SplitText></span></MiniTimer>
              <MiniScoreLabel width='150px' height='50px' background='#FF90C3'><span id="scoreNum">Score: <SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.props.quiz.score.toString()}</SplitText></span></MiniScoreLabel>
            </Box>
            <QuizImage src={this.memberSet.data[this.props.quiz.answer].pic[selectPic]}alt="Who ?" onLoad={() => {console.log(this.dataName[this.props.quiz.answer])}} pose={this.props.quiz.isPicShow ? 'end' : 'start'} />
          </Box>
          <Box mt={3} mr={3} width={[0, 0, 1 / 4]}>
            <ScoreLabel width='300px' height='75px' background='#FF90C3'><span id="scoreNum">Score: <SplitText initialPose="exit" pose="enter" charPoses={animatedConfig}>{this.props.quiz.score.toString()}</SplitText></span></ScoreLabel>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx={[0, 0, '14em']} mt={[2, 2, 3]} mb={2}>
          <Box width={[2 / 5, 2 / 5, 1 / 4]} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, this.dataName[this.props.quiz.choice[0]])}>{this.dataName[this.props.quiz.choice[0]]}</ChoiceButton>
          </Box>
          <Box width={[2 / 5, 2 / 5, 1 / 4]} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, this.dataName[this.props.quiz.choice[1]])}>{this.dataName[this.props.quiz.choice[1]]}</ChoiceButton>
          </Box>
        </Flex>
        <Flex flexWrap='wrap' alignItems='center' mx={[0, 0, '14em']} mt={4}>
          <Box width={[2 / 5, 2 / 5, 1 / 4]} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, this.dataName[this.props.quiz.choice[2]])}>{this.dataName[this.props.quiz.choice[2]]}</ChoiceButton>
          </Box>
          <Box width={[2 / 5, 2 / 5, 1 / 4]} m='auto'>
            <ChoiceButton onClick={this.answer.bind(this, this.dataName[this.props.quiz.choice[3]])}>{this.dataName[this.props.quiz.choice[3]]}</ChoiceButton>
          </Box>
        </Flex>
      </Background>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: 'This is message from mapStateToProps',
    sidenavStatus: state.sidenavstatus || false,
    thislocation: state.thislocation || '/',
    quiz: state.quiz
  }
}

const mapDispatchtoProps = (dispatch) => ({
  decreaseSecond() {
    dispatch(decreaseSecond())
  },
  timeOut() {
    dispatch(timeOut())
  },
  correct() {
    dispatch(correct())
  },
  wrong() {
    dispatch(wrong())
  },
  closePic() {
    dispatch(closePic())
  },
  randomChoice(answer, choice) {
    dispatch(randomChoice(answer, choice))
  },
  reset() {
    dispatch(reset())
  },
  updateLocation(location) {
    dispatch(updateLocation(location))
  }
})

const AppWithConnect = connect(mapStateToProps, mapDispatchtoProps)(Question)

// export default lifecycle(methods)(AppWithConnect)
export default AppWithConnect
