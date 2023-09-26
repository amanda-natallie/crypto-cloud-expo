import { forwardRef, Ref } from 'react'
import { StyledFlexbox } from './styles'
import { FlexboxProps } from './types'

export const Flexbox = forwardRef(
  (props: FlexboxProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...rest } = props
    return <StyledFlexbox {...{ ref, ...rest }}>{children}</StyledFlexbox>
  },
)

Flexbox.displayName = 'Flexbox'

export default Flexbox
