import React from 'react'
import { Background } from '../components/Background'
import { QuizBox } from '../components/Quizbox'
import { NavLink } from 'react-router-dom'
import picGen1 from '../statics/pics/bnk48/gen1/all-members.jpg'
import picGen2 from '../statics/pics/bnk48/gen2/small/all-members.jpg'

export default () => {
  const removeUnderline = {
    textDecoration: 'none'
  }

  return (
    <Background color="#FFD7F9">
      <NavLink to="/quiz/1" style={removeUnderline}><QuizBox quizname='รู้ไหม ใครเอ่ย ? (รุ่น 1)' quizpic={picGen1}></QuizBox></NavLink>
      <NavLink to="/quiz/2" style={removeUnderline}><QuizBox quizname='รู้ไหม ใครเอ่ย ? (รุ่น 2)' quizpic={picGen2}></QuizBox></NavLink>
    </Background>
  )
}
