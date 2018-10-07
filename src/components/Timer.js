import styled from 'styled-components'

const Timer = styled.div`
  width: 100px;
  height: 100px;
  background: #FF90C3;
  border: 5px solid;
  border-color: #FF90c3;
  text-align: center;
  display: inline-block;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  @media (max-width: 575.98px) {
    display: none
  }
`

const animatedConfig = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: 50
  }
}

export {
  Timer,
  animatedConfig
}
