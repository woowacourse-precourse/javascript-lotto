const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const { INPUT_MESSAGE } = require("./message");
const { Console } = MissionUtils;

class App {
  constructor() {
    this.userLottos = null;
    this.winningLotto = null;
  }

  play() {
    this.inputPrice();
  }
  inputPrice() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (payment) => {
      const lottoGenerator = new LottoGenerator();
      const myLotto = lottoGenerator.generate(payment);
      this.userLottos = myLotto;
      this.printMyLotto(myLotto);
    });
  }
  printMyLotto(myLotto) {
    const PURCHASE_MESSAGE = `\n${myLotto.length}개를 구매했습니다.`;
    Console.print(PURCHASE_MESSAGE);
    myLotto.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
      Console.print(lotto);
    });
    this.inputBonus();
  }
  inputBonus() {
    Console.readLine(INPUT_MESSAGE.WINNING, (winning) => {
      this.winningLotto = new Lotto(winning).returnLotto();
    });
  }
}
const app = new App();
app.play();

module.exports = App;
