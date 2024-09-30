//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
// ------------------------- THESE EXPLICT TYPE DECLARATIONS ARE NOT NEEDED , typescript automatically set type based on initializer type.
let id: number = 101;
let named: string = "John Doe";
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

//fucntions-------------------------------------------
function randomFunction(name: string, age2: number): string {
  return `${name} Age is ${age2}.`;
}
console.log(randomFunction("Abcd", 10));
