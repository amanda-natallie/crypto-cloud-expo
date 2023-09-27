import { Flexbox, Typography } from 'components'
import { useMediaQuery } from 'hooks'
import { theme } from 'theme'

const IntroText = () => {
  const isMobile = useMediaQuery('(max-width: 630px)')
  const isSmallDesktop = useMediaQuery('(max-width: 1088px)')
  return (
    <Flexbox fullWidth alignItems="center" justifyContent="center">
      <Typography
        as="h1"
        fontFamily="'Press Start 2P'"
        fontSize={isMobile ? '50px' : isSmallDesktop ? '55px' : '64px'}
        textAlign="center"
        lineHeight={isMobile ? '70px' : '98px'}
        color={theme.primary.main}
      >
        Crypto Cloud Expo
      </Typography>
      <Typography
        as="h2"
        color={theme.colors.white}
        weight={600}
        fontSize={isMobile ? '25px' : '48px'}
        margin="25px auto"
        textAlign="center"
        maxWidth={isSmallDesktop ? '83vw' : '50vw'}
      >
        Identifying the Game Changing Trends in the WEB 3.0 Ecossystem
      </Typography>
    </Flexbox>
  )
}

export default IntroText
