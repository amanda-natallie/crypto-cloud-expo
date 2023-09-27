import { Typography } from 'components'
import { StyledCounterBlock, StyledCounterWrapper } from '../styles'
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
        <Typography as="span">Days</Typography>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{hours}</Typography>
        <Typography as="span">Hours</Typography>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{minutes}</Typography>
        <Typography as="span">Minutes</Typography>
      </StyledCounterBlock>
      <StyledCounterBlock>
        <Typography as="p">{seconds}</Typography>
        <Typography as="span">Seconds</Typography>
      </StyledCounterBlock>
    </StyledCounterWrapper>
  )
}

export default Counter
