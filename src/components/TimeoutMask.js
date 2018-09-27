import styled from 'styled-components'

export const TimeoutMask = styled.div`
  background-color: rgba(0,0,0,0.75);
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  position: fixed;
  display: ${props => props.timer > 0 ? 'none' : 'block'};
  text-align: center;
`
