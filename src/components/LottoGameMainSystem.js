const Lotto = require('./number-check/Lotto');
const { Console } = require('@woowacourse/mission-utils');
const { LottoNumberData } = require('./lotto-data/LottoNumberData');
const { INPUT_CONSOLE_MESSAGE } = require('../components/lotto-data/Constant');
const matchLottoNumberWithWinningNumber = require('./util/matchLottoNumberWithWinningNumber');
const printFinalLottoResult = require('../ui/printFinalLottoResult');
const calculateRateOfReturn = require('./util/calculateRateOfReturn');
const printLottoNumberIssuedFromComputer = require('../ui/printLottoNumberIssuedFromComputer');

class LottoGameMainSystem {
  getUserPurchaseAmountFromInputFiled() {
    Console.readLine(`${INPUT_CONSOLE_MESSAGE.purchaseAmount}`, (input) => {
      return this.processFirstInput(input);
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

  processFirstInput(input) {
    const lotto = new Lotto(input);
    printLottoNumberIssuedFromComputer(lotto.checkUserInputMoney());
    LottoNumberData.AmountPaid = +input;
    this.getWinningNumberFromInputFiled();
  }

  processSecondInput(winningNumber) {
    const lotto = new Lotto(winningNumber);
    LottoNumberData.Winning = lotto.checkUserWinningNumber();
    this.getBonusNumberFromInputFiled();
  }

  processThirdInput(bonusNumber) {
    const lotto = new Lotto(bonusNumber);
    LottoNumberData.Bonus = lotto.checkUserBonusNumber();
    matchLottoNumberWithWinningNumber();
    calculateRateOfReturn();
    printFinalLottoResult();
  }

  runGame() {
    this.getUserPurchaseAmountFromInputFiled();
  }
}

module.exports = LottoGameMainSystem;
