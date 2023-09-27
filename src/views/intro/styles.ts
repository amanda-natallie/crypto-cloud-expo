import introBg from 'assets/backgrounds/intro-bg.png'
import counterShape from 'assets/shapes/counter-arrow.svg'
import { Flexbox, FlexboxProps, StyledGradientText } from 'components'

import styled from 'styled-components'

export const StyledIntroWrapper = styled(Flexbox)<FlexboxProps>`
  background-image: url(${introBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: absolute;
  top: 0;

  @media (min-width: 1025px) {
    padding-top: 10vh;
  }
`

export const StyledCounterWrapper = styled(Flexbox)`
  flex-direction: row;
  position: relative;
  margin-block: 32px;
  background: url(${counterShape}) left center no-repeat;
  background-size: 11px 66px;
  padding-inline: 26px;
  gap: 5px;

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: inherit;
    transform: scaleX(-1);
    right: 0px;
  }
`
export const StyledCounterBlock = styled(Flexbox)`
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.gradients[200]};
  width: 126px;
  height: 94px;

  & > p {
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
  & > ${StyledGradientText} {
    font-size: 16.5px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    width: 96px;
    height: 72px;

    & > p {
      font-size: 24px;
    }
    & > span {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 76px;
    height: 57px;

    & > p {
      font-size: 18px;
    }
    & > span {
      font-size: 9px;
    }
  }
`
