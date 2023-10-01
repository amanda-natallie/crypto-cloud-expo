import logo from 'assets/images/brand.svg'
import { Button } from 'components'
import { useEffect, useState } from 'react'
import { StyledHeaderWrapper, StyledNavbarDesktopWrapper } from './styles'
import Nav from './nav'

const ApplicationHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
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
      <StyledNavbarDesktopWrapper>
        <Nav />
      </StyledNavbarDesktopWrapper>
      <Button aria-label="header-register-button" onClick={scrollToContact}>
        Register Now
      </Button>
    </StyledHeaderWrapper>
  )
}

export default ApplicationHeader
