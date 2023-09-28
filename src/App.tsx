import { ApplicationHeader, ParticlesComponent } from 'components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import PageIndex from 'views'
import { GlobalStyles, theme } from './theme'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Crypto Cloud Expo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content={theme.primary.main} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParticlesComponent id="intro-particles" />
        <ApplicationHeader />
        <PageIndex />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
