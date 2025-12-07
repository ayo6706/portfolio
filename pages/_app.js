import { useEffect } from "react";
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="custraxx-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,o,f,js,fjs) {
              w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
              js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
              js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
          }(window,document,'script','custraxx','https://app.custraxx.com/custraxx-chat-widget.js'));

          custraxx('init', {
              agentName: 'ayomide',
              publicKey: '${process.env.NEXT_PUBLIC_CUSTRAXX_PUBLIC_KEY}',
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
