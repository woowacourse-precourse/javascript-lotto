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
// variable
const {
  LottoNumberData,
  LottoRanking,
} = require('../components/lotto-data/LottoNumberData');

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

  resetLottoNumberData() {
    for (let lottoNumber in LottoNumberData) {
      if (lottoNumber === 'Issued' || lottoNumber === 'Winning') {
        LottoNumberData[lottoNumber] = [];
        continue;
      }
      LottoNumberData[lottoNumber] = 0;
    }
    for (let ranking in LottoRanking) {
      LottoRanking[ranking] = 0;
    }
  }

  runGame() {
    this.resetLottoNumberData();
    this.getUserPurchaseAmountFromInputFiled();
  }
}

module.exports = LottoGameMainSystem;
