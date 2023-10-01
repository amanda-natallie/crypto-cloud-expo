import { Flexbox, Typography } from 'components'
import iconBrand from '../../assets/images/brand.svg'
import { theme } from '../../theme'
import { StyledCopyrightFooter } from './styles'

const Footer = () => {
  return (
    <Flexbox
      gap="20px"
      id="footer"
      fullWidth
      justifyContent="center"
      customStyles={{ paddingTop: '5vh', backgroundColor: '#161616' }}
    >
      <img src={iconBrand} alt="Brand Icon" />
      <StyledCopyrightFooter width="90%">
        <Typography as="span" color={theme.colors.white} marginTop="48px">
          Copyright © Vallori 2023. All rights reserved.
        </Typography>
      </StyledCopyrightFooter>
    </Flexbox>
  )
}

export default Footer
