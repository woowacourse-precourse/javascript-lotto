const { Random, Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.lottoBonusNumber;
    this.prize;
  }

  decidePrize(userNumbers, userBonusNumber) {
    const prizeList = ['three', 'four', 'five', 'fiveBonus', 'six'];

    if (this.compareNumber(userNumbers) === 3) this.prize = prizeList[0];
    if (this.compareNumber(userNumbers) === 4) this.prize = prizeList[1];
    if (this.compareNumber(userNumbers) === 5) {
      this.makeBonusNumber();
      if (userBonusNumber !== this.lottoBonusNumber) this.prize = prizeList[2];
      if (userBonusNumber === this.lottoBonusNumber) this.prize = prizeList[3];
    }
    if (this.compareNumber(userNumbers) === 6) this.prize = prizeList[4];

    return this.prize;
  }

  compareNumber(userNumbers) {
    let sameNumberCount = 0;

    userNumbers.map((userNumber) => {
      if (this.#numbers.includes(userNumber)) sameNumberCount += 1;
    });

    return sameNumberCount;
  }

  makeBonusNumber() {
    const randomNumber = Random.pickNumberInRange(1, 45);

    if (this.#numbers.includes(randomNumber)) {
      this.makeBonusNumber();
    }

    if (!this.#numbers.includes(randomNumber)) {
      this.lottoBonusNumber = randomNumber;
    }
  }

  printNumbers() {
    const sorted = this.#numbers.sort((a, b) => a - b).join(', ');
    Console.print(`[${sorted}]`);
  }
}

module.exports = Lotto;
