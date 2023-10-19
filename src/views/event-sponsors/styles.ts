import styled, { keyframes } from 'styled-components'
import { Flexbox, FlexboxProps } from 'components'
import introBg from '/assets/backgrounds/intro-bg.png'

interface SponsorImageProps {
  isHovered: boolean
}

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const SponsorImage = styled.div<SponsorImageProps>`
  position: relative;
  width: 250px;
  height: 128px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  transition: transform 0.5s ease;

  &:hover::before {
    content: 'Visit Site';
    display: flex;
    position: absolute;
    border-radius: 10px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #1a46b5 0%, #3c9afe 100%);
    color: white;
    font-size: 14px;
    font-family: 'Press Start 2P';
    padding: 10px 0;
    animation: ${slideIn} 0.3s ease-in-out;
  }
`

export const StyledEventSponsorsBlock = styled(Flexbox)`
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 80%;
  img {
    background-color: white;
    width: 250px;
    height: 128px;
    border-radius: 10px;
    padding: 40px;
    z-index: 99;
  }
`
export const StyledSponsorWrapper = styled(Flexbox)<FlexboxProps>`
  background-image: url(${introBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  top: 0;
  padding: 64px;
  @media (min-width: 1025px) {
    padding-top: 10vh;
  }
`
