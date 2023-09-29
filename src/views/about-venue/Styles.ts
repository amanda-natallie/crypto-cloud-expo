import { Flexbox } from 'components'
import aboutShape from '../../assets/about venue/shape.png'
import styled from 'styled-components'

export const AboutVenueWrapper = styled(Flexbox)`
  background-image: url(${aboutShape});
  background-repeat: no-repeat;
  background-position: center 30vh;
  background-size: 90%;
  z-index: 999;
`
