import React from 'react'
import styled from 'styled-components'
import battle from '../images/title.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { SvgText } from '../components/Text'
import { useHistory } from 'react-router-dom'

const Paragraph = styled(SvgText)`
  font-size: 2em;
`

const Header = styled(Paragraph)`
  font-size: 2em;
  text-decoration: underline;
`

export const Controls = ({ changePage }) => {
  const history = useHistory()

  return (
    <Background backgroundImage={battle}>
      <Button
        onClick={() => history.push('/')}
        x={2}
        y={2}
        width={26}
        height={26}
        shadingOpacity="0.9"
        shadingColor="white"
      >
        <Header transform="translate(0 -200)">{'Movement'}</Header>
        <Paragraph transform="translate(0 -100)">
          {'WASD, QWES, HJKL and the arrow keys'}
        </Paragraph>
        <Header transform="translate(0 100)">{'Shoot'}</Header>
        <Paragraph transform="translate(0 200)">{'left click'}</Paragraph>
      </Button>
    </Background>
  )
}
