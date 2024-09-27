import { Raleway, Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true, //preload keyfonts to reduce loading time.
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

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
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
