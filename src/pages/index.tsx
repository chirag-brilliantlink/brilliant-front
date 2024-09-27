import styled from "styled-components";

export default function Home() {
  return (
    <>
      <main>
        <Wrapper>
          {" "}
          <h1>
            Whellodf Hello from Home page Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dicta, maxime?
          </h1>
        </Wrapper>
      </main>
    </>
  );
}

// Fetch data at build time using getStaticProps             SSG setup.
export async function getStaticProps() {
  // Replace with Sanity API call or static data
  const data = { title: "Welcome to My Static Site" };

  return {
    props: {
      data,
    },
  };
}

const Wrapper = styled.div`
  color: green;
  background-color: lightyellow;
  height: 200px;
  border: 1px solid black;
`;
