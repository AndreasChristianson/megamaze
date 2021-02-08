import React, { useState } from 'react'
import styled from 'styled-components'
import { GridAligned } from '../GridAligned'
import vimImage from '../../images/vim-tiny.webp'
import { useHotkeys } from 'react-hotkeys-hook'
import { useGameState } from '../../hooks/game-context'
import { east, north, south, west } from '../../constants/directions'
import { move } from '../../utils/movement'

export const Vim = () => {
  const [{ vim }, setGameState] = useGameState()

  const boundedIncrement = (delta) => {
    setGameState((state) => {
      const { vim, walls } = state
      const newPosition = move(vim, walls, delta)

      return {
        ...state,
        vim: newPosition,
      }
    })
  }

  useHotkeys('Up, w, k', () => boundedIncrement(north))
  useHotkeys('Down, s, j', () => boundedIncrement(south))
  useHotkeys('Left, q, a, h', () => boundedIncrement(west))
  useHotkeys('Right, d, e, l', () => boundedIncrement(east))

  return (
    <GridAligned {...vim} innerElement="svg">
      <image href={vimImage} height="100%" width="100%" />
    </GridAligned>
  )
}
