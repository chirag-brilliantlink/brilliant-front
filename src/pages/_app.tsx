import { Raleway, Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['400', '700']
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
          <title>Brilliant Link Studio</title>
          <meta name="description" content="Brilliant Link Studio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/chain.png" />
    </Head>
    <main className={`${raleway.className} ${poppins.className}`}>
      <Component {...pageProps} />
    </main>
    </>
  );
}
