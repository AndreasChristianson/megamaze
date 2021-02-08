import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useGameState } from '../../hooks/game-context'
import { detectGridEndPoint } from '../../utils/grid-math'
import { CollectMouseEvents } from '../CollectMouseEvents'
import { nanoid } from 'nanoid'
import {
  gridPositionToMiddlePixels,
  gridPositionPixelsWithJitter,
} from '../../utils/svg-math'

const animation = keyframes`
  from {
    /* opacity: 1; */
    stroke: darkred;
    stroke-width: 3px;
  }
  to {
    /* opacity: 0; */
    stroke: yellow;
    stroke-width: 0px;
  }
`
const Beam = styled.line`
  stroke: red;
  stroke-width: 2px;
  animation: 2s ${animation};
  animation-fill-mode: forwards;
`

export const Projectiles = () => {
  const [{ projectiles }, changeGameState] = useGameState()
  const removeProjectile = (id) =>
    changeGameState((oldState) => ({
      ...oldState,
      projectiles: oldState.projectiles.filter(
        (projectile) => id !== projectile.id
      ),
    }))

  const onMouseDown = (gridPosition) => {
    changeGameState((oldState) => {
      const walls = oldState.walls
      const line = {
        from: oldState.vim,
        to: gridPosition,
      }
      const collision = detectGridEndPoint(line, walls)
      const newProjectile = {
        from: gridPositionToMiddlePixels(oldState.vim),
        to: gridPositionPixelsWithJitter(collision),
        id: nanoid(),
      }
      setTimeout(() => removeProjectile(newProjectile.id), 2000)
      return {
        ...oldState,
        projectiles: [...oldState.projectiles, newProjectile],
      }
    })
  }

  return (
    <>
      {projectiles.map((projectile) => (
        <Beam
          key={projectile.id}
          x1={projectile.from.x}
          y1={projectile.from.y}
          x2={projectile.to.x}
          y2={projectile.to.y}
        />
      ))}
      <CollectMouseEvents onMouseDown={onMouseDown} />
    </>
  )
}
