import { Flexbox } from 'components'
import { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Flexbox
      width="75vw"
      flexDirection="row"
      alignItems="center"
      fullHeight
      customStyles={{ maxWidth: '1502px' }}
    >
      {children}
    </Flexbox>
  )
}

export default Container
