import { Container, Flexbox, StyledGradientText, Typography } from 'components'
import { theme } from '../../theme'
import iconBrand from '../../assets/Icons/Brand.svg'
import { Form, Button, Input, StyledRegisterSectionWrapper } from './styles'
import { useState } from 'react'
import axios from 'axios'
import { useMediaQuery } from 'hooks'

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    axios
      .post('http://localhost:3000/registros', formData)
      .then(response => {
        console.log('Dados enviados com sucesso!', response.data)
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          subject: '',
        })
      })
      .catch(error => {
        console.error('Ocorreu um erro ao enviar os dados.', error)
      })
  }
  const isMobile = useMediaQuery('(max-width: 1024px)')
  return (
    <StyledRegisterSectionWrapper fullWidth id="contact">
      <Container>
        <Flexbox
          gap="20px"
          justifyContent="center"
          alignItems="center"
          width={isMobile ? '100%' : '40%'}
          customStyles={{ padding: !isMobile ? '4vw' : '4vw 0' }}
        >
          <Typography as="h1" fontSize="48px" fontWeight="700" lineHeight="64px">
            Why Should You Attend Our all Conference
          </Typography>
          <Typography as="span" fontSize="16px" fontWeight="400" lineHeight="34px">
            Lorem ipsum dolor sit amet, conseca dipisicing elit, sed do eius tempor
            incididunt. Lorem ipsum dolor sit amet, conseca dipisicing elit,
          </Typography>
        </Flexbox>
        <Flexbox width={isMobile ? '100%' : '60%'}>
          <Flexbox
            fullWidth
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="14px"
            customStyles={{ marginBlock: '5vh' }}
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
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <Button type="submit">Submit Registration</Button>
          </Form>
        </Flexbox>
      </Container>
    </StyledRegisterSectionWrapper>
  )
}

export default RegisterForm
