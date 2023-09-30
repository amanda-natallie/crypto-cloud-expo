import {
  Container,
  Flexbox,
  SectionHeader,
  StyledGradientText,
  Typography,
  TypographyProps,
} from 'components'
import { useMediaQuery } from 'hooks'
import Adress from '../../assets/about-venue/Adress.svg'
import venue from '../../assets/about-venue/venue.svg'
import { AboutVenueWrapper, StyledAddressWrapper } from './styles'

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
  const titleInfoProps: Partial<TypographyProps> = {
    fontSize: '18px',
    weight: 700,
    color: 'theme.colors.white',
  }
  const contentInfoProps: Partial<TypographyProps> = {
    fontSize: '18px',
    weight: 400,
    color: 'theme.colors.white',
  }
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const handleClick = () => {
    window.open(
      'https://www.google.com/maps/dir//Atlantis,+The+Palm+Crescent+Rd+The+Palm+Jumeirah+-+Dubai+United+Arab+Emirates/@25.1304426,55.1171498,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f153e3609c979:0x5945a418a804ac5!2m2!1d55.1171498!2d25.1304426?entry=ttu',
      '_blank',
    )
  }
  return (
    <AboutVenueWrapper id="location" fullWidth>
      <Container>
        <Flexbox fullWidth alignItems="center" justifyContent="center">
          <SectionHeader smallTitle="The Location" title="About Venue" />
        </Flexbox>
        <StyledAddressWrapper
          alignItems="left"
          gap="10px"
          width={isMobile ? '100%' : '30%'}
        >
          <StyledGradientText>Get in there to Reach</StyledGradientText>
          <Typography {...getDirectionProps}>Get Direction to the Event</Typography>
          <Flexbox flexDirection="row" gap="10px">
            <img src={Adress} alt="Adress" />
            <Typography {...titleInfoProps}>Address</Typography>
          </Flexbox>
          <Typography {...contentInfoProps}>
            Crescent Rd - The Palm Jumeirah - Dubai - United Arab Emirates
          </Typography>
          <Flexbox flexDirection="row" gap="10px">
            <img src={venue} alt="venue" />
            <Typography {...titleInfoProps}>Venue</Typography>
          </Flexbox>
          <Typography {...contentInfoProps}>Atlantis, The Palm</Typography>
          <StyledGradientText
            fontSize="20px"
            lineHeight="18px"
            onClick={() => handleClick()}
            style={{ cursor: 'pointer' }}
          >
            Get Directions
          </StyledGradientText>
        </StyledAddressWrapper>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.15522083419!2d55.1171498!3d25.1304426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f153e3609c979%3A0x5945a418a804ac5!2sAtlantis%2C%20The%20Palm!5e0!3m2!1sen!2sbr!4v1696089966535!5m2!1sen!2sbr"
          style={{
            border: 0,
            width: '1px',
            minWidth: isMobile ? '100%' : '60%',
            height: '400px',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </AboutVenueWrapper>
  )
}

export default AboutVenue
