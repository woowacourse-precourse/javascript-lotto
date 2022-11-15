const { REWARDS } = require('../constants/constants');
const PrintResult = require('./PrintResult')

class GetResult {
  #randomNumbersArrays;
  #bonus;
  #numbers;
  #budget;
  #results;

  constructor(randomNumbersArrays, inputObjects) {
    this.#randomNumbersArrays = randomNumbersArrays;
    this.#bonus = inputObjects.bonus;
    this.#numbers = inputObjects.numbers;
    this.#budget = inputObjects.budget;
    this.#results = [0, 0, 0, 0, 0, 0];
    this.countSameNumbers()
  }

  countSameNumbers() {
    this.#randomNumbersArrays.forEach((element) => {
      const result = this.getResult(element);
      this.#results[result] += 1;
    })
    this.getResultStatics();
  }
  
  getResult(randomNumbers) {
    const sameNumbersCount = this.getNumbersResult(randomNumbers).length;
    const bonusResult = this.getBonusResult();
  
    if(sameNumbersCount===6) return 5;
    if(sameNumbersCount===5 && bonusResult===true) return 4;
    if(sameNumbersCount===5 && bonusResult===false) return 3;
    if(sameNumbersCount===4) return 2;
    if(sameNumbersCount===3) return 1;
    return 0;
  }
  
  getNumbersResult(randomNumbers) {

    const sameNumbers = randomNumbers.filter((number) => {
      return this.#numbers.includes(number);
    })
    return sameNumbers;
  }
  
  getBonusResult() {
    return this.#numbers.includes(this.#bonus);
  }

  getResultStatics() {
    const reward = this.#results.reduce((acc, element, index) => {
      return acc + element * REWARDS[index];
    }, 0);
    new PrintResult(reward, this.#results, this.#budget);
  }
}

module.exports = GetResult;