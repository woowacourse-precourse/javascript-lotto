const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES, ERROR_MESSAGES, NUMBERS } = require("./constants");
const { isInRange, isDuplicated } = require("../src/utils");

class Lotto {
  #numbers;

  constructor(cost, numbers) {
    /* Purchase class 에서 구현 */
    // this.validate(numbers);
    this.#numbers = numbers;
    this.handleUserInput(cost);
  }

  validateWinningNumber = (winningNumber) => {
    if (winningNumber.length !== 6)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    if (isDuplicated(winningNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
    }
    if (!isInRange(winningNumber))
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
    if (!isInRange(bonusNumber))
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);

    return true;
  };

  handleUserInput = (cost) => {
    Console.readLine(GAME_MESSAGES.ASK_FOR_WINNING_NUMBERS, (winningNumber) => {
      this.getWinningNumber(winningNumber);
      Console.readLine(GAME_MESSAGES.ASK_FOR_BONUS_NUMBER, (bonusNumber) => {
        this.getBonusNumber(bonusNumber, winningNumber);
        const userInput = this.setUserInput(winningNumber, bonusNumber);
        const resultMessage = this.getResultMessage(userInput, cost);

        Console.print(resultMessage);
        Console.print("게임 종료");
        Console.close();
      });
    });

    // const userInput = this.setUserInput(winningNumber, bonusNumber);
    // const resultMessage = this.getResultMessage();

    // Console.print(resultMessage);
  };

  getWinningNumber = (input) => {
    const winningNumber = [];
    for (let i = 0; i < input.length; i++) {
      winningNumber.push(Number(input[i]));
    }
    // this.validateWinningNumber(winningNumber);
    Console.print(winningNumber);
    return winningNumber;
  };

  getBonusNumber = (bonusNumber, winningNumber) => {
    this.validateBonusNumber(bonusNumber, winningNumber);
    Console.print(bonusNumber);
    return bonusNumber;
  };

  setUserInput = (winningNumber, bonusNumber) => {
    const userInput = {
      winningNumber: winningNumber.split("").map((num) => Number(num)),
      bonusNumber: Number(bonusNumber),
    };

    console.log("user input: ", userInput);
    return userInput;
  };

  calculateResult = (userInput) => {
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    const winningNumber = userInput.winningNumber; //
    const bonusNumber = userInput.bonusNumber; //""
    const lottoNumbers = this.#numbers; // [[],[],[],...]

    lottoNumbers.forEach((oneLotto) => {
      oneLotto.forEach;
    });

    return result;
  };

  calculateRateOfReturn = (result, cost) => {
    let rate = 0;

    const returned = 4000;
    // NUMBERS.FIFTH_PRIZE * result.fifth +
    // NUMBERS.FOURTH_PRIZE * result.fourth +
    // NUMBERS.THIRD_PRIZE * result.third +
    // NUMBERS.SECOND_PRIZE * result.second +
    // NUMBERS.FIRST_PRIZE * result.first;
    const purchased = Number(cost);

    rate = (purchased / returned) * 100;

    return rate;
  };

  getResultMessage = (userInput, cost) => {
    const result = this.calculateResult(userInput);
    const rateOfReturn = this.calculateRateOfReturn(result, cost);

    console.log("result: ", result, "rate of return: ", rateOfReturn);
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
