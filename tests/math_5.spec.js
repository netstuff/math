import {
  sum,
  percentage,
  perimeterRect,
  perimeterSquare,
  average,
  getAdjacentCorner
} from "../src/math_5";

it("Сумма чисел", () => {
  expect(sum(1, 2, 3)).toEqual(6);
  expect(sum(3, 2, 1)).toEqual(6);
});

it("Периметр прямоугольника", () => {
  expect(perimeterRect(10, 20)).toEqual(60);
  expect(perimeterRect(1, 100)).toEqual(202);
  expect(perimeterRect(22, 33)).toEqual(110);
  expect(perimeterRect(11, 11)).toEqual(44);
});

it("Периметр квадрата", () => {
  expect(perimeterSquare(10)).toEqual(40);
  expect(perimeterSquare(20)).toEqual(80);
  expect(perimeterSquare(30)).toEqual(120);
  expect(perimeterSquare(1)).toEqual(4);
});

it("Среднее арифметическое", () => {
  expect(average(1, 2, 3, 4)).toEqual(2.5);
  expect(average(4, 3, 2, 1)).toEqual(2.5);
  expect(average(1, 1, 1, 1)).toEqual(1);
  expect(average(2, 4, 6, 8)).toEqual(5);
});

it("Расчет процентов", () => {
  expect(percentage(20, 100)).toEqual(20);
  expect(percentage(4.2, 10)).toEqual(42);
  expect(percentage(3, 9)).toEqual(33);
  expect(percentage(12, 200)).toEqual(6);
});

it("Величина смежного угла", () => {
  expect(getAdjacentCorner(90)).toEqual(90);
  expect(getAdjacentCorner(10)).toEqual(170);
  expect(getAdjacentCorner(170)).toEqual(10);
  expect(getAdjacentCorner(180)).toEqual(0);
});
