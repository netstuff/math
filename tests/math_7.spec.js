import { getNumbersRange, checkTriangle } from "../src/math_7";

it("Размах ряда", () => {
  expect(getNumbersRange(1, 2, 7, 8, 9)).toEqual(8);
  expect(getNumbersRange(100, 2, 34, 53, 47)).toEqual(98);
  expect(getNumbersRange(11, 9, 22)).toEqual(13);
});

it("Проверка суммы углов треугольника", () => {
  expect(checkTriangle(10)).toBeUndefined();
  expect(checkTriangle(10, 10)).toBeUndefined();
  expect(checkTriangle(10, 10, 10, 10)).toBeUndefined();
  expect(checkTriangle(60, 60, 60)).toBeTruthy();
  expect(checkTriangle(120, 30, 30)).toBeTruthy();
  expect(checkTriangle(30, 30, 30)).toBeFalsy();
  expect(checkTriangle(120, 90, 60)).toBeFalsy();
  expect(checkTriangle(30, 60, 90)).toBeTruthy();
});

it("Вычисление атмосферного давления", () => {
  expect(calcAtmoPresure(160000)).toEqual();
});

it("Квадрат суммы", () => {
  expect(getSumSquare(3, 2).toEqual(25));
});

it("Квадрат разницы", () => {
  expect(getSumSquare(3, 2).toEqual(1));
});

it("Куб суммы", () => {
  expect(getSumCube(3, 2).toEqual(125));
});

it("Куб разницы", () => {
  expect(getSumCube(3, 2).toEqual(1));
});
