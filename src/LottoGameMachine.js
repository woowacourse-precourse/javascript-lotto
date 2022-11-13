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
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (totalPurchaseAmount) => {
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);

      this.totalPurchaseAmount = totalPurchaseAmount;
      this.totalLottosCount = this.totalPurchaseAmount / 1000;
      this.setLottos().printLottoNumbers().setWinningLottoNumbers();
    });
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
    Console.readLine(MESSAGE.INPUT.WINNING_LOTTO_NUMBERS, (numbers) => {
      const numbersArray = numbers.split(',');
      Validator.validateLottoNumbers(numbersArray);

      this.winningLotto.set('당첨 번호', numbersArray.map(Number));
      this.setBonusLottoNumber();
    });
  }

  setBonusLottoNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_LOTTO_NUMBER, (number) => {
      Validator.validateLottoNumber(number);

      this.winningLotto.set('보너스 번호', Number(number));
      this.collectStatistics().printStatistics().endLottoGame();
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
    this.statistics = Object.values(RANKING).reduce((acc, cur) => ({ ...acc, [cur.name]: 0 }), {});
    this.setLottosResult();

    this.lottosResult.forEach((lottoResult) => {
      this.statistics[lottoResult.name] += 1;
      totalPrizeMoney += lottoResult.prizeMoney;
    });

    this.statistics.profitRate = calculateProfitRate(totalPrizeMoney, this.totalPurchaseAmount);
    return this;
  }
}

module.exports = LottoGameMachine;
