// siga o mockup de schedule para criar o mockup de speakers
// renomeie as fotos dentro de assets/speakers para nome-do-palestrante.jpg
// exporte a shape que está no background dessa section no Figma
import speakersMock from '../../mockups/speakers.json'
import { Container } from 'components'
import { Flexbox } from 'components'
import { StyledTitleSpeakers } from './styles'
import iconBrand from '../../assets/Icons/Brand.svg'
import waves from '../../assets/shapes/waves.svg'
import { Typography, TypographyProps } from 'components'
import Fade from 'react-reveal/Fade'

const EventSpeakers = () => {
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
    <Flexbox customStyles={{ marginBottom: '6rem' }}>
      <Container>
        <StyledTitleSpeakers fullWidth gap="10px">
          <img src={iconBrand} alt="Brand Icon" />
          <Typography {...titleTextProps}>Who Will Speakers</Typography>
        </StyledTitleSpeakers>
        <Flexbox fullWidth customStyles={{ marginBottom: '48px' }}>
          <Typography {...sponsorsTextProps}>Event Speakers</Typography>
          <img src={waves} alt="Shape" />
        </Flexbox>

        <Flexbox flexDirection="row" justifyContent="center" gap="90px">
          {speakersMock.map((speakers, index) => (
            <Fade key={index}>
              <Flexbox>
                <Flexbox>
                  <img
                    src={speakers.image}
                    alt="Sponsors img"
                    style={{ width: '250px' }}
                  />
                </Flexbox>
                <Typography as="h3" fontSize="20px">
                  {speakers.speaker}
                </Typography>
                <Typography>{speakers.specialist}</Typography>
              </Flexbox>
            </Fade>
          ))}
        </Flexbox>
      </Container>
    </Flexbox>
  )
}

export default EventSpeakers
