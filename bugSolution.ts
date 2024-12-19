function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is correctly inferred as number
let result2 = subtract(10, 5); // result2 is correctly inferred as number

//Corrected generic function calls with explicit type parameters
function genericFunction<T>(arg: T): T {
    return arg;
}

let result3 = genericFunction<number>(5); //result3 is number
let result4 = genericFunction<string>("hello"); //result4 is string
let result5 = genericFunction<boolean>(true); //result5 is boolean

//Explicitly specifying the type parameter avoids type inference issues
let result6 = genericFunction<number>(5); //correct
let result7 = genericFunction<string>("hello"); //correct
let result8 = genericFunction<boolean>(true); //correct
let result9 = genericFunction<any>(5); //correct, allows any type but could lead to runtime errors