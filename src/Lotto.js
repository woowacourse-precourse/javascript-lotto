const MissionUtils = require('@woowacourse/mission-utils');

class UserLotto {
  constructor(money) {
    this.userLottos = [];
    this.purchaseLotto(money);
    this.getUserLottos();
  }

  generateLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers;
  }

  purchaseLotto(money) {
    const count = parseInt(money) / 1000;

    MissionUtils.Console.print(`${count}개를 구매했습니다.`);

    for (let i = 0; i < count; i++) {
      this.userLottos.push(
        this.generateLotto().sort((a, b) => {
          return a - b;
        })
      );
    }

    for (let userLotto of this.userLottos) {
      MissionUtils.Console.print(userLotto);
    }

    return this;
  }

  getUserLottos() {
    return this.userLottos;
  }
}

class CheckValidate {
  #numbers;

  constructor(winningNumber, numbers, type) {
    this.winningNumber = winningNumber;
    this.#numbers = numbers;
    this.validateLotto(numbers, type);
  }

  isRange(numbers) {
    for (let number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이어야 합니다.');
      }
    }
  }

  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isUniq(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  isNumber(numbers) {
    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자이어야 합니다.');
      }
    }
  }

  isValidMoney(money) {
    if (parseInt(money) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액이 1,000원 단위가 아닙니다.');
    }
  }

  isValidBonus(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이어야 합니다.');
    }
    if (this.winningNumber.includes(number)) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  validateLotto(numbers, type) {
    if (!Array.isArray(numbers)) {
      this.#numbers = numbers.split(',');
    }

    if (type === 'bonus') {
      return this.isValidBonus(numbers);
    }

    if (type === 'money') {
      return this.isValidMoney(numbers);
    }

    this.isSix(this.#numbers);
    this.isUniq(this.#numbers);
    this.isNumber(this.#numbers);
    this.isRange(this.#numbers);
  }
}

class Rank {
  constructor(userLottos, winningNumber, bonusNumber) {
    this.countCorrectNumber = [0, 0, 0, 0, 0, 0, 0, 0];
    this.bonusNumber = bonusNumber;
    this.checkRank(userLottos, winningNumber);
    this.getCountCorrectNumber();
  }

  checkBonus(userLotto) {
    if (userLotto.includes(parseInt(this.bonusNumber))) {
      return (this.countCorrectNumber[7] += 1);
    }

    return (this.countCorrectNumber[5] += 1);
  }

  checkRank(userLottos, winningNumber) {
    winningNumber = winningNumber.split(',').map(function (number) {
      return parseInt(number, 10);
    });

    for (let userLotto of userLottos) {
      const count = userLotto.filter((number) =>
        winningNumber.includes(number)
      ).length;

      if (count === 5) this.checkBonus(userLotto);
      else this.countCorrectNumber[count] += 1;
    }

    return this;
  }

  getCountCorrectNumber() {
    return this.getCountCorrectNumber;
  }
}

class Result {
  constructor(countCorrectNumber, money) {
    this.countCorrectNumber = countCorrectNumber;
    this.money = money;
    this.prize = 0;
    this.correctThree();
    this.correctFour();
    this.correctFive();
    this.correctFiveAndBonus();
    this.correctAll();
    this.profit(this.prize);
  }

  correctThree() {
    let count = this.countCorrectNumber[3];
    count !== 0 && (this.prize += count * 5000);

    return MissionUtils.Console.print(`3개 일치 (5,000원) - ${count}개`);
  }

  correctFour() {
    let count = this.countCorrectNumber[4];
    count !== 0 && (this.prize += count * 50000);

    return MissionUtils.Console.print(`4개 일치 (50,000원) - ${count}개`);
  }

  correctFive() {
    let count = this.countCorrectNumber[5];
    count !== 0 && (this.prize += count * 1500000);

    return MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${count}개`);
  }

  correctFiveAndBonus() {
    let count = this.countCorrectNumber[7];
    count !== 0 && (this.prize += count * 30000000);

    return MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`
    );
  }

  correctAll() {
    let count = this.countCorrectNumber[6];
    count !== 0 && (this.prize += count * 2000000000);

    return MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${count}개`
    );
  }

  profit(prize) {
    const profitRate = (parseInt(prize) / parseInt(this.money)) * 100;

    return MissionUtils.Console.print(
      `총 수익률은 ${profitRate.toFixed(1)}%입니다.`
    );
  }
}

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    new CheckValidate([], this.#numbers, '');
  }
}

module.exports = { Lotto, UserLotto, CheckValidate, Rank, Result };
