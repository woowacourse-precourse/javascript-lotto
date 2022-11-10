const Store = require('./Store');
const Lotto = require('./Lotto');
const { Console } = require('@woowacourse/mission-utils');
const { createLottoNumbers, convertWinningNumbers } = require('./utils/lottoUtils');
class App {
  play() {
    this.buyLotto();
    this.lottoBundle = [];
    this.winningNumbers = [];
    this.bonus = 0;
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      console.log(money);
      const store = new Store(money);
      const amount = money / 1000;
      this.lottoBundle = this.getLotto(amount);
      this.printBoughtLotto(amount);
      this.createWinningNumbers();
    });
  }

  getLotto(amount) {
    const lottoBundle = [];
    while (amount--) {
      const lotto = createLottoNumbers();
      lottoBundle.push(lotto);
    }
    return lottoBundle;
  }

  printBoughtLotto(amount) {
    Console.print(amount + '개를 구매했습니다.');
    for (const lotto of this.lottoBundle) {
      Console.print('[' + lotto + ']');
    }
  }

  createWinningNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      this.winningNumbers = convertWinningNumbers(numbers);
      const lotto = new Lotto(this.winningNumbers);
      this.createBonusNumber();
    });
  }

  createBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (bonus) => {
      this.bonus = Number(bonus);
      this.validateBonusNumber(this.bonus);
    });
  }

  validateBonusNumber(bonus) {
    if (isNaN(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (this.winningNumbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }

    if (bonus <= 0 || bonus > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
    }
  }
}

const app = new App();
app.play();

module.exports = App;
