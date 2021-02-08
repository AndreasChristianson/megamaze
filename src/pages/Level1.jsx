import React, { useState } from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Vim } from '../components/game-context/Vim'
import { Walls } from '../components/game-context/Walls'
import { VictoryButton } from '../components/game-context/VictoryButton'
import { initialState } from './levels/level1/content'
import { GameContextProvider } from '../hooks/game-context'
import { Projectiles } from '../components/game-context/Projectiles'

export const Level1 = ({ score, incrementScore }) => {
  return (
    <Background backgroundImage={level}>
      <GameContextProvider initialState={initialState}>
        <Walls />
        <Projectiles />
        <Vim />
        <VictoryButton />
      </GameContextProvider>
    </Background>
  )
}
