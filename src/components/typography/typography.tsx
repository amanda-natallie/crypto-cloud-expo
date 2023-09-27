import { FC } from 'react'
import { CSSProperties } from 'styled-components'
import { StyledTypography } from './styles'
import { ComponentProps } from 'components/types'

export type TypographyProps = ComponentProps & {
  [key in keyof CSSProperties]: string | number
} & {
  children: React.ReactNode
  gutterBottom?: string
  gutterTop?: string
  gutterLeft?: string
  gutterRight?: string
  gutterVertical?: string
  gutterHorizontal?: string
  gutter?: string
  weight?: 400 | 500 | 600 | 700
}

const extractRest = (props: TypographyProps) => {
  const { as: _, children: __, className: ___, ...rest } = props
  return { ...rest }
}

const Typography: FC<TypographyProps> = props => {
  const { children, className, as = 'p' } = props
  return (
    <StyledTypography {...{ as, className }} {...extractRest(props)}>
      {children}
    </StyledTypography>
  )
}

export default Typography
