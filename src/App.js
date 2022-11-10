const Store = require('./Store');
const { Console } = require('@woowacourse/mission-utils');
const { createLottoNumbers } = require('./utils/lottoUtils');
class App {
  play() {
    this.buyLotto();
    this.lottoBundle = [];
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
      console.log(numbers);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
