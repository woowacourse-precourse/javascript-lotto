const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const WinningResult = require('./WinningResult');
const changeStrToArr = require('./utils/changeStrToArr');
const { makeLottoSet } = require('./utils/makeLottoSet');
const { MESSAGE, RANK } = require('./constants');

class App {
  constructor() {
    this.purchaseLottoAmount = 0;
    this.purchaseLottoSet = new Set();
    this.winningNumberArr = [];
    this.bonusNumber = 0;
  }

  play() {
    this.printPurchaseInputMessage();
  }

  close() {
    Console.close();
  }

  printPurchaseInputMessage() {
    Console.print(MESSAGE.INPUT_CASH);
    this.submitPurchaseAmount();
  }

  printPurchaseOutputMessage() {
    Console.print('');
    Console.print(MESSAGE.BOUGHT_LOTTO_INFO(this.purchaseLottoAmount));
    return this.printPurchaseLottoList();
  }

  printPurchaseLottoList() {
    this.purchaseLottoSet.forEach(lotto => Console.print(`[${JSON.parse(lotto).join(', ')}]`));
    return this.printWinningNumberInputMessage();
  }

  printWinningNumberInputMessage() {
    Console.print('');
    Console.print(MESSAGE.INPUT_WINNING_NUMBER);
    return this.submitWinningNumber();
  }

  printBonusNumberInputMessage() {
    Console.print('');
    Console.print(MESSAGE.INPUT_BONUS_NUMBER);
    return this.submitBonusNumber();
  }

  printWinningResult() {
    Console.print('');
    Console.print(MESSAGE.WINNING_RESULT);
    Console.print('---');
    const winningResult = new WinningResult(
      this.purchaseLottoSet,
      this.winningNumberArr,
      this.bonusNumber,
    );
    for (let rank = RANK.FIFTH; rank >= RANK.FIRST; rank--) {
      Console.print(winningResult.getResultMessage(rank));
    }
    Console.print(MESSAGE.TOTAL_YIELD_RESULT(winningResult.setYield()));
    this.close();
  }

  submitWinningNumber() {
    Console.readLine('', input => {
      const inputArr = changeStrToArr(input);
      this.Lotto = new Lotto(inputArr);
      this.winningNumberArr = inputArr;
      return this.printBonusNumberInputMessage();
    });
  }

  submitPurchaseAmount() {
    Console.readLine('', input => {
      let purchase = new Purchase(input);
      this.purchaseLottoAmount = purchase.LottoCount;
      this.purchaseLottoSet = makeLottoSet(this.purchaseLottoAmount);
      return this.printPurchaseOutputMessage();
    });
  }

  submitBonusNumber() {
    Console.readLine('', input => {
      this.Lotto.validateBonusNumber(input);
      this.bonusNumber = Number(input);
      return this.printWinningResult();
    });
  }
}

module.exports = App;
