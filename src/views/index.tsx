import { Flexbox } from 'components'
import Intro from './intro'

const PageIndex = () => {
  return (
    <>
      <Intro />
      <Flexbox
        fullWidth
        alignItems="center"
        justifyContent="center"
        customStyles={{ marginTop: '100vh' }}
      >
        <h1>Content</h1>
      </Flexbox>
    </>
  )
}

export default PageIndex
