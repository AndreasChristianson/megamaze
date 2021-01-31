import React from 'react'
import styled from 'styled-components'
import { pixelHeight, pixelWidth } from '../constants/grid'
import { Grid } from './Grid'

const Svg = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: `0 0 ${pixelHeight} ${pixelWidth}`,
})`
  height: 100%;
  width: 100%;
`

export const Background = (props) => (
  <Svg>
    <Grid />
    <image
      href={props.backgroundImage}
      height={pixelHeight}
      width={pixelWidth}
    />
    {props.children}
  </Svg>
)
