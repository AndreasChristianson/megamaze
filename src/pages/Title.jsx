import React, { useState } from 'react'
import styled from 'styled-components'
import title from '../images/title2.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'

export const Title = () => {
  const history = useHistory();

  return (
    <Background backgroundImage={title}>
      <Button
        onClick={() => history.push("/controls")}
        x={10}
        y={25}
        width={4}
        height={2}
        text={'Controls'}
      />
      <Button
        onClick={() => history.push("/level1")}
        x={18}
        y={25}
        width={4}
        height={2}
        text={'Play Game!'}
      />
    </Background>
  )
}
