import React from 'react'
import styled from 'styled-components'
import { columns, rows } from '../constants/grid'
import { GridAligned } from './GridAligned'

const GridBox = styled(GridAligned)`
  border: 1px solid darkgrey;
`

export const Grid = (props) => (
  <>
    {new Array(rows * columns).fill(true).map((_, index) => (
      <GridBox key={index} x={Math.floor(index / rows)} y={index % columns} />
    ))}
  </>
)
