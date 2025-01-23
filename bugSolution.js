function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}
console.log(foo(1, "1")); // Output: NaN

// Alternative using parseInt
function foo2(a,b){
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "1")); // Output: 2