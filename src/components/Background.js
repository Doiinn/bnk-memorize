import styled from 'styled-components'
import posed from 'react-pose'

const animated = posed.div({
  start: {
    marginLeft: 0
  },
  end: {
    marginLeft: '225px'
  }
})

export const Background = styled(animated)`
  width: 100vw;
  min-height: 100%;
  /* min-height: 100vh; */
  /* padding-top: 72px; */
  /* padding-bottom: 16px; */
  margin: 0;
  background-color: ${props => props.color ? props.color : 'white'};
  position: absolute;
  margin-left: ${props => props.marginLeft === true ? '225px' : '0'}
`
