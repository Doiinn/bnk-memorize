import React from 'react'
import { Background } from '../components/Background'
import { QuizBox } from '../components/Quizbox'
import pic from '../statics/pics/bnk48/gen2/small/all-members.jpg'

export default () => {
  return (
    <Background color="#FFD7F9">
      <QuizBox quizname='รู้ไหม ใครเอ่ย ?' quizpic={pic}></QuizBox>
    </Background>
  )
}
