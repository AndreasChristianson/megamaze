import React from 'react'
import styled from 'styled-components'
import battle from '../images/title.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { SvgText } from '../components/Text'
import { useHistory } from 'react-router-dom'

const Congratulations = styled(SvgText)`
  font-size: 4em;
`

export const VictoryButton = ({ nextLevel }) => {
  const history = useHistory()

  return (
    <Button
      onClick={() => history.push(nextLevel)}
      x={5}
      y={5}
      width={20}
      height={20}
      // shadingOpacity="0.3"
      // shadingColor="white"
    >
      <Congratulations>{'Victory!'}</Congratulations>
    </Button>
  )
}
