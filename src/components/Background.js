import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  height: 100vw;
  padding-top: 72px;
  background-color: ${props => props.color ? props.color : 'white'};
`
