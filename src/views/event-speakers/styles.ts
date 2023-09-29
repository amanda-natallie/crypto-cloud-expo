import styled from 'styled-components'
import { Flexbox } from 'components'

export const StyledEventSpeakersBlock = styled(Flexbox)`
  flex-direction: row;
  gap: 60px;
  justify-content: center;

  width: 80%;
  img {
    /* background-color: blue; */
    width: 58%;
    height: 22%;
    border-radius: 10px;

    z-index: 99;
  }
`
export const StyledTitleSpeakers = styled(Flexbox)`
  flex-direction: row;
  align-items: baseline;
  gap: 16;
  justify-content: center;
  margin-bottom: 16px;
  img {
    width: 48px;
  }
`
