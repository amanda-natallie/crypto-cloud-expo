import { Flexbox } from 'components'
import styled from 'styled-components'
import bg from 'assets/speakers/shape-bg.svg'

export const StyledSpeakerBlock = styled(Flexbox)`
  position: relative;
  background: ${props => props.theme.gradients[400]};
  transition: all 0.4s ease;
  border-radius: 14px;
  margin-bottom: 16px;
  cursor: pointer;
  filter: none;
  &:hover {
    filter: contrast(1.2);
    &:before {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props => props.theme.gradients[300]};
      filter: blur(20px);
      opacity: var(0.7);
      transition: opacity 0.3s;
      border-radius: inherit;
    }
    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      border-radius: inherit;
    }
  }
`
export const StyledSpeakersSectionWrapper = styled(Flexbox)`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left bottom 5vh;
  background-size: 70vh;
  background-attachment: fixed;
`
