import { sum } from "./math_5";

/** Get range value of numbers sequence. */
export function getNumbersRange(...numbers) {
  var min = Math.min(...numbers); // минимальное число
  var max = Math.max(...numbers); // максимальное число

  return;
}

/** Get last corner value of triangle. */
export function checkTriangle(...angles) {
  if (angles.length !== 3) {
    console.error("Triangle must has only three corners!");
    return;
  }

  var total = sum(...angles); // Общая сумма переданных углов.

  /* TODO: You should to compare "total" with correct value 
          and return boolean value.
  */
  return 180 - angles;
}
