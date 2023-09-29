// siga o mockup de schedule para criar o mockup de sponsors
// renomeie as fotos dentro de assets/sponsors para nome-do-sponsor.jpg
// exporte a imagem de background dessa section no Figma
// use o componente de SectionHeader que vc criou anteriormente

import sponsorsMock from '../../mockups/sponsors.json'
import { Container, SectionHeader } from 'components'
import { Flexbox } from 'components'
import { StyledEventSponsorsBlock, StyledSponsorWrapper } from './styles'
import Fade from 'react-reveal/Fade'

const EventSponsors = () => {
  return (
    <StyledSponsorWrapper fullWidth id="sponsors">
      <SectionHeader
        smallTitle="Check Who Make The Event Possible"
        title="Event Sponsors"
      />
      <Container>
        <Flexbox>
          <StyledEventSponsorsBlock>
            {sponsorsMock.map((sponsors, index) => (
              <Fade top delay={10 * index} key={index}>
                <img src={sponsors.image} alt="Sponsors img" />
              </Fade>
            ))}
          </StyledEventSponsorsBlock>
        </Flexbox>
      </Container>
    </StyledSponsorWrapper>
  )
}

export default EventSponsors
