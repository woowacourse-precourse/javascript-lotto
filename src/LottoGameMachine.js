const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');
const MESSAGE = require('./constants/message');
const RANKING = require('./constants/gameSetting');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const calculateProfitRate = require('./utils/calculateProfitRate');
const getLottoRanking = require('./utils/getLottoRanking');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.totalLottosCount = 0;
    this.lottosResult = [];
    this.statistics = {};
    this.Lottos = new Map();
    this.winningLotto = new Map();
  }

  startLottoGameMachine() {
    this.setTotalPurchaseAmount();
  }

  endLottoGame() {
    Console.close();
  }

  printLottoNumbers() {
    Console.print(MESSAGE.OUTPUT.TOTAL_PURCHASE_AMOUNT(this.totalLottosCount));
    for (const lotto of this.Lottos.values()) {
      Console.print(`[${lotto.getLottoNumbers().join(', ')}]`);
    }

    return this;
  }

  printStatistics() {
    const rankingArray = [
      RANKING.FIFTH,
      RANKING.FOURTH,
      RANKING.THIRD,
      RANKING.SECOND,
      RANKING.FIRST,
    ];

    Console.print(MESSAGE.OUTPUT.WINNING_HISTORY);
    rankingArray.forEach((ranking) =>
      Console.print(MESSAGE.OUTPUT.MATCH(ranking, this.statistics[ranking.name]))
    );

    Console.print(MESSAGE.OUTPUT.PROFIT_RATE(this.statistics.profitRate));
    return this;
  }

  setTotalPurchaseAmount() {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (answer) => {
      const totalPurchaseAmount = Number(answer);
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);
      this.totalPurchaseAmount = totalPurchaseAmount;
      return this.setTotalLottosCount().setLottos().printLottoNumbers().setWinningLottoNumbers();
    });
  }

  setTotalLottosCount() {
    this.totalLottosCount = this.totalPurchaseAmount / 1000;
    return this;
  }

  setLottos() {
    let count = 0;
    while (count < this.totalLottosCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }

    return this;
  }

  setWinningLottoNumbers() {
    Console.readLine(MESSAGE.INPUT.WINNING_LOTTO_NUMBERS, (answer) => {
      const winningLottoNumbers = answer.split(',').map(Number);
      Validator.validateLottoNumbers(winningLottoNumbers);
      this.winningLotto.set('당첨 번호', winningLottoNumbers);
      return this.setBonusLottoNumber();
    });
  }

  setBonusLottoNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_LOTTO_NUMBER, (answer) => {
      const bonusLottoNumber = Number(answer);
      Validator.validateLottoNumber(bonusLottoNumber);
      this.winningLotto.set('보너스 번호', bonusLottoNumber);
      return this.setLottosResult().collectStatistics().printStatistics().endLottoGame();
    });
  }

  setLottosResult() {
    this.Lottos.forEach((lotto) =>
      this.lottosResult.push(getLottoRanking(lotto, this.winningLotto))
    );

    return this;
  }

  collectStatistics() {
    let totalPrizeMoney = 0;
    this.statistics = Object.values(RANKING).reduce((acc, { name }) => ({ ...acc, [name]: 0 }), {});
    this.lottosResult.forEach(({ prizeMoney, name }) => {
      totalPrizeMoney += prizeMoney;
      this.statistics[name] += 1;
    });

    this.statistics.profitRate = calculateProfitRate(totalPrizeMoney, this.totalPurchaseAmount);
    return this;
  }
}

module.exports = LottoGameMachine;
