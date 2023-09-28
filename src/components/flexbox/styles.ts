import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { flexPosition, getHeight, getWidth } from 'utils'
import { FlexboxProps } from './types'

export const StyledFlexbox = styled.div<FlexboxProps>`
  ${({
    fullHeight,
    fullScreen,
    fullWidth,
    width,
    height,
    customStyles,
    alignItems,
    justifyContent,
    alignSelf,
    justifySelf,
    flexDirection,
    gap,
    noWrap,
  }): FlattenSimpleInterpolation => {
    return css`
      ${flexPosition(alignItems, justifyContent, flexDirection, alignSelf, justifySelf)};
      height: ${getHeight({ fullHeight, fullScreen, height })};
      width: ${getWidth({ fullWidth, fullScreen, width })};
      gap: ${gap ?? '0'};
      flex-wrap: ${noWrap ? 'nowrap' : 'wrap'};

      ${customStyles || {}}
    `
  }}
`
