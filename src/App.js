const { Console } = require('@woowacourse/mission-utils');
const { INPUT, PRINT, LOTTO } = require('./constant/Constant');
const {
  checkValidMoneyInput,
  checkValidWinningNumberInput,
  checkValidBonusNumberInput,
} = require('./util/CheckValidInput');
const LottoStore = require('./LottoStore');
const LottoRule = require('./LottoRule');
const LottoChecker = require('./LottoChecker');

class App {
  lottoRule = new LottoRule(LOTTO.TOTAL_COUNT, {
    min: LOTTO.MIN,
    max: LOTTO.MAX,
  });
  store;
  winningNumber;
  bonusNumber;
  lottos;
  money = 0;

  constructor() {
    this.store = new LottoStore(this.lottoRule);
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(INPUT.MONEY, (input) => {
      checkValidMoneyInput(Number(input));
      this.money = parseInt(input, 10);
      this.lottos = this.store.sellLottos(this.money);
      this.printLotto();
    });
  }
}

module.exports = App;
