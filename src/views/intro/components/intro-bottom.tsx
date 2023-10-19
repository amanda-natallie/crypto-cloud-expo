import mapMarker from '/assets/icons/map-marker.svg'
import { Flexbox, StyledGradientText, Typography } from 'components'
import Fade from 'react-reveal/Fade'
import { theme } from 'theme'

const IntroBottom = () => {
  return (
    <Flexbox
      fullWidth
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="32px"
    >
      <Flexbox alignItems="center" justifyContent="center" gap="4px">
        <Fade bottom delay={1000}>
          <Flexbox flexDirection="row" gap="4px">
            <StyledGradientText fontSize="20px" weight={600}>
              Oct 20, 2023 at 6:30pm
            </StyledGradientText>
            <img src={mapMarker} alt="map-marker" />
          </Flexbox>
        </Fade>
        <Fade bottom delay={1000}>
          <Typography as="p" weight={500} color={theme.colors.white}>
            Dubai, ATLANTIS, THE PALM
          </Typography>
        </Fade>
      </Flexbox>
    </Flexbox>
  )
}

export default IntroBottom
