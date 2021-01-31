import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Vim } from '../components/Vim'
import { columns, rows } from '../constants/grid'
import { useHotkeys } from 'react-hotkeys-hook'

export const Level1 = ({ changePage }) => {

  return (
    <Background
      backgroundImage={level}
    >
      <Vim x={25} y={25} />
    </Background>
  )
}
