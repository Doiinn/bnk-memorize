import { Label } from './Label'
import styled from 'styled-components'
import posed from 'react-pose'

const LabelExtend = styled(Label)`
  color: #fff;
  font-size: 42px;
  margin: 0.25em auto;
  @media (max-width: 575.98px) {
    font-size: 28px;
    padding: 0.25em 0em;
  }
`

export const ResultScoreLabel = posed(LabelExtend)({
  start: {
    scale: 1.2,
    opacity: 0
  },
  end: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      damping: 3,
      duration: 500
    },
    opacity: 1
  }
})
