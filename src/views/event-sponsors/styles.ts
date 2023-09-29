import styled from 'styled-components'
import { Flexbox, FlexboxProps } from 'components'
import introBg from 'assets/backgrounds/intro-bg.png'

export const StyledEventSponsorsBlock = styled(Flexbox)`
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 60%;
  img {
    background-color: white;
    width: 28%;
    height: 128px;
    border-radius: 10px;
    padding: 40px;
    z-index: 99;
  }
`
export const StyledTitleSponsors = styled(Flexbox)`
  flex-direction: row;
  align-items: baseline;
  gap: 16;
  justify-content: center;
  margin-bottom: 16px;
  img {
    width: 48px;
  }
`

export const StyledSponsorWrapper = styled(Flexbox)<FlexboxProps>`
  background-image: url(${introBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  top: 0;

  @media (min-width: 1025px) {
    padding-top: 10vh;
  }
`
