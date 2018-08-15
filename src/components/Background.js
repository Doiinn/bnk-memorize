import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  /* min-height: 87vh; */
  min-height: 100vh;
  padding-top: 72px;
  padding-bottom: 16px;
  margin: 0;
  background-color: ${props => props.color ? props.color : 'white'};
`
