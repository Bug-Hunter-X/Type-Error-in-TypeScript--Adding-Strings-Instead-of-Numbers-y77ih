# Type Error in TypeScript: Adding Strings Instead of Numbers

This repository demonstrates a common type error in TypeScript that occurs when passing strings to a function expecting numbers.

## The Bug

The `add` function is defined to accept two numbers and return their sum. However, in the example, it is called with two strings which results in type error.  The code also includes a `subtract` function to illustrate the expected behavior with valid numerical inputs.

## The Solution

The solution involves either explicitly converting the strings to numbers before passing them to the function, or defining the function to handle both numbers and strings as a flexible approach, though the type safety may be less strict.
