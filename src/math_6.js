/** Get the total sum from number members. */
export function numSum (number) {
  return String(number)
    .split("")
    .reduce((res, str) => res + Number(str), 0);
}

/** Get all dividers of passed number. */
export function getDividers (number) {
  var result = [];

  /*
    TODO: используя цикл while, необходимо перебирать все числа,
    которые <= указанного number и складывать в результат те,
    отстаток деления на которые равен 0. 
  */

  return result.sort((a, b) => (a <= b ? -1 : 1));
}

/** Divisibility for 9. */
export function isDivisibleBy9 (a) {
  return a % 9 === 0;
}

/** Divisibility for 3. */
export function isDivisibleBy3 (a) {
  return a % 3 === 0;
}

/**this function defines simple*/
export function checkIsSimple (num) {
  var naturals = [2, 3, 4, 5, 6, 7, 8, 9];
  for (var n of naturals) {
    if (num !== n && num % n === 0) {
      return false;
    }
  }

  return true;
}

/**defines compound*/
export function checkIsCompound (num) {
  return !checkIsSimple(num);
}

/** Check proportion and calculate result. */
export function calcProportion (frac1, frac2) {
  var [a, b, c, d] = [...frac1, ...frac2]; // пропорция по-порядку a / b = c / d
  if (a * d === c * b) {
    return a / b;
  }
}

/** Get maximum common divider of two numbers. */
export function getMaxDivider (a, b) {
  var aDiv = getDividers(a); // Все делители a
  var bDiv = getDividers(b); // Все делители b
  var intersect = aDiv.filter(elem => bDiv.includes(elem)); // Находим общие делители

  return Math.max(...intersect);
}

/** FIXME: you should to pass an argumet to function
        and use it in next mathematic operation.
 */
export function getMinMultiple (a, b) {
  /*
    TODO: НОК находится через НОД (см. правило)
  */
  return;
}

/** Get langth of cicle. */
export function getCircleLength (radius) {
  const pi = 3.14;
  //TODO: you should to calculate round length by pi and radius.
}

/** Get area of circle. */
/** TODO: you should to define a new function here
 *        for calculating area of the circle.
 *        Use body of "getCircleLength()" function for example!
 */
