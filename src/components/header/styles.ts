import { Flexbox, FlexboxProps } from 'components'
import styled, { css } from 'styled-components'

export const StyledNavbarDesktopWrapper = styled(Flexbox)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media (max-width: 1024px) {
    left: unset;
    right: 32px;
  }
`
type CustomHeaderProps = FlexboxProps & { scrollPosition: number }
export const StyledHeaderWrapper = styled(Flexbox)<CustomHeaderProps>`
  ${({ theme, scrollPosition }) => {
    const scroll = scrollPosition > 32
    return css`
      z-index: 100;
      position: sticky;
      transition: all 0.6s ease-in-out;
      padding: ${scroll ? '24px' : '32px'};
      & > * {
        transition: all 0.6s ease-in-out;
      }
      img {
        width: ${scroll ? '18vw' : '25vw'};
        max-width: ${scroll ? '240px' : '300px'};
      }
      button[aria-label='header-register-button'] {
        z-index: 999;
        padding: ${scroll ? '10px 32px' : '18px 48px'};
      }
      top: ${scroll ? '0' : '16px'};

      @media (max-width: 1024px) {
        button[aria-label='header-register-button'] {
          display: none;
        }
      }

      @media (max-width: 768px) {
        img {
          width: 40vw;
        }
      }
      &:after {
        transition: all 0.6s ease-in-out;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.gradients[400]};
        z-index: -1;
        opacity: ${scrollPosition > 100 ? 0.95 : 0};
      }
    `
  }}
`
type BurguerProps = {
  open: boolean
}
export const StyledBurger = styled.button<BurguerProps>`
  ${({ theme, open }) => css`
    position: absolute;
    top: -15px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${theme.colors.white};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${open ? '0' : '1'};
        transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `}
`

export const StyledMenu = styled(Flexbox)<BurguerProps>`
  ${({ theme, open }) => {
    const {
      colors: { white, darkBackground },
      primary: { main },
    } = theme
    return css`
      background: ${darkBackground};
      transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
      height: 100vh;
      width: 100vw;
      text-align: left;
      position: fixed;
      padding-inline: 2rem;
      top: 0;
      right: 0;
      transition: transform 0.3s ease-in-out;

      a {
        text-transform: uppercase;
        font-family: 'Press Start 2P', cursive;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${white};
        text-decoration: none;
        transition: color 0.3s linear;
        font-size: 1.5rem;
        text-align: center;

        &:hover {
          color: ${main};
        }
      }
    `
  }}
`
export const StyledDesktopMenu = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 6px;

    a {
      display: inline-block;
      text-decoration: none;
      &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: 'transparent';
        border-radius: 4px;
        margin-top: 4px;
      }

      &:hover {
        color: ${theme.primary.main};
        &:after {
          background: ${theme.gradients[100]};
        }
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const StyledNavItem = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 500;
    font-size: 18px;
  `}
`
