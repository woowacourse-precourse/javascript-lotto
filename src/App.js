const { Random, Console } = require("@woowacourse/mission-utils");
// const Lotto = require("./Lotto");
// const LottoFunction = new Lotto();

class App {
  constructor() {
    this.lottoAmount = "";
    this.purchasedLottoNumber = [];
    this.purchasedLottoNumberArray = [];
  }

  playLottoGame() {
    this.putMoney();
  }

  putMoney() {
    Console.readLine("구입금액을 입력해 주세요.", (answer) => {
      this.moneyValidate(answer);
      this.lottoAmount = answer / 1000;
      for (let i = 0; i < this.lottoAmount; i++) {
        this.makePurchasedLottoNumber();
      }
      Console.print(`${this.lottoAmount}개를 구매했습니다.`);
      this.purchasedLottoNumberArray.map((array) => {
        Console.print(array);
      });
    });
  }

  moneyValidate(money) {
    if (money % 1000 !== 0) {
      throw "[ERROR] 1000원 단위로만 구매 가능합니다";
    }
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

  play() {
    this.playLottoGame();
  }
}

const app = new App();
app.play();

module.exports = App;
