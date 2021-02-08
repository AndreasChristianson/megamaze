import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { columns, rows } from '../constants/grid'
import { pixelsToGridPosition } from '../utils/svg-math'
import { GridAligned } from './GridAligned'

const Rectangle = styled.rect`
  fill-opacity: 0%;
`

export const CollectMouseEvents = (props) => {
  const svgRef = useRef()
  const [point, setPoint] = useState()
  useEffect(() => setPoint(svgRef.current && svgRef.current.createSVGPoint()), [
    svgRef,
  ])

  const collect = (eventType) => (mouseEvent) => {
    point.x = mouseEvent.clientX
    point.y = mouseEvent.clientY
    const svgPoint = point.matrixTransform(
      svgRef.current.getScreenCTM().inverse()
    )
    const gridPosition = pixelsToGridPosition(svgPoint)
    const handler = props[eventType]
    handler && handler(gridPosition)
  }

  const ClickableSvg = () => (
    <svg
      ref={svgRef}
      onMouseDown={collect('onMouseDown')}
      onMouseUp={collect('onMouseUp')}
      onClick={collect('onClick')}
    >
      <Rectangle width="100%" height="100%" />
    </svg>
  )

  return (
    <>
      <GridAligned
        innerElement={ClickableSvg}
        x={0}
        y={0}
        width={rows}
        height={columns}
      />
    </>
  )
}
