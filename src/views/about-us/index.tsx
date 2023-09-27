import imgAboutUs from 'assets/images/about-us.png'
import calendar from 'assets/icons/calendar-gradient.svg'
import mapMarker from 'assets/icons/map-marker-gradient.svg'
import { Flexbox, Typography, TypographyProps } from 'components'
import SectionHeader from 'components/section-header'
import { StyledAboutUsWrapper } from './styles'
import { useMediaQuery } from 'hooks'

const AboutUs = () => {
  const aboutTextProps: Partial<TypographyProps> = {
    fontSize: '17px',
    weight: 400,
    lineHeight: '28px',
    letterSpacing: '-0.018px',
  }

  const whenLocationTitleProps: Partial<TypographyProps> = {
    fontSize: '20px',
    weight: 700,
  }
  const is1024 = useMediaQuery('(max-width: 1304px)')

  return (
    <StyledAboutUsWrapper fullWidth height="75vh">
      <Flexbox width="90vw" flexDirection="row" alignItems="center" fullHeight>
        {!is1024 && (
          <Flexbox width="45%">
            <img src={imgAboutUs} alt="about us" className="three-imgs" />
          </Flexbox>
        )}
        <Flexbox
          width={is1024 ? '100%' : '55%'}
          alignItems="flex-start"
          customStyles={{ paddingLeft: '24px' }}
        >
          <SectionHeader
            smallTitle="Global Crypto Conference Hub"
            title="About the Conference"
            align="left"
          />
          <Flexbox gap="15px">
            <Typography {...aboutTextProps}>
              Crypto Cloud Expo is the blockchain conference network bringing together the
              key players of crypto industry and experts to redefine the future of
              finance. The edition of the Crypto Coin Expo will take place with the
              world&apos;s top crypto companies and blockchain entrepreneurs.
            </Typography>
            <Typography {...aboutTextProps}>
              Today, UAE, specifically Dubai is gearing up to become a global crypto hub.
              Thus, Crypto Cloud Expo will be the gathering in the region on behalf of the
              world of blockchain and cryptocurrency, with a wide range of topics focused
              on the financial technologies of the future, extensive networking
              opportunities and participation from more than 40 countries.
            </Typography>
          </Flexbox>
          <br />
          <Flexbox gap="16px" flexDirection="row" fullWidth>
            <Flexbox
              flexDirection="row"
              gap="16px"
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={calendar} alt="calendar" />
              <Flexbox alignItems="flex-start">
                <Typography {...whenLocationTitleProps}>WHEN</Typography>
                <Typography {...aboutTextProps}>October 5, 2023 - 6:00 PM</Typography>
              </Flexbox>
            </Flexbox>
            <Flexbox
              flexDirection="row"
              gap="16px"
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={mapMarker} alt="calendar" />
              <Flexbox alignItems="flex-start">
                <Typography {...whenLocationTitleProps}>LOCATION</Typography>
                <Typography {...aboutTextProps}>Dubai, ATLANTIS, THE PALM</Typography>
              </Flexbox>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </StyledAboutUsWrapper>
  )
}

export default AboutUs
