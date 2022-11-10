const Store = require('./Store');
const { Console } = require('@woowacourse/mission-utils');
const { createLottoNumbers } = require('./utils/lottoUtils');
class App {
  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.', (money) => {
      console.log(money);
      const store = new Store(money);
      const lottoBundle = this.getLotto(money);
    });
  }

  getLotto(money) {
    let count = money / 1000;
    const lottoBundle = [];
    while (count--) {
      const lotto = createLottoNumbers();
      lottoBundle.push(lotto);
    }
    return lottoBundle;
  }
}

const app = new App();
app.play();

module.exports = App;
