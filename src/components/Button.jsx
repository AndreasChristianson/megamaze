import React from 'react'
import styled from 'styled-components'
import { Text, SvgText } from './Text'

const StyledText = styled(Text)`
  cursor: pointer;
`

export const Button = ({
  text,
  children,
  width,
  height,
  x,
  y,
  onClick,
  ...props
}) => (
  <StyledText
    width={width}
    height={height}
    y={y}
    x={x}
    shadingColor="#333333"
    shadingOpacity="0.3"
    borderColor="black"
    onClick={onClick}
    {...props}
  >
    {text ? <SvgText>{text}</SvgText> : <>{children}</>}
  </StyledText>
)
