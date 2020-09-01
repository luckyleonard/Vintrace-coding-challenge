// Create a function in TypeScript that:
// Accepts an optional parameter of type number
// If a parameter is passed, increment the number by 1 and return the sum,
// If no parameter is passed, return 0

function getNumber(params?: number) {
  if (params) {
    return params++;
  }
  return 0;
}

console.log(getNumber());
