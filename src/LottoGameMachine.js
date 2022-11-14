const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const User = require('./User');
const Validator = require('./Validator');
const MESSAGE = require('./constants/message');
const { RANKING, UNIT_OF_AMOUNT, RANKING_ARRAY } = require('./constants/gameSetting');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const calculateProfitRate = require('./utils/calculateProfitRate');
const getLottoRanking = require('./utils/getLottoRanking');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.lottosResult = [];
    this.statistics = {};
    // this.user = new User();
    this.Lottos = new Map();
    this.winningLotto = new Map();
  }

  startLottoGameMachine() {
    User.inputTotalPurchaseAmount(this.setTotalPurchaseAmount.bind(this));
  }

  endLottoGame() {
    Console.close();
  }

  printLottoNumbers() {
    Console.print(MESSAGE.OUTPUT.totalPurchaseAmount(this.Lottos.size));
    this.Lottos.forEach((lotto) => Console.print(`[${lotto.getLottoNumbers().join(', ')}]`));
  }

  printStatistics() {
    Console.print(MESSAGE.OUTPUT.WINNING_HISTORY);
    RANKING_ARRAY.forEach((RANK) =>
      Console.print(MESSAGE.OUTPUT.match(RANK, this.statistics[RANK.NAME]))
    );

    Console.print(MESSAGE.OUTPUT.profitRate(this.statistics.profitRate));
    return this;
  }

  setTotalPurchaseAmount(totalPurchaseAmount) {
    this.totalPurchaseAmount = totalPurchaseAmount;
    this.setLottos().printLottoNumbers();
    User.inputWinningLottoNumbers(this.setWinningLottoNumbers.bind(this));
  }

  setWinningLottoNumbers(winningLottoNumbers) {
    this.winningLotto.set('당첨 번호', winningLottoNumbers);
  }

  setBonusLottoNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_LOTTO_NUMBER, (answer) => {
      const bonusLottoNumber = Number(answer);
      Validator.validateLottoNumber(bonusLottoNumber);
      this.winningLotto.set('보너스 번호', bonusLottoNumber);
      return this.setLottosResult().collectStatistics().printStatistics().endLottoGame();
    });
  }

  setLottos() {
    const totalLottosCount = this.totalPurchaseAmount / UNIT_OF_AMOUNT;
    let count = 0;
    while (count < totalLottosCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }

    return this;
  }

  setLottosResult() {
    this.Lottos.forEach((lotto) =>
      this.lottosResult.push(getLottoRanking(lotto, this.winningLotto))
    );

    return this;
  }

  collectStatistics() {
    let totalPrizeMoney = 0;
    this.statistics = Object.values(RANKING).reduce((acc, { NAME }) => ({ ...acc, [NAME]: 0 }), {});
    this.lottosResult.forEach(({ PRIZE_MONEY, NAME }) => {
      totalPrizeMoney += PRIZE_MONEY;
      this.statistics[NAME] += 1;
    });

    this.statistics.profitRate = calculateProfitRate(totalPrizeMoney, this.totalPurchaseAmount);
    return this;
  }
}

module.exports = LottoGameMachine;
