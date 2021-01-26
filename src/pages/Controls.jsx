import React, { useState } from 'react'
import styled from 'styled-components'
import battle from '../images/title.webp'
import { Background } from '../components/Background'
import { Button } from '../components/Button'
import { Title } from './Title'

const Header = styled.h1`
  margin: 1em;
  text-decoration: underline;
`

const SectionHeader = styled.h3`
  margin: 1em;
`

export const Controls = ({ changePage }) => (
  <Background backgroundImage={battle}>
    <Button onClick={() => changePage(Title)} x={2} y={2} width={6} height={6}>
      <Header>Controls</Header>
      <SectionHeader>Movement:</SectionHeader>
      <p>w,a,s,d or arrow keys</p>
      <SectionHeader>Shoot:</SectionHeader>
      <p>left click</p>
    </Button>
  </Background>
)
