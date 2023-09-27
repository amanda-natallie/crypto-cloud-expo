import { useMediaQuery } from 'hooks'
import { useState } from 'react'
import { handleScrollIntoView } from 'utils'
import { StyledBurger, StyledDesktopMenu, StyledMenu, StyledNavItem } from './styles'

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
      <StyledNavItem
        key={i}
        onClick={() => {
          setIsOpen(false)
          handleScrollIntoView(anchor)
        }}
      >
        {text}
      </StyledNavItem>
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
