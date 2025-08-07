// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,800;1,400;1,500;1,700&display=swap" rel="stylesheet" />
          <meta name="robots" content="index, follow" />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <link rel="canonical" href="https://repotecc.com/" />
          <Script src="https://use.fontawesome.com/a71e5ce1d6.js" />
          <Script id="custraxx-loader" strategy="afterInteractive">
            {`
              (function(w,d,s,o,f,js,fjs) {
                  w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
                  js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
                  js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
              }(window,document,'script','custraxx','https://www.custraxx.com/custraxx-widget.js'));
              
              custraxx('init', {
                  agentName: 'ayomide'
              });
            `}
          </Script> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
