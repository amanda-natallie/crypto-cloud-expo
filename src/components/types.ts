import { ReactNode } from 'react'
import { CSSObject, Interpolation } from 'styled-components'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  color?: any
  content?: any
  as?: any
  className?: string
  children?: ReactNode | string | undefined
  customStyles?: CSSObject | Interpolation<object>[]
  'data-testid'?: string
}
