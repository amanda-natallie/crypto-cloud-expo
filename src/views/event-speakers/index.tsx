import speakersMock from '../../mockups/speakers.json'
import { Container, SectionHeader, StyledGradientText, TiltComponent } from 'components'
import { Flexbox } from 'components'
import { Typography } from 'components'
import Fade from 'react-reveal/Fade'
import { StyledSpeakerBlock, StyledSpeakersSectionWrapper } from './styles'

const EventSpeakers = () => {
  return (
    <StyledSpeakersSectionWrapper fullWidth id="speakers">
      <SectionHeader smallTitle="Who Will Speakers" title="Event Speakers" />
      <Container>
        <Flexbox flexDirection="row" justifyContent="center" gap="90px">
          {speakersMock.map((speakers, index) => (
            <Fade key={index}>
              <TiltComponent>
                <Flexbox>
                  <StyledSpeakerBlock>
                    <img
                      src={speakers.image}
                      alt="Sponsors img"
                      style={{ width: '250px' }}
                    />
                  </StyledSpeakerBlock>
                  <StyledGradientText as="h3" fontSize="32px">
                    {speakers.speaker}
                  </StyledGradientText>
                  <Typography>{speakers.specialist}</Typography>
                </Flexbox>
              </TiltComponent>
            </Fade>
          ))}
        </Flexbox>
      </Container>
    </StyledSpeakersSectionWrapper>
  )
}

export default EventSpeakers
