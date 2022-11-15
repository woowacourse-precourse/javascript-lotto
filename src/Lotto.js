const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;
  three;
  four;
  five;
  bonusFive;
  six;
  rateOfReturn;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.three = 0;
    this.four = 0;
    this.five = 0;
    this.bonusFive = 0;
    this.six = 0;
    this.rateOfReturn = 0;
  }

  validate(numbers) {
    const set = new Set(numbers);
    if (set.size !== numbers.length)
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 6개여야 합니다.');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((num) => {
      if (num > 45 || num < 1)
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  }

  validateBonus(winningNumber, bonus) {
    if (bonus > 45 || bonus < 1)
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    if (winningNumber.includes(bonus.toString()))
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호와 다른 숫자여야 합니다.'
      );
  }

  getBonusNumber(tickets, winningNumber, money) {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해 주세요.\n',
      (bonus) => {
        this.validateBonus(winningNumber, bonus);
        this.totalStatistics(tickets, winningNumber, bonus, money);
      }
    );
  }

  totalStatistics(tickets, winningNumber, bonus, money) {
    for (let ticket of tickets) {
      this.calculate(ticket, winningNumber, bonus);
    }
    this.getRateOfReturn(money);
  }

  calculate(ticket, winningNumber, bonus) {
    let tmp = 0,
      bonustmp = 0;
    for (let num of winningNumber) {
      if (ticket.includes(parseInt(num))) {
        tmp++;
        continue;
      }
      if (ticket.includes(bonus)) bonustmp++;
    }
    if (tmp === 3) this.three++;
    else if (tmp === 4) this.four++;
    else if (tmp === 5 && bonus === 0) this.five++;
    else if (tmp === 5 && bonus === 1) this.bonusFive++;
    else if (tmp === 6) this.six++;
  }

  getRateOfReturn(money) {
    const result =
      this.three * 3000 +
      this.four * 50000 +
      this.five * 1500000 +
      this.bonusFive * 30000000 +
      this.six * 2000000000;
    this.rateOfReturn = ((result / money) * 100).toFixed(1);
    MissionUtils.Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) -${this.three}개\n4개 일치 (50,000원) - ${this.four}개\n5개 일치 (1,500,000원) - ${this.five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.bonusFive}개\n6개 일치 (2,000,000,000원) - ${this.six}개\n총 수익률은 ${this.rateOfReturn}%입니다.`
    );
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
