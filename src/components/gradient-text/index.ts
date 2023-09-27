import { Typography, TypographyProps } from 'components'
import styled from 'styled-components'

const StyledGradientText = styled(Typography)<TypographyProps>`
  background: ${({ theme }) => theme.gradients[100]};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export default StyledGradientText
