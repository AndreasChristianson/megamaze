import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
  }
  
  body{
    background-color: #aaa;
    @media (prefers-color-scheme: dark) {
      background-color: #888;
    }
  }
`
