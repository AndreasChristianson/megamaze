import React, {useState} from 'react'
import styled from 'styled-components'
import { Grid } from './Grid';


export const Navigation = (props) => {
  const {
    gameState: { page: Page, score },
    changeState,
  } = props;
  const [showGrid, setShowGrid] = useState(true)
  const changePage = (newPage) => changeState('page', newPage)
  const incrementScore = (amount) => changeState('score', score + amount)

  return <>
  {showGrid?<Grid/>:null}
  <Page changePage={changePage} incrementScore={incrementScore} />
  </>
}
