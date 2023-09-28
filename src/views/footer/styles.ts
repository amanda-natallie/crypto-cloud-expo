import styled from 'styled-components'
import { Flexbox } from 'components'

export const StyledCopyrightFooter = styled(Flexbox)`
  flex-direction: row;
  border-top: 1px solid #c3e0ff;
  justify-content: center;
  margin-bottom: 48px;
`
export const StyledIconsFooter = styled(Flexbox)`
  flex-direction: row;
  gap: 32px;
  margin-bottom: 32px;
  img {
    width: 48px;
  }
`
