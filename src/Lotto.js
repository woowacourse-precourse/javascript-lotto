const {
  Console,
  WINNING_STATISTICS,
  THREE_SAME,
  FOUR_SAME,
  FIVE_SAME,
  FIVE_SAME_BONUS_SAME,
  SIX_SAME,
} = require('./Constant');
class Lotto {
  #numbers;

  constructor(price, win, bonus, lottoList) {
    this.#numbers = win;
    this.compare(price, this.#numbers, bonus, lottoList);
  }

  compare(price, win, bonus, lottoList) {
    let bonusCount = 0;
    let sameArr = [];
    let numberOfWins = [0, 0, 0, 0, 0];

    lottoList.map(lotto => {
      this.compareNumbers(lotto, win, sameArr);
      bonusCount = this.compareBonusNumber(lotto, win, bonus, bonusCount);
    });
    this.getNumberOfWins(price, sameArr, numberOfWins, bonusCount);
  }

  // 당첨 번호 vs 로또 번호
  compareNumbers(lotto, winningNumber, sameArr) {
    let sameCount = 0;
    lotto.map(index => {
      if (winningNumber.includes(String(index))) {
        sameCount += 1;
      }
    });
    sameArr.push(sameCount);
    sameCount = 0;
  }

  // 보너스 번호 vs 로또 번호
  compareBonusNumber(lotto, winningNumber, bonusNumber, bonusCount) {
    lotto.map(index => {
      if (!winningNumber.includes(bonusNumber)) {
        if (index === Number(bonusNumber)) {
          bonusCount = 1;
        }
      }
    });
    return bonusCount;
  }

  getNumberOfWins(price, sameArr, numberOfWins, bonusCount) {
    sameArr.map(sameCount => {
      if (sameCount === 3) {
        numberOfWins[0] += 1;
      } else if (sameCount === 4) {
        numberOfWins[1] += 1;
      } else if (sameCount === 5 && bonusCount !== 1) {
        numberOfWins[2] += 1;
      } else if (sameCount === 5 && bonusCount === 1) {
        numberOfWins[3] += 1;
      } else if (sameCount === 6) {
        numberOfWins[4] += 1;
      }
    });
    this.setTextResult(price, numberOfWins);
  }

  // 로또 결과 출력
  setTextResult(lottoPrice, numberOfWins) {
    Console.print(`\n${WINNING_STATISTICS}`);
    Console.print('---');
    Console.print(`${THREE_SAME}${numberOfWins[0]}개`);
    Console.print(`${FOUR_SAME}${numberOfWins[1]}개`);
    Console.print(`${FIVE_SAME}${numberOfWins[2]}개`);
    Console.print(`${FIVE_SAME_BONUS_SAME}${numberOfWins[3]}개`);
    Console.print(`${SIX_SAME}${numberOfWins[4]}개`);
    this.getRevenueRate(lottoPrice, numberOfWins);
  }

  getRevenueRate(lottoPrice, numberOfWins) {
    let revenueRate =
      ((numberOfWins[0] * 5000 +
        numberOfWins[1] * 50000 +
        numberOfWins[2] * 1500000 +
        numberOfWins[3] * 30000000 +
        numberOfWins[4] * 2000000000) /
        lottoPrice) *
      100;
    Console.print(`총 수익률은 ${revenueRate.toFixed(1)}%입니다.`);
    Console.close();
  }
}

module.exports = Lotto;
