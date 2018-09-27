import { Button } from './Button'
import posed from 'react-pose'

export const BackToMainButton = posed(Button)({
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
      delay: 1250
    },
    flip: true
  }
})
