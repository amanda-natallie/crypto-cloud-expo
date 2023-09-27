import { Button, Flexbox, Typography } from 'components'
import { theme } from 'theme'
import { StyledIntroWrapper } from './styles'

const Intro = () => {
  return (
    <StyledIntroWrapper fullScreen>
      <Flexbox
        fullWidth
        height="calc(100vh + 135px)"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          as="h1"
          fontFamily="'Press Start 2P'"
          fontSize="64px"
          textAlign="center"
        >
          Crypto Cloud Expo
        </Typography>
        <Typography
          as="h2"
          color={theme.colors.white}
          weight={600}
          fontSize="48px"
          margin="25px 10vw"
          textAlign="center"
        >
          Identifying the Game Changing Trends in the WEB 3.0 Ecossystem
        </Typography>
        <Button onClick={() => null}>Register Now</Button>
      </Flexbox>
    </StyledIntroWrapper>
  )
}

export default Intro
