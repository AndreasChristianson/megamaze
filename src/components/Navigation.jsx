import React, { useState } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from '../pages/Title'
import { Level1 } from '../pages/Level1'
import { Controls } from '../pages/Controls'

export const Navigation = ({ gameState: { score }, changeState }) => {
  const incrementScore = (amount) => changeState('score', score + amount)

  return (
    <HashRouter>
      <Switch>
        <Route path="/level1">
          <Level1 incrementScore={incrementScore} />
        </Route>
        <Route path="/controls">
          <Controls />
        </Route>
        <Route path="/">
          <Title />
        </Route>
      </Switch>
    </HashRouter>
  )
}
