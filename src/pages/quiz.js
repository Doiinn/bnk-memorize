import React from 'react'
import { connect } from 'react-redux'
import { Background } from '../components/Background'
import { Gap } from '../components/Gap'
import { QuizBox } from '../components/Quizbox'
import { NavLink } from 'react-router-dom'
import { updateLocation } from '../actions'
import picGen1 from '../statics/pics/bnk48/gen1/all-members.jpg'
import picGen2 from '../statics/pics/bnk48/gen2/small/all-members.jpg'

const Quiz = ({ location, sidenavStatus, dispatch }) => {
  const removeUnderline = {
    textDecoration: 'none'
  }

  dispatch(updateLocation(location.pathname))

  return (
    <Background color="#FFD7F9" marginLeft={sidenavStatus} pose={sidenavStatus === false ? 'start' : 'end'}>
      <Gap />
      <NavLink to="/quiz/1" style={removeUnderline}><QuizBox quizname='รู้ไหม ใครเอ่ย ? (รุ่น 1)' quizpic={picGen1}></QuizBox></NavLink>
      <NavLink to="/quiz/2" style={removeUnderline}><QuizBox quizname='รู้ไหม ใครเอ่ย ? (รุ่น 2)' quizpic={picGen2}></QuizBox></NavLink>
    </Background>
  )
}

const mapStateToProps = state => ({
  message: 'This is message from mapStateToProps',
  sidenavStatus: state.sidenavstatus || false,
  thislocation: state.thislocation || '/'
})

const AppWithConnect = connect(mapStateToProps)(Quiz)

export default AppWithConnect
