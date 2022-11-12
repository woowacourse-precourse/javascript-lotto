const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.lottoArray = [];
    this.prizeNumber = 0;
    this.bonusNumber = 0;
    this.result = {};
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
      this.lottoArray.push(lottoNumbers);
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
      this.prizeNumber = number.split(",");
      new Lotto(this.prizeNumber);
      this.prizeNumber = this.prizeNumber.map((number) => parseInt(number));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(`보너스 번호를 입력해 주세요.\n`, (bonus) => {
      this.bonusValidate(bonus);
      this.bonusNumber = parseInt(bonus);
    });
  }

  bonusValidate() {
    if (!(parseInt(input) >= 1 && parseInt(input) <= 45))
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45까지의 숫자만 입력할 수 있습니다."
      );
    this.lottoArray.map((number) => {
      if (number === parseInt(bonus))
        throw new Error(
          "[ERROR] 당첨 번호와 중복된 숫자를 입력할 수 없습니다."
        );
    });
  }

  checkLottoNumbers() {
    this.lottoArray.map((numbers) => {
      let sameNumberCount = 0;
      let isbonusNumber = false;

      numbers.map((number) => {
        if (this.prizeNumber.includes(number)) {
          sameNumberCount += 1;
        }
        if (this.bonusNumber === number) {
          isbonusNumber = true;
        }
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
