# Unexpected Type Inference with Generics in TypeScript

This repository demonstrates an uncommon error in TypeScript related to type inference with generic functions.  When a generic function is called without explicitly specifying the type parameter, TypeScript's type inference can be unpredictable, leading to unexpected type errors.  This issue is particularly relevant in scenarios where the function returns a value of the generic type and is called multiple times with different types.

## Bug Description

The bug arises when a generic function is called multiple times with different type arguments without explicitly specifying the type parameter each time. The compiler infers the type of the generic from the first call, causing subsequent calls with incompatible types to generate type errors. 

## Solution

To resolve this issue, always explicitly specify the type parameter when calling generic functions. Alternatively, consider using type assertions or changing the design to avoid this implicit type inference problem.