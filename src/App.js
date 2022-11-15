const Lotto = require('./Lotto');
const Store = require('./Store');
const Process = require('./Process');
const process = new Process();
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    const store = new Store();
    this.readPurchase(store);
  }

  readPurchase(storeClass) {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.isNull(money);
      storeClass.setStoreVariables(money);
      storeClass.isValidCharacter(storeClass.purchase);
      storeClass.isValidNumber(storeClass.purchase);
      storeClass.isValidUnit(storeClass.purchase);

      const myLottos = storeClass.generatedSixNumbers.map(numbers => new Lotto(numbers));
      process.showMylottos(storeClass);
      this.readWinningNumber(storeClass, myLottos);
    });
  }

  readWinningNumber(storeClass, lottoClasses) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (commaNumbers) => {
      this.isNull(commaNumbers);
      storeClass.setWinningNumber(commaNumbers);
      storeClass.isValidLotto(storeClass.winningNumber);
      this.readBonusNumber(storeClass, lottoClasses);
    })
  }

  readBonusNumber(storeClass, lottoClasses) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => {
      this.isNull(number);
      storeClass.setBonusNumber(number);
      storeClass.isValidCharacter(storeClass.purchase);
      storeClass.isValidNumber(storeClass.purchase);
      storeClass.isValidBonus(storeClass.bonusNumber);

      process.getMatchingResult(storeClass, lottoClasses);
      process.getPrizeResult(lottoClasses);
      process.getRecord(storeClass, lottoClasses);
      process.showRecord(storeClass);

      storeClass.setEarning();
      storeClass.setEarningRatio();
      process.showEarningRatio(storeClass);
      this.end();
    });
  }

  isNull(input) {
    if (input === '') throw new Error("[ERROR] 입력값이 존재하지 않습니다.")
    return true;
  }

  end() {
    Console.close();
  }
}

module.exports = App;