import { Button } from './Button'
import styled from 'styled-components'
import posed from 'react-pose'

const ButtonExtend = styled(Button)`
  margin-top: 1.5em;
`

export const PlayAgainButton = posed(ButtonExtend)({
  start: {
    width: '500px',
    opacity: 0
  },
  end: {
    width: '250px',
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 750,
      delay: 1000
    },
    flip: true
  }
})
