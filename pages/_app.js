import Script from 'next/script';
import { IBM_Plex_Mono, Public_Sans } from 'next/font/google';
import '../styles/globals.css';

const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${publicSans.style.fontFamily};
          --font-mono: ${plexMono.style.fontFamily};
        }
      `}</style>
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
  );
}

export default MyApp;
