import React, { Fragment } from 'react'
import styled from 'styled-components'
import { rows, columns, pixelHeight, pixelWidth } from '../constants/grid'
import { gridPositionToPixels } from '../utils/svg-math'

export const GridAligned = ({
  innerElement,
  width = 1,
  height = 1,
  x,
  y,
  children,
  ...props
}) => {
  const { x: xPx, y: yPx } = gridPositionToPixels({ x, y })
  const { x: heightPx, y: widthPx } = gridPositionToPixels({
    x: height,
    y: width,
  })
  const translate = `translate(${xPx} ${yPx})`
  const Inner = innerElement
  return (
    <g transform={translate}>
      <Inner width={`${widthPx}px`} height={`${heightPx}px`} {...props}>
        {children}
      </Inner>
    </g>
  )
}
