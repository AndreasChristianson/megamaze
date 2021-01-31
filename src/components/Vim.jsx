import React, { useState } from 'react'
import styled from 'styled-components'
import { GridAligned } from './GridAligned'
import vimImage from '../images/vim-tiny.webp'
import { useHotkeys } from 'react-hotkeys-hook'
import { columns, rows } from '../constants/grid'

const VimDisplay = styled(GridAligned)`
  background-image: url(${vimImage});
  background-size: 100% 100%;
`

export const Vim = ({x: initialX, y: initialY}) => {
  const [vimPosition, setVimPosition] = useState({
    x: initialX,
    y: initialY,
  })
  const bound = (value, lowerBound, upperBound) =>
    Math.min(Math.max(value, lowerBound), upperBound)
  const boundedIncrement = (deltaX, deltaY) =>
    setVimPosition(({ x, y }) => {
      const newX = bound(deltaX + x, 0, rows - 1)
      const newY = bound(deltaY + y, 0, columns - 1)

      return {
        x: newX,
        y: newY,
      }
    })
    useHotkeys('Up, w, k', () => boundedIncrement(0, -1));
    useHotkeys('Down, s, j', () => boundedIncrement(0, 1));
    useHotkeys('Left, q, a, h', () => boundedIncrement(-1, 0));
    useHotkeys('Right, d, e, l', () => boundedIncrement(1, 0));

  return <GridAligned {...vimPosition} innerElement="svg">
    <image href={vimImage} height="100%" width="100%" />
  </GridAligned>
}
