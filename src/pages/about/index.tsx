import styled from "styled-components";

export default function About() {
  return (
    <Wrapper>
      <h1>About page is here</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: green;
  background-color: lightyellow;
  height: 200px;
  margin: 20px 0;
  border: 1px solid black;
`;
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// ------------------------- These explict type declarations are not needed , typescript automatically set type based on initializer type.
let id: number = 101;
let name: string = "John Doe";
let isMale: boolean = true;
let passed: undefined;
let priceInWallet: null = null;

//Array-------------------------------------------
let subjects: string[] = ["math", "science", "english"];
let marks: number[] = [1, 2, 3];
let isTough: boolean[] = [true, true, false];
let isXyz: undefined[] = [undefined];
let isNull: null[] = [null];

let mixedArray: [number, string] = [10, "shiv"];
let anyArray: any = [10, "shiv", [10, 12, "s"], {}];

//Object--------------------------------------------
let grades: any = {
  Mark: 90,
  imp: true,
  teacher: "Akshay",
};
let subject: { mark: number; imp: boolean; teacher: string } = {
  mark: 90,
  imp: true,
  teacher: "Akshay",
};
