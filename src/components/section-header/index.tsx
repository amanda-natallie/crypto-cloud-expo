import favicon from 'assets/images/favicon.svg'
import waves from 'assets/shapes/waves.svg'
import { Flexbox, Typography } from 'components'
import { StyledGradientText } from 'components/gradient-text'
import { theme } from 'theme'

interface SectionHeaderProps {
  title: string
  smallTitle: string
  align?: 'left' | 'center'
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, smallTitle, align = 'center' } = props
  return (
    <Flexbox
      alignItems={align === 'left' ? 'flex-start' : 'center'}
      gap="14px"
      customStyles={{ marginBottom: '14px' }}
    >
      <Flexbox gap="4px" flexDirection="row">
        <img src={favicon} alt="favicon" />
        <StyledGradientText>{smallTitle}</StyledGradientText>
      </Flexbox>
      <Typography
        fontSize="48px"
        weight={700}
        lineHeight="65px"
        color={theme.colors.white}
      >
        {title}
      </Typography>
      <img src={waves} alt="waves" />
    </Flexbox>
  )
}

export default SectionHeader
