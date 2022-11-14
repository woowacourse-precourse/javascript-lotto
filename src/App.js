const Lotto = require('./Lotto');
const Store = require('./Store');
const { Console } = require('@woowacourse/mission-utils');
const { showMylottos, getMatchingResult, getPrizeResult, getRecord, showRecord, showEarningRatio } = require('./Toolbox');

class App {
  play() {
    const store = new Store();
    this.readPurchase(store);
  }

  readPurchase(storeClass) {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.isNull(money);
      storeClass.setStoreVars(money);
      storeClass.isValidCharacter(storeClass.purchase);
      storeClass.isValidNumber(storeClass.purchase);
      storeClass.isValidUnit(storeClass.purchase);

      const myLottos = storeClass.generatedLottos.map(x => new Lotto(x));
      showMylottos(storeClass);
      this.readWinningNumbers(storeClass, myLottos);
    });
  }

  readWinningNumbers(storeClass, lottoClasses) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (commaNumbers) => {
      this.isNull(commaNumbers);
      storeClass.setWinningNumbers(commaNumbers);
      storeClass.isValidLotto(storeClass.winningNumbers);

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

      getMatchingResult(storeClass, lottoClasses);
      getPrizeResult(lottoClasses);
      getRecord(storeClass, lottoClasses);
      showRecord(storeClass);
      storeClass.setEarning();
      storeClass.setEarningRatio();
      showEarningRatio(storeClass);
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