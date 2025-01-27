function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle null, undefined, and non-numeric inputs gracefully
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 'a')); // Output: 0
console.log(foo(0, false)); //Output: 0