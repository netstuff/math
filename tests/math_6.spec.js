import {
  numSum,
  getDividers,
  isDivisibleBy9,
  isDivisibleBy3,
  checkIsSimple,
  checkIsCompound,
  calcProportion,
  getMaxDivider,
  getMinMultiple,
  getCircleLength,
  getCircleArea
} from "../src/math_6";

it("Сумма членов натурального ряда", () => {
  expect(numSum(123)).toEqual(6);
  expect(numSum(321)).toEqual(6);
  expect(numSum(1043)).toEqual(8);
});

/*
it("Поиск всех делителей числа", () => {
  expect(getDividers(2)).toEqual([1, 2]);
  expect(getDividers(3)).toEqual([1, 3]);
  expect(getDividers(4)).toEqual([1, 2, 4]);
  expect(getDividers(10)).toEqual([1, 2, 5, 10]);
  expect(getDividers(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
});
*/

it("Проверка делимости на 9", () => {
  expect(isDivisibleBy9(9)).toBeTruthy();
  expect(isDivisibleBy9(19)).toBeFalsy();
  expect(isDivisibleBy9(123)).toBeFalsy();
  expect(isDivisibleBy9(270)).toBeTruthy();
  expect(isDivisibleBy9(1818)).toBeTruthy();
});

it("Проверка делимости на 3", () => {
  expect(isDivisibleBy3(569)).toBeFalsy();
  expect(isDivisibleBy3(134)).toBeFalsy();
  expect(isDivisibleBy3(2727)).toBeTruthy();
  expect(isDivisibleBy3(4506)).toBeTruthy();
  expect(isDivisibleBy3(778)).toBeFalsy();
});

it("Определение простых чисел", () => {
  expect(checkIsSimple(1)).toBeTruthy();
  expect(checkIsSimple(2)).toBeTruthy();
  expect(checkIsSimple(3)).toBeTruthy();
  expect(checkIsSimple(4)).toBeFalsy();
  expect(checkIsSimple(5)).toBeTruthy();
  expect(checkIsSimple(6)).toBeFalsy();
  expect(checkIsSimple(7)).toBeTruthy();
  expect(checkIsSimple(8)).toBeFalsy();
  expect(checkIsSimple(9)).toBeFalsy();
});

it("Определение составных чисел", () => {
  expect(checkIsCompound(1)).toBeFalsy();
  expect(checkIsCompound(2)).toBeFalsy();
  expect(checkIsCompound(3)).toBeFalsy();
  expect(checkIsCompound(4)).toBeTruthy();
  expect(checkIsCompound(5)).toBeFalsy();
  expect(checkIsCompound(6)).toBeTruthy();
  expect(checkIsCompound(7)).toBeFalsy();
  expect(checkIsCompound(8)).toBeTruthy();
  expect(checkIsCompound(9)).toBeTruthy();
});

it("Проверка и расчет пропорции", () => {
  expect(calcProportion([1, 2], [2, 4])).toEqual(0.5);
  expect(calcProportion([24, 12], [200, 100])).toEqual(2);
  expect(calcProportion([1, 4], [14, 56])).toEqual(0.25);
  expect(calcProportion([5, 5], [3, 3])).toEqual(1);
  expect(calcProportion([1, 3], [1, 2])).toEqual(undefined);
});

/**
it("Поиск наибольшего общего делителя", () => {
  expect(getMaxDivider(2, 3)).toEqual(1);
  expect(getMaxDivider(2, 4)).toEqual(2);
  expect(getMaxDivider(8, 12)).toEqual(4);
  expect(getMaxDivider(100, 150)).toEqual(50);
});

it("Поиск наименьшего общего кратного", () => {
  expect(getMinMultiple(2, 3)).toEqual(6);
  expect(getMinMultiple(2, 4)).toEqual(4);
  expect(getMinMultiple(3, 4)).toEqual(12);
  expect(getMinMultiple(3, 9)).toEqual(9);
  expect(getMinMultiple(11, 13)).toEqual(143);
});
*/

it("Длина окружности", () => {
  expect(getCircleLength(1).toFixed(2)).toEqual("6.28");
  expect(getCircleLength(10).toFixed(2)).toEqual("62.83");
  expect(getCircleLength(21).toFixed(2)).toEqual("131.94");
});

it("Площадь круга", () => {
  expect(getCircleArea(1).toFixed(2)).toEqual("3.141");
  expect(getCircleArea(10).toFixed(2)).toEqual("31.415");
  expect(getCircleArea(21).toFixed(2)).toEqual("65.973");
});
