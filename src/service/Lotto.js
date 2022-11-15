const { Console } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGES,
  ERROR_MESSAGES,
  NUMBERS,
} = require("../constants/constants");
const { isOutOfRange, isDuplicated } = require("../utils/utils");

class Lotto {
  #numbers;

  constructor(cost, numbers) {
    this.#numbers = numbers;
    this.handleUserInput(cost);
  }

  handleUserInput = (cost) => {
    Console.readLine(GAME_MESSAGES.ASK_FOR_WINNING_NUMBERS, (winningNumber) => {
      const validWinningNumber = this.getWinningNumber(winningNumber);
      Console.readLine(GAME_MESSAGES.ASK_FOR_BONUS_NUMBER, (bonusNumber) => {
        const validBonusNumber = this.getBonusNumber(
          bonusNumber,
          winningNumber
        );
        const userInput = this.setUserInput(
          validWinningNumber,
          validBonusNumber
        );
        const resultMessage = this.getResultMessage(userInput, cost);

        Console.print(resultMessage);
        Console.print(GAME_MESSAGES.GAME_OVER);
      });
    });
  };

  validateWinningNumber = (winningNumber) => {
    if (winningNumber.length === NUMBERS.MIN_LOTTO_NUM)
      throw new Error(ERROR_MESSAGES.INVALID_SEPARATOR);
    if (winningNumber.length !== NUMBERS.MAX_LOTTO_NUM)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    if (isDuplicated(winningNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
    }
    if (isOutOfRange(winningNumber))
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

    return true;
  };
  validateBonusNumber = (bonusNumber, winningNumber) => {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.FORMAT_ERROR);
    }
    if (winningNumber.includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
    }
    if (isOutOfRange(bonusNumber))
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

    return true;
  };
  getWinningNumber = (input) => {
    const winningNumber = input.split(",").map((x) => Number(x));
    this.validateWinningNumber(winningNumber);
    Console.print(winningNumber);
    return winningNumber;
  };
  getBonusNumber = (bonusNumber, winningNumber) => {
    this.validateBonusNumber(bonusNumber, winningNumber);
    Console.print(bonusNumber);
    return Number(bonusNumber);
  };

  setUserInput = (winningNumber, bonusNumber) => {
    const userInput = {
      winningNumber,
      bonusNumber,
    };
    return userInput;
  };

  calculateResult = (userInput) => {
    const result = { fifth: 0, fourth: 0, third: 0, second: 0, first: 0 };

    const winningNumber = userInput.winningNumber;
    const bonusNumber = userInput.bonusNumber;
    const sevenNums = [...winningNumber, bonusNumber].map((x) => Number(x));
    const lottoNumbers = this.#numbers;

    let count = 0;

    for (let i = 0; i < lottoNumbers.length; i++) {
      lottoNumbers[i].forEach((eachNum) => {
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
          if (lottoNumbers[i].includes(Number(bonusNumber))) {
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

  getResultMessage = (userInput, cost) => {
    const result = this.calculateResult(userInput);
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
}

module.exports = Lotto;
