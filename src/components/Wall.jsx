import React, { useState } from 'react'
import styled from 'styled-components'
import { GridAligned } from './GridAligned'
import vimImage from '../images/vim-tiny.webp'
import { useHotkeys } from 'react-hotkeys-hook'
import { makeRange } from '../array-generation'

const WallRect = styled.rect.attrs({})`
  fill: black;
  fill-opacity: 0.4;
  stroke: black;
`

export const Wall = ({ area: { xMin, xMax, yMin, yMax } }) => {
  return (
    <GridAligned
      x={xMin}
      y={yMin}
      width={xMax - xMin + 1}
      height={yMax - yMin + 1}
      innerElement={WallRect}
    />
  )
}
