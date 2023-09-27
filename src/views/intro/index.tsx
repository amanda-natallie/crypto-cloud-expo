import { Counter, IntroBottom, IntroText } from './components'
import { StyledIntroWrapper } from './styles'

const Intro = () => {
  return (
    <StyledIntroWrapper fullScreen alignItems="center" justifyContent="center">
      <IntroText />
      <Counter />
      <IntroBottom />
    </StyledIntroWrapper>
  )
}

export default Intro
