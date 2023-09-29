// pode instalar uma api de mapa para mostrá-lo
// ao clicar em GetDirections, abrir o google maps com o endereço do evento
// exportar todos os shapes de background

import {
  Flexbox,
  SectionHeader,
  StyledGradientText,
  Typography,
  TypographyProps,
} from 'components'
import Map from './Map'
import Adress from '../../assets/about venue/Adress.svg'
import { AboutVenueWrapper } from './Styles'

// use o componente de SectionHeader que vc criou anteriormente
const AboutVenue = () => {
  const getDirectionProps: Partial<TypographyProps> = {
    fontSize: '36px',
    weight: 600,
    lineHeight: '36px',
    color: 'theme.colors.white',
    as: 'h3',
    marginBottom: '25px',
  }
  const titleInfoPorps: Partial<TypographyProps> = {
    fontSize: '18px',
    weight: 700,
    color: 'theme.colors.white',
  }
  const contentInfoProps: Partial<TypographyProps> = {
    fontSize: '18px',
    weight: 400,
    color: 'theme.colors.white',
  }
  return (
    <Flexbox justifyContent="center" alignItems="center" fullWidth>
      <SectionHeader smallTitle="The Event Possible" title="About Venue" />
      <Flexbox flexDirection="row" gap="10px">
        <AboutVenueWrapper alignItems="left" gap="10px" width="300px">
          <StyledGradientText>Get in there to Reach</StyledGradientText>
          <Typography {...getDirectionProps}>Get Direction to the Event</Typography>
          <Flexbox flexDirection="row" gap="10px">
            <img src={Adress} alt="" />
            <Typography {...titleInfoPorps}>Address</Typography>
          </Flexbox>
          <Typography {...contentInfoProps}>
            2715 Ash Dr. San Jose, South Dakota 83475
          </Typography>
          <Flexbox flexDirection="row" gap="10px">
            <img src={Adress} alt="" />
            <Typography {...titleInfoPorps}>Venue</Typography>
          </Flexbox>
          <Typography {...contentInfoProps}>Grand Conference Hall</Typography>
          <StyledGradientText fontSize="20px" lineHeight="18px">
            Get Directions
          </StyledGradientText>
        </AboutVenueWrapper>
        <Map />
      </Flexbox>
    </Flexbox>
  )
}

export default AboutVenue
