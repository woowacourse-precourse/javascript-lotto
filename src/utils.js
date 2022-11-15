const { Random, Console } = require('@woowacourse/mission-utils');
const { NOT_NUMBER_DIVISION } = require('./Constant');
const { validInteger } = require('./validation');

const readLineConsole = (msg, callback) => {
  Console.readLine(`${msg}\n`, (answer) => {
    printConsole('\n');

    callback(answer.trim());
  });
};

const printConsole = (msg) => {
  Console.print(msg);
};

/**
 * 정수가 아니면 에러, 맞으면 정수 반환
 * @param {string} value
 * @returns {number} 10진수 숫자
 */
const convertToInteger = (value) => {
  validInteger(value);

  return Number.parseInt(value, 10);
};

/**
 *  minBound ~ maxBound 사이의 n개의 서로 다른 랜덤한 숫자 생성
 * @param {number} n
 * @param {number} minBound
 * @param {number} maxBound
 * @returns {number[]}
 */
const getRandomNumbers = (n, minBound = 1, maxBound = 9) => {
  const randomNumbers = Random.pickUniqueNumbersInRange(minBound, maxBound, n);

  return randomNumbers;
};

/**
 * 몫 계산
 * @param {number} number
 * @param {number} divider
 * @returns
 */
const calcPortion = (number, divider) => {
  if (Number.isNaN(number) || Number.isNaN(divider)) {
    throw new Error(NOT_NUMBER_DIVISION);
  }

  return parseInt(number / divider, 10);
};

/**
 * 소수점 n 자리에서 반올림
 * @param {number} number
 * @param {number} n
 * @returns number
 */
const roundNDigit = (number, n) => {
  const pow = 10 ** n;
  const result = Math.round(number * pow) / pow;
  return result;
};

/**
 * 두 리스트의 교집합 리스트
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {any[]}
 */
const getIntersectionList = (list1, list2) => {
  const intersectionList = list1.filter((it) => list2.includes(it));
  return intersectionList;
};

module.exports = {
  getRandomNumbers,
  calcPortion,
  roundNDigit,
  getIntersectionList,
  convertToInteger,
  readLineConsole,
  printConsole,
};
