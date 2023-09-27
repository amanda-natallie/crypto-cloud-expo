import logo from 'assets/images/brand.svg'
import { Button } from 'components'
import { StyledHeaderWrapper } from '../styles'
import Nav from './nav'
import { useEffect, useState } from 'react'

const ApplicationHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeaderWrapper
      fullWidth
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      {...{ scrollPosition }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Nav />
      <Button aria-label="header-register-button" onClick={() => null}>
        Register Now
      </Button>
    </StyledHeaderWrapper>
  )
}

export default ApplicationHeader
