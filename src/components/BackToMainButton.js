import { Button } from './Button'
import posed from 'react-pose'

let startWidth, EndWidth

if (window.matchMedia('(min-width: 575.98px)').matches) {
  startWidth = '500px'
  EndWidth = '250px'
} else {
  startWidth = '350px'
  EndWidth = '225px'
}


export const BackToMainButton = posed(Button)({
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
      delay: 1250
    },
    flip: true
  }
})
