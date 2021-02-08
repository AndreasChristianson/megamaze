import React, { useState } from 'react'
import styled from 'styled-components'
import { useGameState } from '../../hooks/game-context'
import { Wall } from '../Wall'

export const Walls = () => {
  const [{ walls }] = useGameState()

  return (
    <>
      {walls.map((wall, index) => (
        <Wall key={index} area={wall} />
      ))}
    </>
  )
}
