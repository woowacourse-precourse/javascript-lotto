const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const WinningResult = require('./WinningResult');
const changeStrToArr = require('./utils/changeStrToArr');
const { validateBonus } = require('./utils/validator');
const { MESSAGE, WINNING_PRIZE } = require('./constants');

class App {
  constructor() {
    this.cash = 0;
    this.purchaseLottoAmount = 0;
    this.purchaseLottoList = [];
    this.winningNumberArr = [];
    this.bonusNumber = 0;
  }

  printPurchaseInputMessage() {
    Console.print(MESSAGE.INPUT_CASH);
    return this;
  }

  printPurchaseOutputMessage() {
    Console.print('');
    Console.print(MESSAGE.BOUGHT_LOTTO_INFO(this.purchaseLottoAmount));
    return this.printPurchaseLottoList();
  }

  printPurchaseLottoList() {
    this.purchaseLottoList.forEach(lotto => Console.print(`[${lotto}]`));
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
    const winningResult = new WinningResult(this.purchaseLottoList, this.winningNumberArr);
    winningResult.setResult(this.bonusNumber);
    const result = winningResult.getResult();
    Console.print(MESSAGE.FIFTH_PLACE_RESULT(result[WINNING_PRIZE.FIFTH]));
    Console.print(MESSAGE.FOURTH_PLACE_RESULT(result[WINNING_PRIZE.FOURTH]));
    Console.print(MESSAGE.THIRD_PLACE_RESULT(result[WINNING_PRIZE.THIRD]));
    Console.print(MESSAGE.SECOND_PLACE_RESULT(result[WINNING_PRIZE.SECOND]));
    Console.print(MESSAGE.FIRST_PLACE_RESULT(result[WINNING_PRIZE.FIRST]));
    Console.print(MESSAGE.TOTAL_YIELD_RESULT(winningResult.setYield(this.cash)));
    Console.close();
  }

  submitWinningNumber() {
    Console.readLine('', input => {
      const inputArr = changeStrToArr(input);
      const lotto = new Lotto(inputArr);
      this.winningNumberArr = inputArr;
      return this.printBonusNumberInputMessage();
    });
  }

  submitPurchaseAmount() {
    Console.readLine('', input => {
      let purchase = new Purchase(input);
      this.cash = purchase.Cash;
      this.purchaseLottoAmount = purchase.LottoCount;
      this.purchaseLottoList = purchase.LottoList;
      return this.printPurchaseOutputMessage();
    });
  }

  submitBonusNumber() {
    Console.readLine('', input => {
      validateBonus(this.winningNumberArr, input);
      this.bonusNumber = Number(input);
      return this.printWinningResult();
    });
  }

  play() {
    this.printPurchaseInputMessage().submitPurchaseAmount();
  }
}

module.exports = App;
