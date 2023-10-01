import { Container, Flexbox, StyledGradientText, Typography } from 'components'
import { theme } from '../../theme'
import iconBrand from '../../assets/Icons/Brand.svg'
import { Form, Button, Input, StyledRegisterSectionWrapper } from './styles'
import { useState } from 'react'
import axios from 'axios'

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

  return (
    <StyledRegisterSectionWrapper fullWidth id="contact">
      <Container>
        <Flexbox
          fullWidth
          flexDirection="row"
          gap="68px"
          justifyContent="center"
          alignItems="center"
          customStyles={{ padding: '100px' }}
        >
          <Flexbox gap="20px" justifyContent="center" alignItems="center" width="400px">
            <Typography as="h1" fontSize="48px" fontWeight="700" lineHeight="64px">
              Why Should You Attend Our all Conference
            </Typography>
            <Typography as="span" fontSize="16px" fontWeight="400" lineHeight="34px">
              Lorem ipsum dolor sit amet, conseca dipisicing elit, sed do eius tempor
              incididunt. Lorem ipsum dolor sit amet, conseca dipisicing elit,
            </Typography>
          </Flexbox>
          <Flexbox width="600px">
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
              <Flexbox fullWidth>
                <Flexbox gap="19px" flexDirection="row">
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
                </Flexbox>
              </Flexbox>
            </Form>
          </Flexbox>
        </Flexbox>
      </Container>
    </StyledRegisterSectionWrapper>
  )
}

export default RegisterForm
