// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
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
              }(window,document,'script','custraxx','https://www.custraxx.com/custraxx-chat-widget.js'));
              
              custraxx('init', {
                  agentName: 'ayomide',
                  publicKey: ${process.env.NEXT_PUBLIC_CUSTRAXX_PUBLIC_KEY},
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
