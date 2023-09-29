// siga o mockup de schedule para criar o mockup de sponsors
// renomeie as fotos dentro de assets/sponsors para nome-do-sponsor.jpg
// exporte a imagem de background dessa section no Figma
// use o componente de SectionHeader que vc criou anteriormente

import sponsorsMock from '../../mockups/sponsors.json'
import { Container } from 'components'
import { Flexbox } from 'components'
import {
  StyledEventSponsorsBlock,
  StyledTitleSponsors,
  StyledSponsorWrapper,
} from './styles'
import iconBrand from '../../assets/Icons/Brand.svg'
import waves from '../../assets/shapes/waves.svg'
import { Typography, TypographyProps } from 'components'
import Fade from 'react-reveal/Fade'

const EventSponsors = () => {
  const titleTextProps: Partial<TypographyProps> = {
    fontFamily: "'Rubik'",
    fontSize: '18px',
    weight: 500,
    color: 'theme.colors.white',
  }
  const sponsorsTextProps: Partial<TypographyProps> = {
    fontFamily: "'Rubik'",
    fontSize: '48px',
    weight: 600,
    color: 'theme.colors.white',
    marginBottom: '10px',
  }
  return (
    <StyledSponsorWrapper fullWidth fullHeight id="sponsors">
      <Container>
        <StyledTitleSponsors fullWidth gap="10px">
          <img src={iconBrand} alt="Brand Icon" />
          <Typography {...titleTextProps}>Check Who Make The Event Possible</Typography>
        </StyledTitleSponsors>
        <Flexbox fullWidth customStyles={{ marginBottom: '48px' }}>
          <Typography {...sponsorsTextProps}>Event Sponsors</Typography>
          <img src={waves} alt="Shape" />
        </Flexbox>
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
