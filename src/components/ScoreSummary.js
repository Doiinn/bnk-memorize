import styled from 'styled-components'
import posed from 'react-pose'

const animatedScoreSummary = posed.div({
  start: {
    y: -75,
    opacity: 0,
    transition: {
      delay: 250
    },
    height: 0
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 750,
      ease: 'easeOut',
      delay: 250
    },
    height: 'auto',
    flip: true
  }
})

export const ScoreSummary = styled(animatedScoreSummary)`
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
  @media (max-width: 575.98px) {
    width: 85%;
    font-size: 22px;
  }
`
