import posed from 'react-pose'
import styled from 'styled-components'

const animated = posed.div({
  start: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 0,
      duration: 500
    },
    opacity: 0
  },
  end: {
    scale: 1,
    transition: { ease: 'easeOut', duration: 500 },
    opacity: 1
  }
})

export const QuizImage = styled(animated)`
  /* 720p = 275px */
  /* 1080p = 460px */
  width: 20vw;
  /* 720p = 347px */
  /* 720p = 581px */
  height: 52vh;
  margin: 1.5em auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  outline: 0.5em;
  outline-color: #FF90C3;
  outline-style: solid;

  @media (max-width: 575.98px) {
    width: 66vw;
    height: 50vh;
  }
`
