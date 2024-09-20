import Footer from "@/layout/Footer";
import { Raleway, Poppins } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from '@/layout/Header'

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
    <main className={`${raleway.className} ${poppins.className}`}>
      <Header /> 
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
