import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" />
        <link href="https://static.add123.com/cdn/add-style/latest/add-style.min.css" rel="stylesheet" />
        <script src="https://static.add123.com/cdn/babel/polyfill/6.26.0/polyfill.min.js"></script>
        <script src="https://cdn.add123.com/addnav/latest/index.js"></script>
      </Head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <Script id="addSession">
          {`window.ADD123.getSession({
            ignoreCache: true
          })`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}