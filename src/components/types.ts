import { ReactNode } from 'react'
import { CSSObject, Interpolation } from 'styled-components'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  color?: string
  content?: string
  as?: string
  className?: string
  children?: ReactNode | string | undefined
  customStyles?: CSSObject | Interpolation<object>[]
  'data-testid'?: string
}
