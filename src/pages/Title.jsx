import React, { useState } from 'react'
import styled from 'styled-components'
import title from '../images/title2.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { Controls } from './Controls'
import { Level1 } from './Level1'

export const Title = ({changePage}) => 
    <Background backgroundImage={title}>
      <Button
        onClick={() => changePage(Controls)}
        x={25}
        y={10}
        width={4}
        height={2}
        >
        {'Controls'}
      </Button>
      <Button 
        onClick={() => changePage(Level1)}
        x={25}
        y={18}
        width={4}
        height={2}
        >
        {'Play Game!'}
      </Button>
    </Background>
