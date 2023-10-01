// use o react-hook-form para criar o formulário de registro
// use o yup para validar o formulário
// use o axios para fazer o post do formulário (mock por enquanto)
// exporte a shape que está no background dessa section no Figma

import { Container, Flexbox, StyledGradientText, Typography } from 'components'
import { theme } from '../../theme'
import iconBrand from '../../assets/Icons/Brand.svg'
import { Form, Button, Input, StyledSpeakersSectionWrapper } from './styles'

const RegisterForm = () => {
  return (
    <StyledSpeakersSectionWrapper fullWidth id="contact">
      <Container>
        <Flexbox
          flexDirection="row"
          gap="68px"
          justifyContent="center"
          customStyles={{ padding: '100px' }}
        >
          <Flexbox width="400px" gap="20px">
            <Typography as="h1" fontSize="48px" fontWeight="700" lineHeight="64px">
              Why Should You Attend Our all Conference
            </Typography>
            <Typography as="span" fontSize="16px" fontWeight="400" lineHeight="34px">
              Lorem ipsum dolor sit amet, conseca dipisicing elit, sed do eius tempor
              incididunt. Lorem ipsum dolor sit amet, conseca dipisicing elit,
            </Typography>
          </Flexbox>
          <Flexbox alignItems="flex-start">
            <Flexbox
              gap="14px"
              customStyles={{ marginBlock: '5vh' }}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Flexbox gap="4px" flexDirection="row">
                <img src={iconBrand} alt="Brand Icon" style={{ width: '60px' }} />
                <StyledGradientText>We want you there</StyledGradientText>
              </Flexbox>
              <Typography
                fontSize="36px"
                weight={700}
                lineHeight="65px"
                color={theme.colors.white}
              >
                Register Now
              </Typography>
            </Flexbox>
            <Form>
              <Flexbox gap="19px" flexDirection="row" width="700px">
                <Input type="text" placeholder="Your name" />
                <Input type="email" placeholder="Email address" />
                <Input type="text" placeholder="Phone Number" />
                <Input type="text" placeholder="Subject" />
                <Button type="submit">Submit Registration</Button>
              </Flexbox>
            </Form>
          </Flexbox>
        </Flexbox>
      </Container>
    </StyledSpeakersSectionWrapper>
  )
}

export default RegisterForm
