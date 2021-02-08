import React from 'react'
import styled from 'styled-components'
import {
  gridPositionPixelsWithJitter,
  gridPositionToMiddlePixels,
} from '../utils/svg-math'

export const Line = styled.line.attrs(({ x1, x2, y1, y2 }) => {
  const start = gridPositionToMiddlePixels({
    x: x1,
    y: y1,
  })

  const end = gridPositionToMiddlePixels({
    x: x2,
    y: y2,
  })

  return {
    x1: start.x,
    x2: end.x,
    y1: start.y,
    y2: end.y,
  }
})``
