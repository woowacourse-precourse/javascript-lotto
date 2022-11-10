const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Lotto = require('./Lotto');
const WinningResult = require('./WinningResult');
const changeStrToArr = require('./utils/changeStrToArr');

class App {
  constructor() {
    this.cash = 0;
    this.purchaseLottoAmount = 0;
    this.purchaseLottoList = [];
    this.winningNumberArr = [];
    this.bonusNumber = 0;
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

  submitBonusNumber() {
    Console.readLine('', input => {
      this.validateBonus(input);
      this.bonusNumber = Number(input);
    });
  }

  validateBonus(input) {
    const regExp = /[1-9]/g;
    const matchArr = input.match(regExp);
    if (matchArr.length !== input.length) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
    let num = Number(input);
    if (num < 1 || num > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 수들로 이루어져야 합니다.');
    }
    if (this.winningNumberArr.includes(num)) {
      throw new Error('[ERROR] 당첨번호와 중복되지 않는 수를 입력해주세요.');
    }
  }

  play() {
    this.printPurchaseInputMessage().submitPurchaseAmount();
  }
}

module.exports = App;
