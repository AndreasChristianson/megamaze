import React from 'react'
import styled from 'styled-components'
import { GridAligned } from './GridAligned'
import vimImage from '../images/vim-tiny.webp'

export const Vim = styled(GridAligned)`
  background-image: url(${vimImage});
  background-size: 100% 100%;
`
