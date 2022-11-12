const { Random, Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.firstCount = 0;
    this.secondCount = 0;
    this.thirdCount = 0;
    this.fourthCount = 0;
    this.fifthCount = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((number) => {
      this.numberException(number);
    });
    this.deduplicationException(numbers);
  }

  numberException(number) {
    const ONLY_NUMBER = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!ONLY_NUMBER.test(number))
      throw new Error('[ERROR] 1부터 45 사이의 숫자를 입력해주세요.');
  }

  deduplicationException(numbers) {
    const set = new Set(numbers);

    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 중복되지 않은 번호를 입력해주세요.');
    }
  }

  bonusExecption(number) {
    if (this.#numbers.includes(number))
      throw new Error('[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요.');
    this.numberException(number);
    this.bonusNumber = parseInt(number);
  }

  compare(publishResult) {
    for (let index in publishResult) {
      this.winningCount = 0;
      publishResult[index].map((publish) => {
        this.comapreResult(publish, this.#numbers);
      });
      this.compareDivision(publishResult[index]);
    }
  }

  comapreResult(publish, winning) {
    if (winning.includes(publish)) return (this.winningCount += 1);
  }

  compareDivision(publish) {
    if (this.winningCount === 6) {
      return (this.firstCount += 1);
    }
    if (this.winningCount === 5 && publish.includes(this.bonusNumber)) {
      return (this.secondCount += 1);
    }
    if (this.winningCount === 5) {
      return (this.thirdCount += 1);
    }
    if (this.winningCount === 4) {
      return (this.fourthCount += 1);
    }
    if (this.winningCount === 3) {
      return (this.fifthCount += 1);
    }
  }

  profitCalculator(payment) {
    const PROFIT =
      ((this.firstCount * 2000000000 +
        this.secondCount * 30000000 +
        this.thirdCount * 1500000 +
        this.fourthCount * 50000 +
        this.fifthCount * 5000) /
        payment) *
      100;
    return Math.round(PROFIT * 100) / 100;
  }
}

module.exports = Lotto;
