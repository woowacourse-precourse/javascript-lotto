const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const changeStrToArr = require('./utils/changeStrToArr');

class App {
  constructor() {
    this.cash = 0;
    this.purchaseLottoAmount = 0;
    this.purchaseLottoList = [];
    this.winningNumberArr = [];
  }

  printPurchaseInputMessage() {
    Console.print('구입금액을 입력해 주세요.');
    return this;
  }

  printPurchaseOutputMessage() {
    Console.print('');
    Console.print(`${this.purchaseLottoAmount}개를 구매했습니다.`);
    return this.printPurchaseLottoList();
  }

  printPurchaseLottoList() {
    this.purchaseLottoList.forEach(lotto => Console.print(lotto));
    return this.printWinningNumberInputMessage();
  }

  printWinningNumberInputMessage() {
    Console.print('');
    Console.print('당첨 번호를 입력해 주세요.');
    return this.submitWinningNumber();
  }

  printBonusNumberInputMessage() {
    Console.print('');
    Console.print('보너스 번호를 입력해 주세요.');
    return this.submitBonusNumber();
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

  play() {
    this.printPurchaseInputMessage().submitPurchaseAmount();
  }
}

module.exports = App;
