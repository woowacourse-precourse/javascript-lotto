const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getTicketNumbers() {
    return this.#numbers;
  }

  calculateNumbers(answerNumbers, bonusNumber) {
    const hit = answerNumbers.filter((number) => this.#numbers.includes(number)).length;
    const bonus = this.#numbers.includes(bonusNumber);
    MissionUtils.Console.print(this.figureLotteryRewards(hit, bonus));
  }

  figureLotteryRewards(hit, bonus) {
    MissionUtils.Console.print(`${hit} ${bonus}`);
    if (hit === 6) {
      return 2000000000;
    }
    if (hit === 5 && bonus === true) {
      return 30000000;
    }
    if (hit === 5) {
      return 1500000;
    }
    if (hit === 4) {
      return 50000;
    }
    if (hit === 3) {
      return 5000;
    }
    return 0;
  }
}

module.exports = Lotto;
