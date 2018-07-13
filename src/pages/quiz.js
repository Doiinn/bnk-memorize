import React from 'react'
import { Background } from '../components/Background'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import pic from '../statics/pics/bnk48/gen2/small/all-members.jpg'

const QbCover = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 153, 195, 0.5), rgba(0, 0, 0, 0.25)), url(${pic});
  background-size: contain;
  background-position: center;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`

const Quizbox = styled(Box)`
  height: 150px;
  overflow: hidden;
  border: 1px;
  border-color: #FF90C3;
  border-style: solid;
  text-align: right;
  cursor: pointer;
`

const Quizname = styled.h2`
  height: 0px;
  font-size: 36px;
  font-weight: 500;
  /*margin: 15px;*/
  position: relative;
  right: 25px;
  bottom: 100px;
  margin: 0 auto;
  color: white;
  cursor: pointer;
`

export default () => {
  return (
    <Background color="#FFD7F9">
      <Flex flexWrap='wrap' alignItems='center' m={2}>
        <Quizbox width={1 / 1.75}  m='auto'>
          <QbCover></QbCover>
          <Quizname>รู้ไหม ใครเอ่ย ?</Quizname>
        </Quizbox>
      </Flex>
    </Background>
  )
}
