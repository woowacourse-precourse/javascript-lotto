const { PRIZE } = require('./constants/constants');
const Print = require('./Print');

class GetResult {
  #randomNumbersArrays;
  #bonus;
  #numbers;
  #budget;
  #resultArray;

  constructor(randomNumbersArrays, inputObjects) {
    this.#randomNumbersArrays = randomNumbersArrays;
    this.#bonus = inputObjects.bonus;
    this.#numbers = inputObjects.numbers;
    this.#budget = inputObjects.budget;
    this.#resultArray = [0, 0, 0, 0, 0, 0];
    this.countSameNumbers();
  }

  countSameNumbers() {
    this.#randomNumbersArrays.forEach((element) => {
      const result = this.getResult(element);
      this.#resultArray[result] += 1;
    });
    this.getResultStatics();
  }

  getResult(randomNumbers) {
    const sameNumbersCount = this.getNumbersResult(randomNumbers).length;
    const bonusResult = this.getBonusResult();

    if (sameNumbersCount === 6) return 5;
    if (sameNumbersCount === 5 && bonusResult === true) return 4;
    if (sameNumbersCount === 5 && bonusResult === false) return 3;
    if (sameNumbersCount === 4) return 2;
    if (sameNumbersCount === 3) return 1;
    return 0;
  }

  getNumbersResult(randomNumbers) {
    const sameNumbers = randomNumbers.filter((number) => {
      return this.#numbers.includes(number);
    });
    return sameNumbers;
  }

  getBonusResult() {
    return this.#numbers.includes(this.#bonus);
  }

  getResultStatics() {
    const reward = this.#resultArray.reduce((acc, element, index) => {
      return acc + element * PRIZE[index];
    }, 0);
    new Print(reward, this.#resultArray, this.#budget);
  }
}

module.exports = GetResult;
