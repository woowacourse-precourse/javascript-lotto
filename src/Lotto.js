const STATIC = require("./static.json");
const PRIZES = STATIC.prizes;

const Exception = require("./Exception");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.numbersException(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  numbersException(numbers) {
    const exception = new Exception;
    exception.validate(numbers);
    exception.duplicate(numbers);
    numbers.forEach((number) => exception.range(number));
  }

  winningCalculation(purchaseLottos, bonus) {
    let resultTable = { reward: 0, '1': 0, "2": 0, "3": 0, "4": 0, "5": 0 };
    for (let purchaseLotto of purchaseLottos) {
      const sameCount = this.sameCheck(purchaseLotto);
      if (sameCount < 3) continue;
      const [reward, rank] = this.rewardCheck(purchaseLotto, sameCount, bonus);
      resultTable = {
        ...resultTable,
        reward: resultTable.reward += reward,
        [rank]: resultTable[rank] += 1,
      }
    }

    return resultTable;
  };

  sameCheck(purchaseLotto) {
    let sameCount = 0;
    purchaseLotto.forEach((number) => {
      if (this.#numbers.includes(number)) sameCount += 1;
    });

    return sameCount;
  }

  rewardCheck(purchaseLotto, sameCount, bonus) {
    switch (sameCount) {
      case 3:
        return PRIZES.fifthPrize;
      case 4:
        return PRIZES.fourthPrize;
      case 5:
        if (!purchaseLotto.includes(Number(bonus))) return PRIZES.thirdPrize;
        return PRIZES.secondPrize;
      case 6:
        return PRIZES.firstPrize;
    }
  }
}

module.exports = Lotto;
