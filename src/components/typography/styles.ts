import styled, { css } from 'styled-components'
import { TypographyProps } from './typography'

const toKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)

export const StyledTypography = styled.p<TypographyProps>`
  ${({
    as: _as,
    children: _children,
    gutter,
    gutterBottom,
    gutterHorizontal,
    gutterLeft,
    gutterRight,
    gutterTop,
    gutterVertical,
    weight,
    ...rest
  }) => {
    const { theme: _theme, className: _class, ...other } = rest
    const cssProps = other
      ? Object.keys(other).reduce((acc, key) => {
          const kebabKey = toKebabCase(key)
          return { ...acc, [kebabKey]: other[key as keyof typeof other] }
        }, {})
      : undefined

    return css`
      display: inline-block;
      margin-bottom: ${gutterBottom ? gutter : 0}px;
      margin-left: ${gutterLeft ? gutter : 0}px;
      margin-right: ${gutterRight ? gutter : 0}px;
      margin-top: ${gutterTop ? gutter : 0}px;
      margin-bottom: ${gutterBottom ? gutter : 0}px;
      margin-top: ${gutterVertical ? gutter : 0}px;
      margin-bottom: ${gutterVertical ? gutter : 0}px;
      margin-left: ${gutterHorizontal ? gutter : 0}px;
      margin-right: ${gutterHorizontal ? gutter : 0}px;
      font-weight: ${weight ?? 400};
      ${cssProps ? { ...cssProps } : null}
    `
  }}
`
