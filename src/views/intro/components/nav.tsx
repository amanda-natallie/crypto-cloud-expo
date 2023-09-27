import { Typography } from 'components'
import { useMediaQuery } from 'hooks'
import { useState } from 'react'
import { theme } from 'theme'
import { handleScrollIntoView } from 'utils'
import { StyledBurger, StyledDesktopMenu, StyledMenu } from '../styles'

type NavItemProps = {
  text: string
  anchor: string
}

const Nav = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isOpen, setIsOpen] = useState(false)

  const navItems: NavItemProps[] = [
    { text: 'Home', anchor: '#home' },
    { text: 'About', anchor: '#about' },
    { text: 'Speakers', anchor: '#speakers' },
    { text: 'Sponsors', anchor: '#sponsors' },
    { text: 'Register', anchor: '#contact' },
  ]

  const Burger = () => {
    return (
      <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

  const NavItemsMapped = () =>
    navItems.map(({ text, anchor }, i) => (
      <Typography
        key={i}
        as="a"
        color={theme.colors.white}
        weight={500}
        fontSize="18px"
        onClick={() => handleScrollIntoView(anchor)}
      >
        {text}
      </Typography>
    ))

  return !isMobile ? (
    <StyledDesktopMenu>
      <NavItemsMapped />
    </StyledDesktopMenu>
  ) : (
    <>
      <StyledMenu open={isOpen} justifyContent="center" alignItems="center">
        <NavItemsMapped />
      </StyledMenu>
      <Burger />
    </>
  )
}

export default Nav
