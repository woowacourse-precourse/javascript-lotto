// library
const { Console } = require('@woowacourse/mission-utils');
// util
const matchLottoNumberWithWinningNumber = require('./util/matchLottoNumberWithWinningNumber');
const calculateRateOfReturn = require('./util/calculateRateOfReturn');
const saveConfirmedInputValueToLottoNumberData = require('./util/saveConfirmedInputValueToLottoNumberData');
// input-check
const Lotto = require('../Lotto');
// UI
const printFinalLottoResult = require('../ui/printFinalLottoResult');
const printLottoNumberIssuedFromComputer = require('../ui/printLottoNumberIssuedFromComputer');
// constant
const { INPUT_CONSOLE_MESSAGE } = require('../components/lotto-data/Constant');
const resetLottoNumberData = require('./resetLottoNumberData');

class LottoGameMainSystem {
  getUserPurchaseAmountFromInputFiled() {
    Console.readLine(`${INPUT_CONSOLE_MESSAGE.purchaseAmount}`, (money) => {
      return this.processFirstInput(money);
    });
  }

  getWinningNumberFromInputFiled() {
    Console.readLine(
      `${INPUT_CONSOLE_MESSAGE.winningNumber}`,
      (winningNumber) => {
        return this.processSecondInput(winningNumber);
      }
    );
  }

  getBonusNumberFromInputFiled() {
    Console.readLine(`${INPUT_CONSOLE_MESSAGE.bonusNumber}`, (bonusNumber) => {
      return this.processThirdInput(bonusNumber);
    });
  }

  processFirstInput(money) {
    const lotto = new Lotto(money);
    printLottoNumberIssuedFromComputer(lotto.checkUserInputMoney());
    saveConfirmedInputValueToLottoNumberData(+money);
    this.getWinningNumberFromInputFiled();
  }

  processSecondInput(winningNumber) {
    const lotto = new Lotto(winningNumber);
    saveConfirmedInputValueToLottoNumberData(lotto.checkUserWinningNumber());
    this.getBonusNumberFromInputFiled();
  }

  processThirdInput(bonusNumber) {
    const lotto = new Lotto(bonusNumber);
    saveConfirmedInputValueToLottoNumberData(lotto.checkUserBonusNumber());
    matchLottoNumberWithWinningNumber();
    calculateRateOfReturn();
    printFinalLottoResult();
  }

  runGame() {
    resetLottoNumberData();
    this.getUserPurchaseAmountFromInputFiled();
  }
}

module.exports = LottoGameMainSystem;
