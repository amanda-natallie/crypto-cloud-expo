import { useState } from 'react'
import sponsorsMock from '../../mockups/sponsors.json'
import { Container, SectionHeader, TiltComponent } from 'components'
import { Flexbox } from 'components'
import { SponsorImage, StyledEventSponsorsBlock, StyledSponsorWrapper } from './styles'
import Fade from 'react-reveal/Fade'

const EventSponsors = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleImageHover = (index: number | null) => {
    setHoveredIndex(index)
  }

  const handleImageClick = (url: string | undefined) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <StyledSponsorWrapper fullWidth id="sponsors">
      <SectionHeader
        smallTitle="Check Who Make The Event Possible"
        title="Event Sponsors"
      />
      <Container>
        <Flexbox>
          <StyledEventSponsorsBlock>
            {sponsorsMock.map((sponsor, index) => (
              <Fade top delay={10 * index} key={index}>
                <TiltComponent>
                  <SponsorImage
                    onMouseEnter={() => handleImageHover(index)}
                    onMouseLeave={() => handleImageHover(null)}
                    onClick={() => handleImageClick(sponsor.url)}
                    isHovered={hoveredIndex === index}
                  >
                    <img src={sponsor.image} alt="Sponsors img" />
                  </SponsorImage>
                </TiltComponent>
              </Fade>
            ))}
          </StyledEventSponsorsBlock>
        </Flexbox>
      </Container>
    </StyledSponsorWrapper>
  )
}

export default EventSponsors
