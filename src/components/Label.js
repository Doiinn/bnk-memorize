import styled from 'styled-components'

export const Label = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  text-align: ${props => props.textAlign || 'center'};
  display: ${props => props.block || 'block'};
  float: ${props => props.float || 'center'};
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`
