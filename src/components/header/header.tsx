import logo from 'assets/images/brand.svg'
import { Button, Flexbox } from 'components'
import { useEffect, useState } from 'react'
import { StyledHeaderWrapper, StyledNavbarDesktopWrapper } from './styles'
import Nav from './nav'
import Fade from 'react-reveal/Fade'

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
    <Flexbox
      customStyles={{
        width: '100%',
        top: 0,
        position: 'sticky',
        zIndex: 9,
        '& > div': {
          width: '100%',
          top: 0,
          position: 'sticky',
        },
      }}
    >
      <Fade top delay={1000}>
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
          <Button aria-label="header-register-button" onClick={() => null}>
            Register Now
          </Button>
        </StyledHeaderWrapper>
      </Fade>
    </Flexbox>
  )
}

export default ApplicationHeader
