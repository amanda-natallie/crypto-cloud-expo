import styled from 'styled-components'
import gridShape from '/assets/shapes/grids.png'
import { Flexbox } from 'components'
import circleShape from '/assets/shapes/circle.svg'

export const StyledAboutUsWrapper = styled(Flexbox)`
  background-image: url(${gridShape});
  background-repeat: no-repeat;
  background-position: center 30vh;
  background-size: 90%;
  background-attachment: fixed;
  position: relative;
  min-height: 75vh;

  @media (max-width: 1304px) {
    &:after {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    background-position: center 45vh;
  }

  @media (max-width: 768px) {
    padding-block: 64px;
    background: none;
  }

  &:after {
    content: '';
    background-image: url(${circleShape});
    background-repeat: no-repeat;
    background-position: 13vw center;
    background-size: 570px;
    border-radius: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  & .three-imgs {
    height: auto;
    max-width: 100%;
  }
`
