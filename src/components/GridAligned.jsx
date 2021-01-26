import React from 'react'
import styled from 'styled-components'
import {rows, columns} from '../constants/grid'

export const GridAligned = styled.div`
  width: ${({ width = 1 }) => width * 100/columns}%;
  height: ${({ height = 1 }) => height * 100/rows}%;
  top: ${({ x }) => x * 100/rows}%;
  left: ${({ y }) => y * 100/columns}%;
  position: absolute;
  box-sizing: border-box;
`
