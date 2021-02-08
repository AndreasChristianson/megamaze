import {
  addPositions,
  constrainPosition,
  isPositionInAnyArea,
} from './grid-math'
import { gameArea } from '../constants/grid'

export const move = (oldPosition, blockers, delta) => {
  const newPosition = constrainPosition(
    addPositions(oldPosition, delta),
    gameArea
  )

  if (isPositionInAnyArea(newPosition, blockers)) {
    return oldPosition
  }
  return newPosition
}
