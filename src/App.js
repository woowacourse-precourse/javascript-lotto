const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.lottoArray = [];
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    MissionUtils.Console.readLine(`구입금액을 입력해 주세요.\n`, (money) => {
      this.thousandValidate(money);
      this.countLotto(money);
    });
  }

  thousandValidate(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해주세요.");
    }
  }

  createLotto(qunatity) {
    for (let i = 0; i < qunatity; i++) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      MissionUtils.Console.print(lottoNumbers);
    }
    this.inputLottoNumber();
  }

  countLotto(money) {
    const lottoQuantity = money / 1000;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);
    this.createLotto(lottoQuantity);
  }

  inputLottoNumber() {
    MissionUtils.Console.readLine(`당첨 번호를 입력해 주세요.\n`, (number) => {
      const prizeNumber = number.split(",");
      MissionUtils.Console.print(prizeNumber);
      // new Lotto(prizeNumber);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
