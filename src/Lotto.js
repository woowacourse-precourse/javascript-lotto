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
  }

  // TODO: 추가 기능 구현
  bonusExecption(Number) {
    const ONLY_NUMBER = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!ONLY_NUMBER.test(Number))
      throw new Error('[ERROR] 1 부터 45 사이의 숫자를 입력해주세요.');
    this.bonusNumber = parseInt(Number);
  }

  compare(publishResult) {
    const PublishLength = Object.keys(publishResult).length;
    for (let i = 0; i < PublishLength; i++) {
      this.winningCount = 0;
      publishResult[i].map((x) => {
        //if (this.#numbers.includes(x)) return (this.winningCount += 1);
        this.comapreResult(x, this.#numbers);
      });
      console.log(this.winningCount);
      this.compareDivision(publishResult[i]);
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
    console.log(payment);
    const PROFIT =
      ((this.firstCount * 2000000000 +
        this.secondCount * 30000000 +
        this.thirdCount * 1500000 +
        this.fourthCount * 50000 +
        this.fourthCount * 5000) /
        payment) *
      100;
    return Math.round(PROFIT * 100) / 100;
  }
}

module.exports = Lotto;
