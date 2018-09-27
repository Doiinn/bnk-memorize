import React from 'react'
import { Background } from '../components/Background'
import { QuizBox } from '../components/Quizbox'
import { NavLink } from 'react-router-dom'
import pic from '../statics/pics/bnk48/gen2/small/all-members.jpg'

export default () => {
  const removeUnderline = {
    textDecoration: 'none'
  }

  return (
    <Background color="#FFD7F9">
      <NavLink to="/quiz/1" style={removeUnderline}><QuizBox quizname='รู้ไหม ใครเอ่ย ? (รุ่น 2)' quizpic={pic}></QuizBox></NavLink>
    </Background>
  )
}
