import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { SvgText } from '../Text'
import { useHistory } from 'react-router-dom'
import { isPositionInArea } from '../../utils/grid-math'
import { useGameState } from '../../hooks/game-context'

const Congratulations = styled(SvgText)`
  font-size: 4em;
`

export const VictoryButton = () => {
  const [{ victory, vim, nextLevel }] = useGameState()
  const history = useHistory()
  const inVictory = isPositionInArea(vim, victory)
  if (!inVictory) {
    return null
  }

  return (
    <Button
      onClick={() => history.push(nextLevel)}
      x={5}
      y={5}
      width={20}
      height={20}
    >
      <Congratulations>{'Victory!'}</Congratulations>
    </Button>
  )
}
