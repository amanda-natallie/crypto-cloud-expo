import { createGlobalStyle } from 'styled-components'
import palette from './colors'

export default createGlobalStyle`
  #root {
    padding:0 !important;
    width: 100%;
  }
  &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  body {
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    color: ${palette.colors.white};
    background: ${palette.colors.darkBackground};
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600 !important;
  }
  a, button {
    transition: all 0.4s ease;
    cursor: pointer;
  }
 
  #event-particles {
    width: 100vw;
    height: 180vh;
    position: absolute;
  }
  iframe[style*="z-index: 2147483647"] {
  display: none;
}
  `
