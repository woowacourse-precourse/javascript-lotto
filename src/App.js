const MissionUtils = require("@woowacourse/mission-utils");
const LottoGenerator = require("./LottoGenerator");
const { INPUT_MESSAGE } = require("./message");
const { Console } = MissionUtils;

class App {
  constructor() {}

  play() {
    this.inputPrice();
  }
  inputPrice() {
    Console.readLine(INPUT_MESSAGE.PURCHASE, (payment) => {
      const lottoGenerator = new LottoGenerator();
      this.myLotto = lottoGenerator.generate(payment);
      this.printMyLotto(this.myLotto);
    });
  }
  printMyLotto(myLotto) {
    const PURCHASE_MESSAGE = `\n${myLotto.length}개를 구매했습니다.`;
    Console.print(PURCHASE_MESSAGE);
    myLotto.forEach((lotto) => {
      lotto.sort((a, b) => a - b);
      Console.print(lotto);
    });
  }
}
const app = new App();
app.play();

module.exports = App;
