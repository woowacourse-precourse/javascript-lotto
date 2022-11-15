const { Console, Random } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.validate(numbers);
    this.#numbers = numbers;
  }

  // validate(numbers) {
  //   // // if (numbers.length !== 6) {
  //   // //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   // // }
  //   // if (!numbers.includes(',')) {
  //   //   throw new Error('[ERROR] 쉼표로 구분한 하나의 문자열을 입력해주세요');
  //   // }
  //   Console.print(numbers.length);
  // }

  // TODO: 추가 기능 구현

  checkPurchaseAmount(cost) {
    if (cost === '0') {
      throw new Error('[ERROR] 로또는 1장 이상 구매 가능합니다.');
    }
    if (cost % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위로만 입력 가능합니다.');
    }
    if (cost < 0) {
      throw new Error('[ERROR] 1,000원 이상의 올바른 금액을 입력해주세요.');
    }
    this.getLottoQuantity(cost);
  }

  getPurchaseAmount() {
    Console.readLine(`구입금액을 입력해 주세요.${'\n'}`, (cost) => {
      this.checkPurchaseAmount(cost);
    });
  }

  getLottoQuantity(cost) {
    const quantity = cost / 1000;
    Console.print(`${'\n'}${quantity}개를 구매했습니다.`);
    const randomNumbers = this.getRandomNumbers(quantity);
    this.showRandomNumbers(randomNumbers);
  }

  getRandomNumbers(quantity) {
    const result = [];
    for (let i = 0; i < quantity; i += 1) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      result.push(randomNumbers);
    }
    return result;
  }

  showRandomNumbers(randomNumbers) {
    randomNumbers.forEach((arr) => Console.print(arr));
    this.getUserNumber(randomNumbers);
  }

  checkUserNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.includes(NaN)) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 1 ~ 45 사이의 숫자만 입력 가능합니다.');
      }
    });
  }

  getUserNumber(randomNumbers) {
    Console.readLine(`${'\n'}당첨 번호를 입력해 주세요.${'\n'}`, (numbers) => {
      if (!numbers.includes(',')) {
        throw new Error('[ERROR] 쉼표로 구분한 하나의 문자열을 입력해주세요.');
      }
      this.#numbers = numbers.split(',').map(Number);
      this.checkUserNumber(this.#numbers);
      this.getUserBonusNumber(this.#numbers, randomNumbers);
    });
  }

  checkUserBonusNumber(bonus, userNumbers, randomNumbers) {
    if (bonus.length !== 1) {
      throw new Error('[ERROR] 1글자만 입력해주세요');
    }
    if (bonus.includes(NaN)) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자만 입력 가능합니다.');
    }
    if (userNumbers.includes(...bonus)) {
      throw new Error('[ERROR] 이미 당첨 번호에서 입력한 숫자입니다.');
    }
    this.showWinningStatistics(userNumbers, bonus, randomNumbers);
  }

  getUserBonusNumber(userNumbers, randomNumbers) {
    Console.readLine(`${'\n'}보너스 번호를 입력해 주세요.${'\n'}`, (number) => {
      const bonus = number.split(',').map(Number);
      this.checkUserBonusNumber(bonus, userNumbers, randomNumbers);
    });
  }

  showWinningStatistics(userNumbers, bonus, randomNumbers) {
    Console.print(`${'\n'}당첨통계`);
    Console.print('---');
    const matchNumber = this.matchNumberCount(userNumbers, randomNumbers);
    const matchBonus = this.matchBonusCount(bonus, randomNumbers);
    Console.print(matchNumber);
    Console.print(matchBonus);
  }

  matchNumberCount(userNumbers, randomNumbers) {
    const generalResult = Array(randomNumbers.length).fill(0);
    randomNumbers.forEach((arr, idx) => {
      arr.forEach((_, idx2) => {
        userNumbers.forEach((num) => {
          if (randomNumbers[idx][idx2] === num) {
            generalResult[idx] += 1;
          }
        });
      });
    });
    return generalResult;
  }

  matchBonusCount(bonus, randomNumbers) {
    const bonusResult = Array(randomNumbers.length).fill(0);
    randomNumbers.forEach((arr, idx) =>
      arr.forEach((_, idx2) => {
        if (randomNumbers[idx][idx2] === Number(bonus.join(''))) {
          bonusResult[idx] += 1;
        }
      })
    );
    return bonusResult;
  }
}

const test = new Lotto();
test.getPurchaseAmount();

module.exports = Lotto;
