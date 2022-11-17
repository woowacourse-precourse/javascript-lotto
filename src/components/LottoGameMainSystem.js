// library
const { Console } = require('@woowacourse/mission-utils');
// util
const matchLottoNumberWithWinningNumber = require('./util/matchLottoNumberWithWinningNumber');
const calculateRateOfReturn = require('./util/calculateRateOfReturn');
const saveConfirmedInputValueToLottoNumberData = require('./util/saveConfirmedInputValueToLottoNumberData');
// input-check
const UserMoney = require('../Input-Check/UserMoney');
const Winning = require('../Input-Check/Winning');
const Bonus = require('../Input-Check/Bonus');

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
    const userMoney = new UserMoney(money);
    printLottoNumberIssuedFromComputer(userMoney.checkInput());
    saveConfirmedInputValueToLottoNumberData(+money);
    this.getWinningNumberFromInputFiled();
  }

  processSecondInput(winningNumber) {
    const winning = new Winning(winningNumber);
    saveConfirmedInputValueToLottoNumberData(winning.checkNumbers());
    this.getBonusNumberFromInputFiled();
  }

  processThirdInput(bonusNumber) {
    const bonus = new Bonus(bonusNumber);
    saveConfirmedInputValueToLottoNumberData(bonus.checkNumber());
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
