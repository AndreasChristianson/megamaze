import React, { Fragment } from 'react'
import styled from 'styled-components'
import { rows, columns, pixelHeight, pixelWidth } from '../constants/grid'

export const GridAligned = ({
  innerElement,
  width = 1,
  height = 1,
  x,
  y,
  children,
  ...props
}) => {
  const xPx = (x * pixelHeight) / rows
  const yPx = (y * pixelWidth) / columns
  const translate = `translate(${xPx} ${yPx})`
  const widthPx = `${(width * pixelWidth) / columns}px`
  const heightPx = `${(height * pixelHeight) / rows}px`
  const Inner = innerElement
  return (
    <g transform={translate}>
      <Inner width={widthPx} height={heightPx} {...props}>
        {children}
      </Inner>
    </g>
  )
}
