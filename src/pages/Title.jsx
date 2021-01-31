import React, { useState } from 'react'
import styled from 'styled-components'
import title from '../images/title2.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { Controls } from './Controls'
import { Level1 } from './Level1'

export const Title = ({ changePage }) => (
  <Background backgroundImage={title}>
    <Button
      onClick={() => changePage(Controls)}
      x={10}
      y={25}
      width={4}
      height={2}
      text={'Controls'}
    />
    <Button
      onClick={() => changePage(Level1)}
      x={18}
      y={25}
      width={4}
      height={2}
      text={'Play Game!'}
    />
  </Background>
)
