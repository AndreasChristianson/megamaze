import React from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Vim } from '../components/Vim'

export const Level1 = () => {
  // const [levelState, setLevelState] = useState({
  //   walls:[

  //   ],
  //   vim: {
  //     x:25,
  //     y:25
  //   },
  //   mims:[{
  //     x:25,
  //     y:25
  //   },{
  //     x:25,
  //     y:25
  //   },{
  //     x:25,
  //     y:25
  //   },],
  //   projectiles:[

  //   ]
  // })

  return (
    <Background backgroundImage={level}>
      <Vim
        x={25}
        y={25}
      />
    </Background>
  )
}
