import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

export const QuizBox = ({quizname, quizpic}) => {
  const QbCover = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    background-image: linear-gradient(rgba(255, 153, 195, 0.5), rgba(0, 0, 0, 0.25)), url(${quizpic});
    background-size: 50%;
    background-position: center;
    position: relative;
    transition: all 0.5s ease;

    &:hover {
      background-size: 55%;
    }

    @media (max-width: 831.98px) {
      background-size: 75%;
        &:hover {
          background-size: 82.5%;
      }
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

  const Quizname = styled.span`
    width: 100%;
    font-size: 36px;
    font-weight: 500;
    color: white;
    text-shadow: 1px 1px 2px black;
    position: absolute;
    right: 20px;
    bottom: 50px;
    margin: 0 auto;
    @media (max-width: 831.98px) {
      font-size: 1.5em;
    }
  `

  return (
    <Flex flexWrap='wrap' alignItems='center' m={[3, 3, 2]}>
      <Quizbox width={[1 / 1.05, 1 / 1.25,  1 / 1.75]} m='auto'>
        <QbCover>
          <Quizname>{quizname}</Quizname>
        </QbCover>
      </Quizbox>
    </Flex>
  )
}
