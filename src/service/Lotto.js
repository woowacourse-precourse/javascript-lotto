const { Console } = require("@woowacourse/mission-utils");
const { NUMBERS } = require("../constants/constants");
const {
  validateWinningNumbers,
  validateBonusNumber,
} = require("../utils/validators");

class Lotto {
  #numbers;

  constructor(numbers, winningNumbers, bonusNumber, cost) {
    this.#numbers = numbers;
    this.validateWinningNumbers = validateWinningNumbers;
    this.validateBonusNumber = validateBonusNumber;

    this.validateWinningNumbers(winningNumbers);
    this.validateBonusNumber(bonusNumber, winningNumbers);

    this.result = this.calculateResult(winningNumbers, bonusNumber);
    this.resultMessage = this.getResultMessage(this.result, cost);
    this.printResult(this.resultMessage);
  }

  getResultMessage = (result, cost) => {
    const rateOfReturn = this.calculateRateOfReturn(result, cost);

    const resultMessage = `당첨 통계
    ---
    3개 일치 (5,000원) - ${result.fifth}개
    4개 일치 (50,000원) - ${result.fourth}개
    5개 일치 (1,500,000원) - ${result.third}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개
    6개 일치 (2,000,000,000원) - ${result.first}개
    총 수익률은 ${rateOfReturn}%입니다.
    `;

    return resultMessage;
  };

  calculateResult = (winningNumbers, bonusNumber) => {
    const result = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };

    const sevenNums = [...winningNumbers, bonusNumber].map((x) => Number(x));
    const lottoNumbers = this.#numbers;

    let count = 0;

    for (const lottoNumber of lottoNumbers) {
      lottoNumber.forEach((eachNum) => {
        if (sevenNums.includes(eachNum)) count++;
      });
      switch (count) {
        case 3:
          result["fifth"] += 1;
          break;
        case 4:
          result["fourth"] += 1;
          break;
        case 5:
          result["third"] += 1;
          break;
        case 6:
          if (lottoNumber.includes(bonusNumber)) {
            result["second"] += 1;
          } else result["first"] += 1;
          break;
      }
      count = 0;
    }

    return result;
  };
  calculateRateOfReturn = (result, cost) => {
    let rate = 0;

    const returned =
      NUMBERS.FIFTH_PRIZE * result.fifth +
        NUMBERS.FOURTH_PRIZE * result.fourth +
        NUMBERS.THIRD_PRIZE * result.third +
        NUMBERS.SECOND_PRIZE * result.second +
        NUMBERS.FIRST_PRIZE * result.first || 0;
    const purchased = Number(cost);

    rate = (returned / purchased) * 100;

    return Number(rate.toFixed(1));
  };

  printResult(resultMessage) {
    Console.print(resultMessage);
  }
}

module.exports = Lotto;
