// siga o mockup de schedule para criar o mockup de speakers
// renomeie as fotos dentro de assets/speakers para nome-do-palestrante.jpg
// exporte a shape que está no background dessa section no Figma
import speakersMock from '../../mockups/speakers.json'
import { Container, SectionHeader, StyledGradientText } from 'components'
import { Flexbox } from 'components'
import { Typography } from 'components'
import Fade from 'react-reveal/Fade'

const EventSpeakers = () => {
  return (
    <>
      <Flexbox fullWidth id="speakers" customStyles={{ padding: '32px' }}>
        <SectionHeader smallTitle="Who Will Speakers" title="Event Speakers" />
        <Container>
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
                  <StyledGradientText as="h3" fontSize="32px">
                    {speakers.speaker}
                  </StyledGradientText>
                  <Typography>{speakers.specialist}</Typography>
                </Flexbox>
              </Fade>
            ))}
          </Flexbox>
        </Container>
      </Flexbox>
    </>
  )
}

export default EventSpeakers
