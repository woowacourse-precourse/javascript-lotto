const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const User = require('./User');
const MESSAGE = require('./constants/message');
const { UNIT_OF_AMOUNT, RANKING_ARRAY } = require('./constants/gameSetting');
const generateLottoNumbers = require('./utils/generateRandomLottoNumbers');
const getLottoRanking = require('./utils/getLottoRanking');
const collectLottoStatistics = require('./utils/collectLottoStatistics');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.lottoStatistics = {};
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

  printLottoStatistics() {
    Console.print(MESSAGE.OUTPUT.WINNING_HISTORY);
    RANKING_ARRAY.forEach((RANK) =>
      Console.print(MESSAGE.OUTPUT.match(RANK, this.lottoStatistics[RANK.NAME]))
    );

    Console.print(MESSAGE.OUTPUT.profitRate(this.lottoStatistics.profitRate));
    return this;
  }

  setTotalPurchaseAmount(totalPurchaseAmount) {
    this.totalPurchaseAmount = totalPurchaseAmount;
    this.setLottos();
    User.inputWinningLottoNumbers(this.setWinningLottoNumbers.bind(this));
  }

  setWinningLottoNumbers(winningLottoNumbers) {
    this.winningLotto.set('당첨 번호', winningLottoNumbers);
    User.inputBonusLottoNumber(this.setBonusLottoNumber.bind(this));
  }

  setBonusLottoNumber(bonusLottoNumber) {
    this.winningLotto.set('보너스 번호', bonusLottoNumber);
    this.setLottoStatistics().printLottoStatistics().endLottoGame();
  }

  setLottos() {
    const totalLottosCount = this.totalPurchaseAmount / UNIT_OF_AMOUNT;
    let count = 0;
    while (count < totalLottosCount) {
      count += 1;
      this.Lottos.set(`로또${count}`, new Lotto(generateLottoNumbers()));
    }

    this.printLottoNumbers();
    return this;
  }

  setLottoStatistics() {
    this.lottoStatistics = collectLottoStatistics(this.getLottosResult());
    return this;
  }

  getLottosResult() {
    let lottosResult = [];
    this.Lottos.forEach((lotto) => lottosResult.push(getLottoRanking(lotto, this.winningLotto)));

    return lottosResult;
  }
}

module.exports = LottoGameMachine;
