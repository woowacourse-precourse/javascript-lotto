const { Console } = require('@woowacourse/mission-utils');
const User = require('./User');
const MESSAGE = require('./constants/message');
const { UNIT_OF_AMOUNT, RANKING_ARRAY } = require('./constants/gameSetting');
const LottoStatistics = require('./LottoStatistics');
const LottoGenerator = require('./LottoGenerator');

class LottoGameMachine {
  constructor() {
    this.totalPurchaseAmount = 0;
    this.totalLottosCount = 0;
    this.lottoStatistics = {};
    this.lottos = new Map();
    this.winningLotto = new Map();
  }

  startLottoGameMachine() {
    User.inputTotalPurchaseAmount(this.#setTotalPurchaseAmount.bind(this));
  }

  endLottoGameMachine() {
    Console.close();
  }

  #printLottoNumbers() {
    Console.print(MESSAGE.OUTPUT.totalPurchaseAmount(this.totalLottosCount));
    this.lottos.forEach((lotto) => Console.print(`[${lotto.getLottoNumbers().join(', ')}]`));
  }

  #printLottoStatistics() {
    Console.print(MESSAGE.OUTPUT.WINNING_HISTORY);
    RANKING_ARRAY.forEach((RANKING) =>
      Console.print(MESSAGE.OUTPUT.match(RANKING, this.lottoStatistics[RANKING.NAME]))
    );

    Console.print(MESSAGE.OUTPUT.profitRate(this.lottoStatistics.profitRate));
    return this;
  }

  #setTotalPurchaseAmount(totalPurchaseAmount) {
    this.totalPurchaseAmount = totalPurchaseAmount;
    this.totalLottosCount = totalPurchaseAmount / UNIT_OF_AMOUNT;
    this.#setLottos();
    User.inputWinningLottoNumbers(this.#setWinningLottoNumbers.bind(this));
  }

  #setWinningLottoNumbers(winningLottoNumbers) {
    this.winningLotto.set('당첨 번호', winningLottoNumbers);
    User.inputBonusLottoNumber(this.#setBonusLottoNumber.bind(this));
  }

  #setBonusLottoNumber(bonusLottoNumber) {
    this.winningLotto.set('보너스 번호', bonusLottoNumber);
    this.#setLottoStatistics().#printLottoStatistics().endLottoGameMachine();
  }

  #setLottoStatistics() {
    this.lottoStatistics = LottoStatistics.collectLottoStatistics(this.lottos, this.winningLotto);
    return this;
  }

  #setLottos() {
    this.lottos = LottoGenerator.getLottos(this.totalLottosCount);
    this.#printLottoNumbers();
    return this;
  }
}

module.exports = LottoGameMachine;
