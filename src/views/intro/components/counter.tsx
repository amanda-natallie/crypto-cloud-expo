import { Typography } from 'components'
import { StyledCounterBlock, StyledCounterWrapper, StyledGradientText } from '../styles'
import { useState, useEffect } from 'react'
import { getCountdown } from 'utils'

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
      <StyledCounterBlock>
        <Typography as="p">{days}</Typography>
        <StyledGradientText>Days</StyledGradientText>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{hours}</Typography>
        <StyledGradientText>Hours</StyledGradientText>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{minutes}</Typography>
        <StyledGradientText>Minutes</StyledGradientText>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{seconds}</Typography>
        <StyledGradientText>Seconds</StyledGradientText>
      </StyledCounterBlock>
    </StyledCounterWrapper>
  )
}

export default Counter
