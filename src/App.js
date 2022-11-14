const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class App {
  constructor() {
    this.lottoArray = [];
    this.prizeNumber = 0;
    this.bonusNumber = 0;
    this.result = {};
    this.lottoMoney = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(`구입금액을 입력해 주세요.\n`, (money) => {
      this.thousandValidate(money);
      this.lottoMoney = money;
      this.countLotto(money);
    });
  }

  thousandValidate(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위의 금액을 입력해주세요.");
    }
  }

  countLotto(money) {
    const lottoQuantity = money / 1000;
    Console.print(`${lottoQuantity}개를 구매했습니다.`);
    this.createLotto(lottoQuantity);
  }

  createLotto(qunatity) {
    for (let i = 0; i < qunatity; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      Console.print(
        `[${lottoNumbers[0]}, ${lottoNumbers[1]}, ${lottoNumbers[2]}, ${lottoNumbers[3]}, ${lottoNumbers[4]}, ${lottoNumbers[5]}]`
      );
      this.lottoArray.push(lottoNumbers);
    }
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    Console.readLine(`\n당첨 번호를 입력해 주세요.\n`, (number) => {
      this.prizeNumber = number.split(",");
      new Lotto(this.prizeNumber);
      this.prizeNumber = this.prizeNumber.map((number) => parseInt(number));
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(`보너스 번호를 입력해 주세요.\n`, (bonus) => {
      this.bonusValidate(bonus);
      this.bonusNumber = parseInt(bonus);
      this.checkLottoNumbers();
    });
  }

  bonusValidate(bonus) {
    if (!(parseInt(bonus) >= 1 && parseInt(bonus) <= 45))
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
    this.initResult();
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
      this.compareNumberUnit(sameNumberCount, isbonusNumber);
    });
    this.print();
  }

  initResult() {
    this.result["5000"] = 0;
    this.result["50000"] = 0;
    this.result["1500000"] = 0;
    this.result["30000000"] = 0;
    this.result["2000000000"] = 0;
  }

  compareNumberUnit(count, bonus) {
    if (count === 3) this.result["5000"] += 1;
    if (count === 4) this.result["50000"] += 1;
    if (count === 5) {
      if (bonus === true) this.result["30000000"] += 1;
      if (bonus === false) this.result["1500000"] += 1;
    }
    if (count === 6) this.result["2000000000"] += 1;
  }

  print() {
    Console.print(`\n당첨 통계\n---`);
    Console.print(`3개 일치 (5,000원) - ${this.result["5000"]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result["50000"]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result["1500000"]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result["30000000"]}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${this.result["2000000000"]}개`
    );
    this.calculateYield();
  }

  calculateYield() {
    let deposit = 0;
    for (let key in this.result) {
      deposit += parseInt(key) * this.result[key];
    }
    Console.print(
      `총 수익률은 ${((deposit / this.lottoMoney) * 100).toFixed(1)}%입니다.`
    );
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
