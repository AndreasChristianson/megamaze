import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Vim } from '../components/Vim'
import { columns, rows } from '../constants/grid'

export const Level1 = ({ changePage }) => {
  const backgroundRef = useRef(null)
  const [vimPosition, setVimPosition] = useState({
    x: 25,
    y: 25,
  })
  useEffect(() => {
    backgroundRef.current.focus()
  }, [])
  const bound = (value, lowerBound, upperBound) =>
    Math.min(Math.max(value, lowerBound), upperBound)
  const boundedIncrement = (deltaX, deltaY) =>
    setVimPosition(({ x, y }) => {
      const newX = bound(deltaX + x, 0, rows - 1)
      const newY = bound(deltaY + y, 0, columns - 1)

      return {
        x: newX,
        y: newY,
      }
    })
  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        boundedIncrement(-1, 0)
        break
      case 'ArrowDown':
        boundedIncrement(1, 0)

        break
      case 'ArrowLeft':
        boundedIncrement(0, -1)

        break
      case 'ArrowRight':
        boundedIncrement(0, 1)

        break

      default:
        console.log(event.key)
    }
  }

  return (
    <Background
      tabIndex="0"
      backgroundImage={level}
      onKeyUp={handleKeyPress}
      ref={backgroundRef}
    >
      <Vim {...vimPosition} />
    </Background>
  )
}
