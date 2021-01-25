import React from 'react'
import styled from 'styled-components'
import title from '../images/title2.webp'
import mim from '../images/mim-full.webp'
import vim from '../images/vim-full.webp'
import { GlobalStyles } from '../GlobalStyles'

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
const images = [title]

const Image = styled.img``

export const Homepage = (props) => (
  <PageContainer>
    <GlobalStyles />
    {/* <h1>{'Mim vs Vim'}</h1>
    <p>{VERSION}</p> */}
    {images.map((image, index) => (
      <Image src={image} key={index} />
    ))}
  </PageContainer>
)
