class Lotto {
  #winnigNums;

  constructor(winnigNums) {
    this.validateWinningNubmer(winnigNums);
    this.#winnigNums = winnigNums.map((num) => +num);
  }

  calculateStatics(issuedLottos, bonusNumber) {
    const statics = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      '5andBonus': 0,
    };

    issuedLottos.forEach((lotto) => {
      let sameCount = 0;

      lotto.forEach((num, index) => {
        this.#winnigNums.includes(num) && sameCount++;

        if (index + 1 === lotto.length) {
          if (sameCount === 5 && lotto.includes(bonusNumber)) {
            statics['5andBonus'] += 1;
          } else {
            sameCount in statics && (statics[sameCount] += 1);
          }
        }
      });
    });

    console.log(statics);

    this.calculateEarningsRate(statics, issuedLottos.length);
  }

  calculateEarningsRate(statics, purchase) {
    const winningPrices = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      '5andBonus': 30000000,
    };
    const matchedNums = Object.keys(statics);
    let total = 0;

    matchedNums.forEach((matchedNum) => {
      if (statics[matchedNum] !== 0) {
        total += winningPrices[matchedNum] * statics[matchedNum];
      }
    });

    const earnings = (total / (purchase * 1000)) * 100;
    const earningsRate =
      (+(Math.round(earnings + 'e+1') + 'e-1'))
        .toFixed(1)
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + '%';

    this.printResults(statics, earningsRate);
  }

  validateWinningNubmer(winnigNums) {
    if (winnigNums.length !== 6) {
      throw new Error(
        `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
      );
    }

    winnigNums.some((num) => {
      if (
        typeof +num !== 'number' ||
        Number.isNaN(+num) ||
        +num < 1 ||
        +num > 45
      ) {
        throw new Error(
          `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
        );
      }
    });

    if (winnigNums.length !== new Set(winnigNums).size) {
      throw new Error(
        `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
      );
    }
  }

  validateBonusNumber(bonusNumber) {
    if (
      typeof bonusNumber !== 'number' ||
      Number.isNaN(bonusNumber) ||
      bonusNumber < 1 ||
      bonusNumber > 45
    ) {
      throw new Error(
        `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1 ~ 45 사이의 숫자 1개를 입력해야 합니다.`
      );
    }

    if (this.#winnigNums.some((num) => num === bonusNumber)) {
      throw new Error(
        `[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 1 ~ 45 사이의 숫자 1개를 입력해야 합니다.`
      );
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
