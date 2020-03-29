/** Get the sum of passed numbers. */
export function sum (...numbers) {
  return numbers.reduce((res, val) => res + val, 0);
}

/** Get rectangle total perimeter. */
export function perimeterRect (a, b) {
  return (a + b) * 2;
}

/** Get rectangle total perimeter. */
export function perimeterSquare (a) {
  return perimeterRect(a, a);
}

/** Get average ariphmetic value. */
export function average (...numbers) {
  var total = sum(...numbers); // total sum of numbers
  var count = numbers.length; // total count of numbers
  return total / count;
}

/** Get percentage ratio of num by total. */
export function percentage (num, total) {
  return Math.floor((num / total) * 100);
}

/** Get the value of corner which adjacent to passed. */
export function getAdjacentCorner (a) {
  /*
  FIXME: you should to pass an argumet to function
        and use it in next mathematic operation.
  */

  return 180 - a;
}
