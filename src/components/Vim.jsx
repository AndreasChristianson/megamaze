import React, { useState } from 'react'
import styled from 'styled-components'
import { GridAligned } from './GridAligned'
import vimImage from '../images/vim-tiny.webp'
import { useHotkeys } from 'react-hotkeys-hook'

const HighlightCircle = styled.circle.attrs({
  cx:"50%",
  cy:"50%" ,
  r:"50%"
})`
  stroke: black;
  fill: white;
`

export const Vim = ({ x, y }) => {
  return (
    <GridAligned x={x} y={y} innerElement="svg">
      {/* <HighlightCircle/> */}
      <image href={vimImage} height="100%" width="100%" />
    </GridAligned>
  )
}
