import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  color?: string
  content?: string
  as?: keyof JSX.IntrinsicElements
  className?: string
  children?: JSX.Element | JSX.Element[] | string
  customStyles?: CSSObject | FlattenSimpleInterpolation
}
