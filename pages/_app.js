import '../styles/index.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
      <>
        <Head>
          <title>B bennes 🚚🦺 tel: 09.50.92.20.30 | location de bennes au meilleur prix | Paris & Ile-de-France</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
              name="description"
              content="Devis gratuit - location benne à Paris pour vos déchets gravats de chantier - Prix les plus bas du marché en Ile-de-France"
          />
        </Head>
        <Component {...pageProps} />
      </>

  )

}

export default MyApp
