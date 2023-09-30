import { Flexbox } from 'components'
import aboutShape from '../../assets/about-venue/shape.png'
import sectionBg from '../../assets/about-venue/bg.jpg'
import styled from 'styled-components'

export const AboutVenueWrapper = styled(Flexbox)`
  background-image: url(${sectionBg});
  background-repeat: no-repeat;
  background-position: top -1px center;
  background-size: 100% 70%;
`

export const StyledAddressWrapper = styled(Flexbox)`
  height: 400px;
  justify-content: center;
  padding-inline: 30px;
  background-image: url(${aboutShape});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
