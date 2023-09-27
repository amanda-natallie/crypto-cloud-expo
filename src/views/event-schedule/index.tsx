import {
  Container,
  Flexbox,
  SectionHeader,
  StyledGradientText,
  Typography,
} from 'components'
import {
  StyledEventBlock,
  StyledEventBlockContent,
  StyledEventBlockImage,
  StyledEventScheduleWrapper,
} from './styles'
import scheduleMock from 'mockups/schedule.json'
import { theme } from 'theme'
import Flip from 'react-reveal/Flip'
const EventSchedule = () => {
  return (
    <StyledEventScheduleWrapper>
      <SectionHeader smallTitle="Our Agenda" title="Event Agenda and Schedule" />
      <Container>
        <Flexbox
          gap="30px"
          fullWidth
          flexDirection="row"
          customStyles={{
            marginTop: '32px',
            '& > div': {
              width: 'calc(50% - 15px)',
            },
          }}
        >
          {scheduleMock.map((schedule, index) => (
            <Flip left delay={150 * index} key={index}>
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
            </Flip>
          ))}
        </Flexbox>
      </Container>
    </StyledEventScheduleWrapper>
  )
}

export default EventSchedule
