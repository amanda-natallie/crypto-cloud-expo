import styled, { css, Interpolation } from 'styled-components'
import { FlexboxProps } from './types'
import { flexPosition, getHeight, getWidth } from 'utils'

export const StyledFlexbox = styled.div<FlexboxProps>`
  ${({
    fullHeight,
    fullScreen,
    fullWidth,
    width,
    height,
    customStyles,
    alignItems = 'center',
    justifyContent = 'flex-start',
    alignSelf,
    justifySelf,
    flexDirection = 'column',
    gap,
    noWrap,
  }): Interpolation<object>[] => {
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
