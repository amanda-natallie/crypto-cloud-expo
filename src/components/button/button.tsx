import { FC } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps {
  children: string | React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  as?: 'button' | 'a'
}

const Button: FC<ButtonProps> = props => {
  const { children, as = 'button', ...rest } = props
  return <StyledButton {...{ as, ...rest }}>{children}</StyledButton>
}

export default Button
