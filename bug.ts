function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is correctly inferred as number
let result2 = subtract(10, 5); // result2 is correctly inferred as number

//Uncommon error: Type inference on function return values can be unexpected when using generics
function genericFunction<T>(arg: T): T {
    return arg;
}

let result3 = genericFunction<number>(5); //result3 is number
let result4 = genericFunction<string>("hello"); //result4 is string
let result5 = genericFunction(true); //result5 is boolean

//the above is correct but if we don't specify the type of the generic in the function call, type inference may cause an error.
let result6 = genericFunction(5); // TypeScript compiler infers the type of T as number, this works as expected
//let result7 = genericFunction("hello"); // Type 'string' is not assignable to type 'number'. error because the compiler tries to infer the type of T based on the first function call
let result7 = genericFunction(true); // Type 'boolean' is not assignable to type 'number'. error because the compiler tries to infer the type of T based on the first function call

//To avoid this issue, always specify the type parameter when calling generic functions or use type assertions.
let result8 = genericFunction<number>(5); //correct
let result9 = genericFunction<string>("hello"); //correct
let result10 = genericFunction<boolean>(true); //correct
let result11 = genericFunction<any>(5); //correct, allows any type but could lead to runtime errors