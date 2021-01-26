import React from 'react'
import styled from 'styled-components'
import { GridAligned } from './GridAligned'

const ButtonDiv = styled(GridAligned)`
  cursor: pointer;
  border-radius: 1em;
  border: 2px solid black;
  :focus {
    border-color: red;
  }
  background-color: #33333355;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = (props) => (
  <ButtonDiv role="button" {...props}>
    <div>{props.children}</div>
  </ButtonDiv>
)
