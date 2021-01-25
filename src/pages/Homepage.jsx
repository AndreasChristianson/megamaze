import React from 'react'
import styled from 'styled-components'
import title from '../images/title.webp'
import mim from '../images/mim-full.webp'
import vim from '../images/vim-full.webp'

const PageContainer = styled.div``
const images = [
  title,
  mim,
  vim
]

const Image = styled.img`
`

export const Homepage = (props) => (
  <PageContainer>
    <h1>{'Mim vs Vim'}</h1>
    <p>{VERSION}</p>
    {images.map((image, index) => 
      <Image src={image} key={index}/>
    )}
  </PageContainer>
)
