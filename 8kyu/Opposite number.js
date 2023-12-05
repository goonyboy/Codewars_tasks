// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  if (number != 0) {
    return number * (-1)
  } else {
    return 0
  }
}
console.log(opposite(4))
console.log(opposite(-2.2))
console.log(opposite(0))
