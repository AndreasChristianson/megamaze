import React from 'react'
import styled from 'styled-components'
import { columns, pixelHeight, pixelWidth, rows } from '../constants/grid'

const Line = styled.line.attrs(({
  x1,
  x2,
  y1,
  y2
}) => ({
  x1,
  x2,
  y1,
  y2
}))`
  stroke: #999;
`

export const Grid = (props) => (
  <>
    {new Array(rows + 1).fill(true).map((_, index) => (
      <Line
        key={index}
        y1={(index / rows) * pixelHeight}
        y2={(index / rows) * pixelHeight}
        x1="0%"
        x2="100%"
      />
    ))}
    {new Array(columns + 1).fill(true).map((_, index) => (
      <Line
        key={index}
        x1={(index / columns) * pixelWidth}
        x2={(index / columns) * pixelWidth}
        y1="0%"
        y2="100%"
      />
    ))}
  </>
)
