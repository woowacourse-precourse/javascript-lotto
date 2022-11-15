class Lotto {
  #numbers;

  //  총 당첨 번호 확인
  constructor(winningNumber) {
    this.#numbers = winningNumber;
    this.typeNumberValidate(this.#numbers);
    this.countValidate(this.#numbers);
    this.repeatValidate(this.#numbers);
    this.limitNumberValidate(this.#numbers);
  }

  // 로또 타입 확인
  typeNumberValidate(winningNumber) {
    winningNumber.map(x => {
      if (isNaN(x)) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
      }
    });
  }

  // 로또 번호 개수 확인
  countValidate(winningNumber) {
    if (winningNumber.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return;
  }

  // 중복 번호 확인
  repeatValidate(winningNumber) {
    let removeRepeatArr = [];
    removeRepeatArr = [...new Set(winningNumber)];
    if (removeRepeatArr.length < 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    return;
  }

  // 로또 번호는 1~45 사이 숫자
  limitNumberValidate(winningNumber) {
    winningNumber.map(x => {
      if (x < 1 || x > 45) {
        throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
      }
    });
    return;
  }

  static saveWinNumber(numbers) {
    return numbers.split(',').sort((a, b) => a - b);
  }

  static saveBonusNumber(numbers) {
    return Number(numbers);
  }

  static sameCount(lotto, sameCount, sameArr, winNumber) {
    lotto.map(numbers => {
      if (winNumber.includes(String(numbers))) {
        sameCount += 1;
      }
    });
    sameArr.push(sameCount);
    return sameArr;
  }

  static bonusCount(lotto, bonusCnt, bonusNumber) {
    lotto.map(numbers => {
      if (numbers === bonusNumber) {
        bonusCnt = 1;
      }
    });
    return bonusCnt;
  }

  static countNumberOfWins(numberOfWins, sameArr, bonusCount) {
    sameArr.map(count => {
      if (count === 3) {
        numberOfWins[0] += 1;
      } else if (count === 4) {
        numberOfWins[1] += 1;
      } else if (count === 5 && bonusCount === 0) {
        numberOfWins[2] += 1;
      } else if (count === 5 && bonusCount === 1) {
        numberOfWins[3] += 1;
      } else if (count === 6) {
        numberOfWins[4] += 1;
      }
    });
    return numberOfWins;
  }

  static getRevenueRate(revenueRate, numberOfWins, price) {
    revenueRate =
      ((numberOfWins[0] * 5000 +
        numberOfWins[1] * 50000 +
        numberOfWins[2] * 1500000 +
        numberOfWins[3] * 30000000 +
        numberOfWins[4] * 2000000000) /
        price) *
      100;
    return revenueRate.toFixed(1);
  }
}

module.exports = Lotto;
