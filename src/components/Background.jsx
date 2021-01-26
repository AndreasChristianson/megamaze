import React from 'react'
import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-size: 100% 100%;
`