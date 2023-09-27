import { Typography } from 'components'
import styled from 'styled-components'

export const StyledGradientText = styled(Typography)`
  background: ${({ theme }) => theme.gradients[100]};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
