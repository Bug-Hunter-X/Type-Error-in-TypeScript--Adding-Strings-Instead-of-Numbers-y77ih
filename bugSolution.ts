function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); // Output: 8

result = subtract(10, 5); // result is 5
console.log(result); // Output: 5

// Solution 1: Explicit type conversion
result = add(parseInt("5"), parseInt("3"));
console.log(result); // Output: 8

// Solution 2: Using union type for flexibility
function addFlexible(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a;
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB;
}
result = addFlexible("5", "3");
console.log(result); //Output: 8
result = addFlexible(5, 3);
console.log(result); //Output: 8