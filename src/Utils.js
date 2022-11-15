const { ERROR_MESSAGE } = require("./Constants");
const { Random } = require("@woowacourse/mission-utils");
const { Price } = require("./Constants");

const underThree = (_) => "underThree";
const three = (_) => "three";
const four = (_) => "four";
const five = (bonus) => (bonus ? "fivePlusBonus" : "five");
const six = (_) => "six";

module.exports = {
  Check: {
    wrongInput(userInput, errorHandler, errorMessage) {
      const isWrongInput = errorHandler(userInput);
      if (isWrongInput) throw new Error(errorMessage);
    },

    bonusNumberDuplicated(winningNumbers, bonusNumber, errorHandler) {
      const isDuplicated = errorHandler(winningNumbers, bonusNumber);

      if (isDuplicated) throw new Error(ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
    },
  },

  Format: {
    winningNumbers(winningNumbers) {
      return winningNumbers
        .split(" ")
        .join("")
        .split(",")
        .map((number) => parseInt(number));
    },
  },

  Process: {
    winningNumbersInput(input) {
      return input
        .split(" ")
        .join("")
        .split(",")
        .map((number) => parseInt(number))
        .filter((number) => !isNaN(number))
        .filter((number) => number >= 1 && number <= 45)
        .filter((number) => number === Math.floor(number));
    },
  },

  Create: {
    randomNumbers() {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    },

    statsBoard(data, performance) {
      return `
당첨 통계
---
3개 일치 (5,000원) - ${data.three}개
4개 일치 (50,000원) - ${data.four}개
5개 일치 (1,500,000원) - ${data.five}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${data.fivePlusBonus}개
6개 일치 (2,000,000,000원) - ${data.six}개
총 수익률은 ${performance}%입니다.
      `;
    },
  },

  ScoreMap: {
    0: underThree,
    1: underThree,
    2: underThree,
    3: three,
    4: four,
    5: five,
    6: six,
  },

  IncomeMap: {
    three: Price.FIVE_THOUSAND,
    four: Price.FIFTY_THOUSAND,
    five: Price.FIVE_HUNDRED_THOUSAND,
    fivePlusBonus: Price.THIRTY_MILLION,
    six: Price.TWO_BILLION,
  },

  DataForm: {
    underThree: 0,
    three: 0,
    four: 0,
    five: 0,
    fivePlusBonus: 0,
    six: 0,
  },
};
