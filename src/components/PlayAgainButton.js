import { Button } from './Button'
import styled from 'styled-components'
import posed from 'react-pose'

const ButtonExtend = styled(Button)`
  margin-top: 1.5em;
`

let startWidth, EndWidth

if (window.matchMedia('(min-width: 575.98px)').matches) {
  startWidth = '500px'
  EndWidth = '250px'
} else {
  startWidth = '350px'
  EndWidth = '225px'
}

export const PlayAgainButton = posed(ButtonExtend)({
  start: {
    width: startWidth,
    opacity: 0
  },
  end: {
    width: EndWidth,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 750,
      delay: 1000
    },
    flip: true
  }
})
