import {
  Container,
  ParticlesComponent,
  SectionHeader,
  StyledGradientText,
  TiltComponent,
  Typography,
} from 'components'
import scheduleMock from 'mockups/schedule.json'
import Flip from 'react-reveal/Flip'
import { theme } from 'theme'
import {
  StyledEventBlock,
  StyledEventBlockContent,
  StyledEventBlockImage,
  StyledEventScheduleWrapper,
  StyledTopicsWrapper,
} from './styles'
const EventSchedule = () => {
  return (
    <>
      <StyledEventScheduleWrapper id="schedule">
        <ParticlesComponent id="event-particles" />
        <SectionHeader smallTitle="Our Agenda" title="Event Agenda and Schedule" />
        <Container>
          <StyledTopicsWrapper>
            {scheduleMock.map((schedule, index) => (
              <Flip left delay={150 * index} key={index}>
                <TiltComponent>
                  <StyledEventBlock flexDirection="row">
                    <StyledEventBlockImage
                      style={{ backgroundImage: `url(${schedule.image})` }}
                    />
                    <StyledEventBlockContent alignItems="flex-start">
                      <StyledGradientText as="span">
                        Host: {schedule.hostedBy}
                      </StyledGradientText>
                      <Typography
                        as="h5"
                        color={theme.colors.black}
                        fontSize="18px"
                        weight={700}
                      >
                        {schedule.title.toUpperCase()}
                      </Typography>
                    </StyledEventBlockContent>
                  </StyledEventBlock>
                </TiltComponent>
              </Flip>
            ))}
          </StyledTopicsWrapper>
        </Container>
      </StyledEventScheduleWrapper>
    </>
  )
}

export default EventSchedule
