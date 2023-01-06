import Head from 'next/head'
import { Col, Container, Row } from 'reactstrap'
import '../styles/globals.scss'

const Header = () =>
  <Head>
    <meta charSet="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Auto Data Direct - Profiles</title>
  </Head>


const MyApp = ({ Component, pageProps }) => {
  return (
    <Container fluid>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
