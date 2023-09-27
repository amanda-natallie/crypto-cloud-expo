// exporte o logotipo do footer que esta no figma, assim como os icones de redes sociais,
// telefone e email
import { theme } from '../../theme'
import { Flexbox, Typography } from 'components'
import iconBrand from '../../assets/Icons/Brand.svg'
import iconInsta from '../../assets/Icons/iconInstagram.svg'
import iconFacebook from '../../assets/Icons/iconFB.svg'
import iconTwitter from '../../assets/Icons/iconTT.svg'
import iconLinkedin from '../../assets/Icons/iconLink.svg'
import iconMail from '../../assets/Icons/iconE-Mail.svg'
import iconTel from '../../assets/Icons/iconTelefone.svg'

const Footer = () => {
  return (
    <Flexbox gap="20px">
      <Flexbox flexDirection="row" alignItems="baseline">
        <img src={iconBrand} alt="" />
        <Typography
          as="h2"
          color={theme.colors.white}
          weight={400}
          fontSize="16px"
          fontFamily="'Press Start 2P'"
        >
          CryptoCloud Expo
        </Typography>
      </Flexbox>
      <Typography
        as="h3"
        color={theme.colors.white}
        weight={400}
        fontSize="10px"
        fontFamily="'Press Start 2P'"
      >
        A wonderful serenity has taken possession of my entire soul, like these sweet
        mornings of spring which I enjoy with A wonderful serenity has taken possession of
        my entire soul
      </Typography>
      <Flexbox flexDirection="row" gap="10px">
        <img src={iconInsta} alt="Icone do instagram" style={{ width: '30px' }} />
        <img src={iconFacebook} alt="Icone do Facebook" style={{ width: '30px' }} />
        <img src={iconTwitter} alt="Icone do Twitter" style={{ width: '30px' }} />
        <img src={iconLinkedin} alt="Icone do Linkedin" style={{ width: '30px' }} />
      </Flexbox>
      <Flexbox gap="10px">
        <Typography as="span" color={theme.colors.white}>
          Copyright © Wellso 2022. All rights reserved.
        </Typography>
        <Flexbox flexDirection="row" gap="10px">
          <Flexbox flexDirection="row" gap="10px">
            <img src={iconTel} alt="Icone de um Telefone" style={{ width: '30px' }} />
            <Flexbox>
              <Typography as="span" color={theme.gradients[200]}>
                Get a Quote
              </Typography>
              <Typography as="span" color={theme.colors.white}>
                111 888666
              </Typography>
            </Flexbox>
          </Flexbox>
          <Flexbox flexDirection="row" gap="10px">
            <img src={iconMail} alt="Icone de um Telefone" style={{ width: '30px' }} />
            <Flexbox alignItems="flex-start">
              <Typography as="span" color={theme.gradients[200]}>
                Our Email
              </Typography>
              <Typography as="span" color={theme.colors.white}>
                info@Wellso.com
              </Typography>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

export default Footer
