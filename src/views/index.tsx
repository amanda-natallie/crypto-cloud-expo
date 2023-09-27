import { Flexbox } from 'components'
import Intro from './intro'

const PageIndex = () => {
  return (
    <>
      <Intro />
      <Flexbox fullWidth height="1000vh" alignItems="center" justifyContent="center">
        <h1>Content</h1>
      </Flexbox>
    </>
  )
}

export default PageIndex
