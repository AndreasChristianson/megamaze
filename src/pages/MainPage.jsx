import React, { useState } from 'react'
import styled from 'styled-components'
import { Navigation } from '../components/Navigation'
import { GlobalStyles } from '../GlobalStyles'
import { Title } from './Title'

const PageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 1000px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`

export const MainPage = () => {
  const [gameState, setGameState] = useState({
    page: Title,
    score: 0,
  })
  const changeState = (key, value) => {
    setGameState((old) => ({
      ...old,
      [key]: value,
    }))
  }

  return (
    <PageContainer>
      <GlobalStyles />
      <Navigation gameState={gameState} changeState={changeState} />
    </PageContainer>
  )
}
