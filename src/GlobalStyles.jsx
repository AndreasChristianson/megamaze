import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
  }
  body{
    background-color: lightgray;
    @media (prefers-color-scheme: dark) {
      background-color: gray;
    }
  }
`
