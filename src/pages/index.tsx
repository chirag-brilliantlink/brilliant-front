import Head from "next/head";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import styled from "styled-components"

// const inter = Inter({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"] });

const HomepageStyled = styled.div`
  color: green;
  background-color: lightyellow;
  height: 100px;
  border: 1px solid black;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${raleway.className}`}>
        <HomepageStyled> Hello from Home page ;</HomepageStyled> </main>
    </>
  );
}

// Fetch data at build time using getStaticProps             SSG setup.
export async function getStaticProps() {
  // Replace with Sanity API call or static data
  const data = { title: 'Welcome to My Static Site' };

  return {
    props: {
      data
    }
  };
}