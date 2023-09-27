import { Flexbox, Typography } from 'components'
import { useMediaQuery } from 'hooks'
import { theme } from 'theme'

const IntroText = () => {
  const isMobile = useMediaQuery('(max-width: 480px)')
  return (
    <Flexbox fullWidth alignItems="center" justifyContent="center">
      <Typography
        as="h1"
        fontFamily="'Press Start 2P'"
        fontSize={isMobile ? '50px' : '64px'}
        textAlign="center"
        lineHeight={isMobile ? '70px' : '98px'}
      >
        Crypto Cloud Expo
      </Typography>
      <Typography
        as="h2"
        color={theme.colors.white}
        weight={600}
        fontSize={isMobile ? '25px' : '48px'}
        margin="25px 10vw"
        textAlign="center"
      >
        Identifying the Game Changing Trends in the WEB 3.0 Ecossystem
      </Typography>
    </Flexbox>
  )
}

export default IntroText
