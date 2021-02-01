import React, { useState } from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Vim } from '../components/Vim'
import { Wall } from '../components/Wall'
import { useHotkeys } from 'react-hotkeys-hook'
import { columns, rows } from '../constants/grid'
import { VictoryButton } from '../components/VictoryButton'

export const Level1 = ({ score, incrementScore }) => {
  const initialState = {
    nextLevel: '/level2',
    score,
    walls: [
      {
        yMin: 11,
        yMax: 27,
        xMin: 21,
        xMax: 21,
      },
      {
        yMin: 10,
        yMax: 16,
        xMin: 20,
        xMax: 20,
      },
      {
        yMin: 24,
        yMax: 27,
        xMin: 20,
        xMax: 20,
      },
      {
        yMin: 28,
        yMax: 29,
        xMin: 0,
        xMax: 29,
      },
      {
        yMin: 0,
        yMax: 2,
        xMin: 0,
        xMax: 29,
      },
      {
        yMin: 15,
        yMax: 27,
        xMin: 0,
        xMax: 0,
      },
      {
        yMin: 14,
        yMax: 27,
        xMin: 29,
        xMax: 29,
      },
      {
        yMin: 16,
        yMax: 20,
        xMin: 24,
        xMax: 28,
      },
      {
        yMin: 13,
        yMax: 24,
        xMin: 15,
        xMax: 16,
      },
      {
        yMin: 11,
        yMax: 12,
        xMin: 2,
        xMax: 19,
      },
      {
        yMin: 10,
        yMax: 10,
        xMin: 12,
        xMax: 19,
      },
      {
        yMin: 9,
        yMax: 10,
        xMin: 2,
        xMax: 7,
      },
      {
        yMin: 6,
        yMax: 8,
        xMin: 6,
        xMax: 7,
      },
      {
        yMin: 5,
        yMax: 6,
        xMin: 8,
        xMax: 26,
      },
      {
        yMin: 7,
        yMax: 11,
        xMin: 25,
        xMax: 26,
      },
      {
        yMin: 11,
        yMax: 11,
        xMin: 23,
        xMax: 24,
      },
      {
        yMin: 12,
        yMax: 12,
        xMin: 24,
        xMax: 25,
      },
      {
        yMin: 27,
        yMax: 27,
        xMin: 1,
        xMax: 4,
      },
    ],
    victory: {
      yMin: 13,
      yMax: 18,
      xMin: 17,
      xMax: 19,
    },
    vim: {
      x: 25,
      y: 25,
    },
    mims: [
      {
        x: 10,
        y: 10,
      },
    ],
  }
  const [levelState, setLevelState] = useState(initialState)
  const [victoryAchieved, setVictoryAchieved] = useState(false)

  const bound = (value, lowerBound, upperBound) =>
    Math.min(Math.max(value, lowerBound), upperBound)
  const isWall = (x, y) =>
    levelState.walls.some(
      ({ xMax, xMin, yMax, yMin }) =>
        x >= xMin && x <= xMax && y >= yMin && y <= yMax
    )
  const victory = (x, y, area) => {
    const { xMax, xMin, yMax, yMin } = area
    return x >= xMin && x <= xMax && y >= yMin && y <= yMax
  }
  const boundedIncrement = (deltaX, deltaY) => {
    setLevelState((state) => {
      const {
        vim: { x, y },
      } = state
      if (victory(x, y, state.victory)) {
        setVictoryAchieved(true)
      }
      const newX = bound(deltaX + x, 0, rows - 1)
      const newY = bound(deltaY + y, 0, columns - 1)

      if (isWall(newX, newY)) {
        return state
      }

      return {
        ...state,
        vim: {
          x: newX,
          y: newY,
        },
      }
    })
  }

  useHotkeys('Up, w, k', () => boundedIncrement(0, -1))
  useHotkeys('Down, s, j', () => boundedIncrement(0, 1))
  useHotkeys('Left, q, a, h', () => boundedIncrement(-1, 0))
  useHotkeys('Right, d, e, l', () => boundedIncrement(1, 0))

  return (
    <Background
      backgroundImage={level}
      // onClick={handleShootClick}
    >
      <Vim {...levelState.vim} />
      {levelState.walls.map((wall, index) => (
        <Wall key={index} area={wall} />
      ))}
      {victoryAchieved ? <VictoryButton nextLevel={levelState.nextLevel}/> : null}
    </Background>
  )
}
