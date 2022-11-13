const Util = require("../src/Util");

describe("Util 클래스 테스트", () => {
  test("0~9로 이루어진 입력인지 테스트", () => {
    expect(Util.isNumericInput('0')).toEqual(true);
    expect(Util.isNumericInput('01')).toEqual(true);
    expect(Util.isNumericInput('12345')).toEqual(true);
    expect(Util.isNumericInput('123ab')).toEqual(false);
    expect(Util.isNumericInput('!@#$%')).toEqual(false);
  });

  test("0으로 시작하는 입력인지 테스트", () => {
    expect(Util.isZeroStartInput('0')).toEqual(true);
    expect(Util.isZeroStartInput('001')).toEqual(true);
    expect(Util.isZeroStartInput('0a1')).toEqual(true);
    expect(Util.isZeroStartInput('123')).toEqual(false);
    expect(Util.isZeroStartInput('')).toEqual(false);
  });

  test("0보다 큰 숫자 입력인지 테스트", () => {
    expect(Util.isPositiveNumber('123')).toEqual(true);
    expect(Util.isPositiveNumber('0')).toEqual(false);
    expect(Util.isPositiveNumber('-1')).toEqual(false);
    expect(Util.isPositiveNumber('')).toEqual(false);
    expect(Util.isPositiveNumber('a')).toEqual(false);
  });

  test("특정 단위로 나누어떨어지는지 테스트", () => {
    expect(Util.isDivisibleBy('3000', 1000)).toEqual(true);
    expect(Util.isDivisibleBy('1234', 1000)).toEqual(false);
    expect(Util.isDivisibleBy('abcd', 1000)).toEqual(false);
  });
  
  test("중복된 요소를 가지는지 테스트", () => {
    expect(Util.hasDuplicateElements([1,2,3,3])).toEqual(true);
    expect(Util.hasDuplicateElements(['a','b','b'])).toEqual(true);
    expect(Util.hasDuplicateElements('abb')).toEqual(true);
    expect(Util.hasDuplicateElements([1,2,3,4])).toEqual(false);
    expect(Util.hasDuplicateElements([1,'a',3])).toEqual(false);
  });

  test("n개의 요소를 가지고있는지 테스트", () => {
    expect(Util.hasNElements([1,2,3,4,5,6], 6)).toEqual(true);
    expect(Util.hasNElements([1,2,3], 1)).toEqual(false);
    expect(Util.hasNElements('abcdef', 6)).toEqual(true);
    expect(Util.hasNElements('abcdef ', 6)).toEqual(false);
  });

  test("오름차순 정렬된 숫자배열을 반환하는지 테스트", () => {
    expect(Util.getSortedArrayInAsc([4,3,1,2,6,5])).toEqual([1,2,3,4,5,6]);
    expect(Util.getSortedArrayInAsc([11,2,13,5,7,9])).toEqual([2,5,7,9,11,13]);
    expect(Util.getSortedArrayInAsc([0.1,3,-1])).toEqual([-1,0.1,3]);
  });

  test("배열 요소 모두 정해진 범위에 해당하는지 테스트", () => {
    expect(Util.isBetween([1,2,45,37,23,9], 1, 45)).toEqual(true);
    expect(Util.isBetween([-1,0,1,2,3,4,5], 1, 45)).toEqual(false);
    expect(Util.isBetween([1,2,45,37,50,5], 1, 45)).toEqual(false);
  });

  test("숫자string이 정해진 범위에 해당하는지 테스트", () => {
    expect(Util.isBetween('45', 1, 45)).toEqual(true);
    expect(Util.isBetween('123', 1, 45)).toEqual(false);
    expect(Util.isBetween('-1', 1, 45)).toEqual(false);
  });
});
