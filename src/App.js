const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_MESSAGE } = require("./constant.js");

class App {
  lottoNumArr;

  play() {
    MissionUtils.Console.readLine(LOTTO_MESSAGE.INPUT_MONEY_MSG, (money) => {
      this.buyLotto(money);
      this.inputWinNum();
    });
  }

  buyLotto(money) {
    Lotto.checkMoney(money);
    this.lottoNumArr = Lotto.genLottoNumArr(money);
    Lotto.printLottoNumArr(this.lottoNumArr);
  }

  inputWinNum() {
    MissionUtils.Console.readLine(
      LOTTO_MESSAGE.INPUT_WIN_NUM_MSG,
      (numbers) => {
        const winNum = numbers.split(",").map((number) => Number(number));
        const lotto = new Lotto(winNum);
      }
    );
  }
}

new App().play();

module.exports = App;
