import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GlobalStyles, theme } from './theme'
import { ThemeProvider } from 'styled-components'
import { Button, Typography, Flexbox } from './components'
import Intro from 'views/intro'
import Footer from 'views/footer'
import EventSponsors from 'views/event-sponsors'

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
        {/* Exemplos de uso dos componentes
            Novos componentes devem ser fortemente tipados
        */}
        <Intro />
        <Typography as="h2" color={theme.colors.white} weight={600} fontSize="48px">
          Identifying the Game Changing Trends in the WEB 3.0 Ecossystem
        </Typography>
        <Button>Register Now</Button>
        <EventSponsors />
        <Footer />
        <Flexbox width="80px"></Flexbox>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
