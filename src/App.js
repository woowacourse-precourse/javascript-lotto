const Lotto = require('./Lotto.js')
const Buyer = require('./Buyer.js')
const {Console, Random} = require("@woowacourse/mission-utils");

const ASK_LOTTO_PRICE = "구입금액을 입력해 주세요.";
const ASK_LOTTO_NUMBER = "당첨 번호를 입력해 주세요.";
const ASK_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";

class App {
  lottoCount;

  buyLotto(price){
    const buyer = new Buyer(price);
    this.lottoCount = buyer.lottoCount;
  }

  printbuyLotto(lottoCount){
    Console.print(`${lottoCount}를 구매했습니다`)
  }

  play() {
    Console.print(ASK_LOTTO_PRICE);
    Console.readLine('',price => this.buyLotto(price))
  }
}

const app = new App();
app.play();

// module.exports = App;
