import React from 'react'
import styled from 'styled-components'
import { rows, columns, pixelHeight, pixelWidth } from '../constants/grid'
import { GridAligned } from './GridAligned'

const Rect = styled.rect.attrs(() => ({
  rx: '1em',
  ry: '1em',
}))``

const Shading = styled(Rect).attrs(({ shadingColor }) => ({
  fill: shadingColor,
  width: '100%',
  height: '100%',
}))`
  fill-opacity: ${({ shadingOpacity }) => shadingOpacity};
`

const Border = styled(Rect).attrs(({ borderColor }) => ({
  fill: 'none',
  'stroke-width': 1,
  stroke: borderColor,
}))`
  stroke-width: 1;
`

export const SvgText = styled.text.attrs(() => ({
  x: '50%',
  y: '50%',
}))`
  dominant-baseline: middle;
  text-anchor: middle;
`

export const Text = ({
  children,
  width,
  height,
  x,
  y,
  onClick,
  borderColor,
  shadingColor,
  shadingOpacity,
  ...props
}) => {
  return (
    <>
      <GridAligned y={y} x={x} width={width} height={height} innerElement="svg" onClick={onClick}>
        {shadingColor ? (
          <Shading
            shadingColor={shadingColor}
            shadingOpacity={shadingOpacity}
            {...props}
          />
        ) : null}
        {children}
      </GridAligned>
      {borderColor ? (
        <GridAligned
          y={y}
          x={x}
          width={width}
          height={height}
          innerElement={Border}
          borderColor={borderColor}
          {...props}
        />
      ) : null}
    </>
  )
}
