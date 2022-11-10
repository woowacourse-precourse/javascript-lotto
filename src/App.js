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

  printWinningResult() {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    const winningResult = new WinningResult(this.purchaseLottoList, this.winningNumberArr);
    winningResult.setResult(this.bonusNumber);
    const result = winningResult.getResult();
    Console.print(`3개 일치 (5,000원) - ${result[5000]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[50000]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[1500000]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[30000000]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[2000000000]}개`);
    Console.print(`총 수익률은 ${winningResult.setYield(this.cash)}%입니다.`);
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
      this.validateBonus(input);
      this.bonusNumber = Number(input);
      return this.printWinningResult();
    });
  }

  validateBonus(input) {
    const regExp = /[0-9]/g;
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
