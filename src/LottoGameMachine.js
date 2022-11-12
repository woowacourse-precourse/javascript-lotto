const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const MESSAGE = require('./constants/message');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const Validator = require('./Validator');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.totalLottosCount = 0;
    this.profitRate = 0;
    this.rankingCount = new Array(5).fill(0);
    this.Lottos = new Map();
    this.winningLotto = new Map();
  }

  startLottoGameMachine() {
    this.setTotalPurchaseAmount();
  }

  printLottoNumbers() {
    Console.print(MESSAGE.OUTPUT.TOTAL_PURCHASE_AMOUNT(this.totalLottosCount));
    for (const lotto of this.Lottos.values()) {
      Console.print(lotto.getLottoNumbers());
    }
  }

  setTotalPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (totalPurchaseAmount) => {
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);
      this.totalPurchaseAmount = totalPurchaseAmount;
      this.totalLottosCount = this.totalPurchaseAmount / 1000;
      this.setLottos();
      this.printLottoNumbers();
      this.setWinningLottoNumbers();
    });
  }

  setLottos() {
    let count = 0;
    while (count < this.totalLottosCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }
  }

  setWinningLottoNumbers() {
    Console.readLine(MESSAGE.INPUT.WINNING_LOTTO_NUMBERS, (numbers) => {
      const numbersArray = numbers.split(',');
      this.winningLotto.set('당첨 번호', new Lotto(numbersArray));
      this.setBonusLottoNumber();
    });
  }

  setBonusLottoNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_LOTTO_NUMBER, (number) => {
      Validator.validateLottoNumber(number);
      this.winningLotto.set('보너스 번호', Number(number));
    });
  }

  collectRankingCount() {
    for (const lotto of this.Lottos.values()) {
      const ranking = lotto.getRanking(this.winningLotto);
      if (ranking) this.rankingCount[ranking - 1] += 1;
    }
  }

  calculateProfitRate() {
    const prize = [2000000000, 30000000, 1500000, 50000, 5000];
    const profit = this.rankingCount.reduce((acc, cur, index) => acc + cur * prize[index], 0);
    const profitRate = (profit / this.totalPurchaseAmount) * 100;

    return profitRate.toFixed(1);
  }
}

module.exports = LottoGameMachine;
