import mapMarker from 'assets/icons/map-marker.svg'
import { Flexbox, Typography } from 'components'
import { StyledGradientText } from 'components/gradient-text'
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
        <Flexbox flexDirection="row" gap="4px">
          <StyledGradientText fontSize="20px" weight={600}>
            Oct 5, 2023 at 6:30pm
          </StyledGradientText>
          <img src={mapMarker} alt="map-marker" />
        </Flexbox>
        <Typography as="p" weight={500} color={theme.colors.white}>
          Dubai, ATLANTIS, THE PALM
        </Typography>
      </Flexbox>
    </Flexbox>
  )
}

export default IntroBottom
