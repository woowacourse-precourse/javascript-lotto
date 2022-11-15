const { Console } = require("@woowacourse/mission-utils");
const Checker = require("./Checker");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.checker = new Checker();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checker.checkSix(numbers);
    this.checker.validateMainNumArray(numbers);
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getResult(mainNums, bonusNum) {
    const lottoNums = this.#numbers;
    const mainCount = this.checkMainNumMatch(mainNums);
    const bonusCount = this.checkBonusNumMatch(bonusNum);
    const resultLotto = this.getResultLotto(mainCount, bonusCount);
    return resultLotto;
  }

  checkMainNumMatch(mainNums) {
    let mainMatch = 0;
    this.#numbers.forEach((num) => {
      if (!this.checkMainNumEachMatch(mainNums, num)) return;
      mainMatch++;
    });
    return mainMatch;
  }

  checkMainNumEachMatch(mainNums, num) {
    return mainNums.includes(num);
  }

  checkBonusNumMatch(bonusNum) {
    return this.#numbers.includes(bonusNum) ? 1 : 0;
  }

  getResultLotto(mainCount, bonusCount) {
    if (mainCount === 6) return "first";
    if (mainCount === 5) return bonusCount ? "second" : "third";
    if (mainCount === 4) return "fourth";
    if (mainCount === 3) return "fifth";
    return "nothing";
  }
}

module.exports = Lotto;
