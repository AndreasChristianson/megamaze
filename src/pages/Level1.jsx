import React, { useState } from 'react'
import styled from 'styled-components'
import level from '../images/level-1.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { Controls } from './Controls'

export const Level1 = ({ changePage }) => (
  <Background backgroundImage={level}></Background>
)
