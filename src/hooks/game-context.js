import React, { useState, useEffect, useContext } from 'react'

const GameContext = React.createContext()

export const GameContextProvider = ({ initialState, children }) => {
  const [gameState, setGameState] = useState(initialState)
  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameState = () => {
  const { gameState, setGameState } = useContext(GameContext)

  return [gameState, setGameState]
}
