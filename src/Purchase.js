const { GAME_MESSAGES, ERROR_MESSAGES } = require("./constants");
const { Console } = require("@woowacourse/mission-utils");
const { getRandomInt } = require("./utils");

class Purchase {
  constructor(cost) {
    this.amountOfLotto = this.purchaseLotto(cost);
    this.lottoNumbers = this.getAllPurchasedLottos(this.amountOfLotto);

    this.printResult();

    return this.lottoNumbers;
  }

  isValidCost = (cost) => {
    if (cost / 1000 !== Math.floor(cost / 1000))
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    if (cost < 1000 || cost > 10000)
      throw new Error(ERROR_MESSAGES.INVALID_COST_RANGE);

    return true;
  };

  purchaseLotto = (cost) => {
    this.isValidCost(cost);
    this.amountOfLotto = Number(cost) / 1000;

    return this.amountOfLotto;
  };

  isInValidRange = (randomNumber) => {
    if (randomNumber < 1 || randomNumber > 45)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
  };

  generateOneLotto = () => {
    const sixRandomNumber = Array.from({ length: 6 }, () => {
      const randomNumber = getRandomInt();
      this.isInValidRange(randomNumber);
      return randomNumber;
    });

    return sixRandomNumber.sort((a, b) => a - b);
  };

  getAllPurchasedLottos = (amount) => {
    const lottoNumbers = [];

    for (let i = 0; i < amount; i++) {
      lottoNumbers.push(this.generateOneLotto());
    }

    return lottoNumbers;
  };

  isValidNumber = (amount, numbers) => {
    // const amount = this.amountOfLotto;
    // const numbers = this.lottoNumbers;

    numbers.forEach((number) => {
      if (number.length !== 6)
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
      if (number.includes())
        throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
    });

    if (numbers.length !== amount)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_AMOUNT);
  };

  printResult = () => {
    this.isValidNumber(this.amountOfLotto, this.lottoNumbers);

    Console.print(GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(this.amountOfLotto));
    Console.print(this.lottoNumbers);
  };
}

module.exports = Purchase;
