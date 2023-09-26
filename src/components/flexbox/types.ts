import { ComponentProps } from '../types'

export interface FlexboxProps extends ComponentProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  justifySelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  flexDirection?: 'row' | 'column' | string
  bgColor?: string
  gap?: string
  noWrap?: boolean
  height?: string | number
  fullHeight?: boolean
  width?: string | number
  fullWidth?: boolean
  fullScreen?: boolean
}
