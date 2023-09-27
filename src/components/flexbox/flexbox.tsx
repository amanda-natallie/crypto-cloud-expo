import { Ref, forwardRef } from 'react'
import { StyledFlexbox } from './styles'
import { FlexboxProps } from './types'

export const Flexbox = forwardRef(
  (props: FlexboxProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      children,
      as = 'div',
      alignItems = 'center',
      justifyContent = 'flex-start',
      flexDirection = 'column',
      ...rest
    } = props
    return (
      <StyledFlexbox {...{ as, alignItems, justifyContent, flexDirection, ref, ...rest }}>
        {children}
      </StyledFlexbox>
    )
  },
)

Flexbox.displayName = 'Flexbox'

export default Flexbox
