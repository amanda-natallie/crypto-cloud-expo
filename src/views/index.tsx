import { Flexbox } from 'components'
import Intro from './intro'
import AboutUs from './about-us'
import { useMediaQuery } from 'hooks'
import EventSchedule from './event-schedule'
import EventSponsors from './event-sponsors'
import Footer from './footer'

const PageIndex = () => {
  const is1024 = useMediaQuery('(max-width: 1024px)')
  return (
    <>
      <Intro />
      <Flexbox
        fullWidth
        alignItems="center"
        justifyContent="center"
        customStyles={{ marginTop: is1024 ? '92.7vh' : '90.9vh' }}
      >
        <AboutUs />
        <EventSchedule />
        <EventSponsors />
        <Footer />
      </Flexbox>
    </>
  )
}

export default PageIndex
