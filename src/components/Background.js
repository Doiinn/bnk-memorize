import styled from 'styled-components'

export const Background = styled.div`
  width: 100vw;
  min-height: 100vw;
  max-height: auto;
  padding-top: 72px;
  padding-bottom: 16px;
  margin-bottom: 0;
  background-color: ${props => props.color ? props.color : 'white'};
`
