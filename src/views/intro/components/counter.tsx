import { StyledGradientText, Typography } from 'components'
import { useEffect, useState } from 'react'
import Flip from 'react-reveal/Flip'
import { getCountdown } from 'utils'
import { StyledCounterBlock, StyledCounterWrapper } from '../styles'

const Counter = () => {
  const [countdown, setCountdown] = useState(getCountdown())

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { days, hours, minutes, seconds } = countdown

  return (
    <StyledCounterWrapper>
      <Flip left>
        <StyledCounterBlock>
          <Typography as="p">{days}</Typography>
          <StyledGradientText>Days</StyledGradientText>
        </StyledCounterBlock>
      </Flip>
      <Flip left delay={250}>
        <StyledCounterBlock>
          <Typography as="p">{hours}</Typography>
          <StyledGradientText>Hours</StyledGradientText>
        </StyledCounterBlock>
      </Flip>
      <Flip left delay={500}>
        <StyledCounterBlock>
          <Typography as="p">{minutes}</Typography>
          <StyledGradientText>Minutes</StyledGradientText>
        </StyledCounterBlock>
      </Flip>
      <Flip left delay={750}>
        <StyledCounterBlock>
          <Typography as="p">{seconds}</Typography>
          <StyledGradientText>Seconds</StyledGradientText>
        </StyledCounterBlock>
      </Flip>
    </StyledCounterWrapper>
  )
}

export default Counter
