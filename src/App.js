const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.lottoAmount = "";
    this.purchasedLottoNumber = [];
    this.purchasedLottoNumberArray = [];
    this.lottoNumber = [];
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
      Console.print(array);
    });
  }

  makePurchasedLottoNumber() {
    this.purchasedLottoNumber = [];
    while (this.purchasedLottoNumber.length < 9) {
      const number = Random.pickNumberInRange(1, 45);
      if (!this.purchasedLottoNumber.includes(number)) {
        this.purchasedLottoNumber.push(number);
      }
    }
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
    });
  }

  validateBonusNumber(number) {
    if (this.lottoNumber.includes(number)) {
      throw "[ERROR] 당첨번호와 다른 번호를 입력하세요!";
    }
    if (number > 45 || number === 0) {
      throw "[ERROR] 범위에 맞는 수를 입력하세요";
    }
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
