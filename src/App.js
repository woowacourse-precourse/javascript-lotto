const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lottoAmount = "";
    this.purchasedLottoNumber = [];
    this.purchasedLottoNumberArray = [];
    this.lottoNumber = [];
    this.threeWin = [];
    this.fourWin = [];
    this.fiveWin = [];
    this.fiveAndBonusWin = [];
    this.sixWin = [];
  }

  moneyValidate(money) {
    if (money % 1000 !== 0) {
      throw "[ERROR] 1000원 단위로만 구매 가능합니다";
    }
    this.lottoAmount = money / 1000;
  }

  makeAndPrintPurchasedLottoNumber() {
    for (let i = 0; i < this.lottoAmount; i++) {
      this.makePurchasedLottoNumber();
    }
    Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    this.purchasedLottoNumberArray.map((array) => {
      Console.print(JSON.stringify(array).replaceAll(",", ", "));
    });
  }

  makePurchasedLottoNumber() {
    this.purchasedLottoNumber = [];
    this.purchasedLottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    this.purchasedLottoNumberArray.push(
      this.purchasedLottoNumber.sort(function (a, b) {
        return a - b;
      })
    );
    this.purchasedLottoNumber = [];
  }

  inputLottoNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.", (number) => {
      this.lottoNumber = new Lotto(number.split(",").map(Number)).returnValue();
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (number) => {
      this.validateBonusNumber(number);
      this.bonusNumber = number;
      this.findWin();
    });
  }

  validateBonusNumber(number) {
    if (this.lottoNumber.includes(number)) {
      throw "[ERROR] 당첨번호와 다른 번호를 입력하세요!";
    }
    if (number > 45 || number === 0) {
      throw "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
    }
  }

  findWin() {
    this.purchasedLottoNumberArray.map((array) => {
      this.findIntersection(array);
      this.findFiveAndBonusWin();
    });
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.threeWin.length}개`);
    Console.print(`4개 일치 (50,000원) - ${this.fourWin.length}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.fiveWin.length}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveAndBonusWin.length}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.sixWin.length}개`);
    this.findWinMoney();
  }

  findIntersection(array) {
    let intersection = array.filter((el) => this.lottoNumber.includes(el));
    switch (intersection.length) {
      case 3:
        this.threeWin.push(array);
        break;
      case 4:
        this.fourWin.push(array);
        break;
      case 5:
        this.fiveWin.push(array);
        break;
      case 6:
        this.sixWin.push(array);
        break;
    }
  }

  findFiveAndBonusWin() {
    const lottoNumberWithBonus = this.lottoNumber.concat(
      Number(this.bonusNumber)
    );
    this.fiveWin.map((array, index) => {
      if (
        array.filter((el) => lottoNumberWithBonus.includes(el)).length === 6
      ) {
        this.fiveAndBonusWin.push(array);
        this.fiveWin.splice(index, 1);
      }
    });
  }

  findWinMoney() {
    const winMoney =
      this.threeWin.length * 5000 +
      this.fourWin.length * 50000 +
      this.fiveWin.length * 1500000 +
      this.fiveAndBonusWin * 30000000 +
      this.sixWin * 2000000000;

    const earningRate = (winMoney / (this.lottoAmount * 1000)) * 100;

    Console.print(`총 수익률은 ${Math.round(earningRate * 10) / 10}%입니다.`);
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      this.moneyValidate(answer);
      this.makeAndPrintPurchasedLottoNumber();
      this.inputLottoNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
