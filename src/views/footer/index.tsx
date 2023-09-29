// exporte o logotipo do footer que esta no figma, assim como os icones de redes sociais,
// telefone e email
import { theme } from '../../theme'
import { Flexbox, Typography, TypographyProps } from 'components'
import iconBrand from '../../assets/Icons/Brand.svg'
import iconInsta from '../../assets/Icons/iconInstagram.svg'
import iconFacebook from '../../assets/Icons/iconFB.svg'
import iconTwitter from '../../assets/Icons/iconTT.svg'
import iconLinkedin from '../../assets/Icons/iconLink.svg'
import { useMediaQuery } from 'hooks'
import { StyledCopyrightFooter, StyledIconsFooter } from './styles'

const Footer = () => {
  // const isMobile = useMediaQuery('(max-width: 630px)')
  const isSmallDesktop = useMediaQuery('(max-width: 1088px)')
  const footerTitleTextProps: Partial<TypographyProps> = {
    fontFamily: "'Press Start 2P'",
    fontSize: '24px',
    weight: 400,
    color: 'theme.colors.black',
  }
  const footerTextProps: Partial<TypographyProps> = {
    fontFamily: "'Press Start 2P'",
    fontSize: '16px',
    weight: 400,
    lineHeight: '28px',
    letterSpacing: '-0.018px',
    color: 'theme.colors.white',
    as: 'h3',
    margin: '25px auto',
    textAlign: 'center',
  }
  return (
    <Flexbox gap="20px" id="footer" fullScreen justifyContent="center">
      <Flexbox flexDirection="row" alignItems="baseline" gap="16px">
        <img src={iconBrand} alt="Brand Icon" />
        <Typography {...footerTitleTextProps}>CryptoCloud Expo</Typography>
      </Flexbox>
      <Flexbox
        fullWidth
        alignItems="center"
        justifyContent="center"
        customStyles={{ marginBottom: '14px' }}
      >
        <Typography {...footerTextProps} maxWidth={isSmallDesktop ? '83vw' : '43vw'}>
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with A wonderful serenity has taken possession
          of my entire soul
        </Typography>
      </Flexbox>
      <StyledIconsFooter>
        <img src={iconFacebook} alt="Facebook icon" />
        <img src={iconTwitter} alt="Twitter icon" />
        <img src={iconLinkedin} alt="Linkedin icon" />
        <img src={iconInsta} alt="Instagram icon" />
      </StyledIconsFooter>
      <StyledCopyrightFooter width="90%">
        <Typography as="span" color={theme.colors.white} marginTop="48px">
          Copyright © Wellso 2022. All rights reserved.
        </Typography>
      </StyledCopyrightFooter>
    </Flexbox>
  )
}

export default Footer
