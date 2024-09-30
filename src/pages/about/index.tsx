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
// ------------------------- THESE EXPLICT TYPE DECLARATIONS ARE NOT NEEDED , typescript automatically set type based on initializer type.
// let id: number = 101;
// let named: string = "John Doe";
// let isMale: boolean = true;
// let passed: undefined;
// let priceInWallet: null = null;

// //Array-------------------------------------------
// let subjects: string[] = ["math", "science", "english"];
// let marks: number[] = [1, 2, 3];
// let isTough: boolean[] = [true, true, false];
// let isXyz: undefined[] = [undefined];
// let isNull: null[] = [null];

// let mixedArray: [number, string] = [10, "shiv"];
// let anyArray: any = [10, "shiv", [10, 12, "s"], {}];

//Object--------------------------------------------
// let grades: any = {
//   Mark: 90,
//   imp: true,
//   teacher: "Akshay",
// };
// let subject: { mark: number; imp: boolean; teacher: string } = {
//   mark: 90,
//   imp: true,
//   teacher: "Akshay",
// };

//fucntions-------------------------------------------
// function randomFunction(name: string, age2: number): string {
//   return `${name} Age is ${age2}.`;
// }
// console.log(randomFunction("Abcd", 10));

// Example2----------------
// const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string based on item type of array
// names.forEach(function (str) {
//   return console.log(str.toUpperCase());
// });

// Contextual typing also applies to arrow functions
// names.forEach((str) => console.log(str.toUpperCase()));

//Example 3++++++++++ passing obj to a function
// function printCoord(pt: { x: number; y: number }) {
//   console.log("X cordinate value-", pt.x);
//   console.log("Y cordinate value-", pt.y);
// }
// printCoord({ x: 100, y: 200 });

//Example 4 ++++++++.  Optional property in a object   by using ?
// function printName(person: { first: string; last?: string }) {
//   console.log(person.first + person.last);
// }
// printName({ first: "Bob" });
// printName({ first: "Bob", last: "Jeral" });

// function printName(obj: { first: string; last?: string }) {
//   console.log(obj.first.toUpperCase());
//   console.log(obj.last?.toUpperCase());
// }
// printName({ first: "shiv" });

//Working with union types-----------------
// Example 1
// function printId(id: string | number) {
//   if (typeof id === "string") {
//     return id.toUpperCase();
//   } else {
//     return id;
//   }
// }
// console.log(printId("CallerIdIsAllowed"));

let funReturnString = (): string => {
  // console.log("first");
  return "Hello";
};

// let funReturn = (): void => {
//   console.log("hjii");
//   // return 1;       // nota llowed
// };

//Type aliases..................................................................
type userType = {
  username: string;
  age: number;
  phone?: string;
};
function betterFun(user: userType) {
  return user.age;
}

type myFunc = (a: number, b: string) => void;
let write: myFunc = (num, str) => console.log(num + " times " + str);
console.log(write(10, "AAA"));

type userType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light"; // String Literal type
};
const userWithTheme: userType2 = {
  username: "shivram",
  phone: "+91 94095",
  age: 25,
  theme: "light",
  // theme: "pink"            // Not allowed
};

//
