import { FC, MouseEventHandler } from 'react'
import { StyledButton } from './styles'
import { ComponentProps } from 'components/types'

export interface ButtonProps extends ComponentProps {
  disabled?: boolean
  onClick: MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = props => {
  const { children, as = 'button', type = 'button', ...rest } = props
  return <StyledButton {...{ as, type, ...rest }}>{children}</StyledButton>
}

export default Button
