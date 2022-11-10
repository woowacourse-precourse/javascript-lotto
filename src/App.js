const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyPrice;
    this.buyAmount;
    this.lottoArray = [];
  }
  play() {
    this.gameStart();
  }

  gameStart() {
    this.getBuyPrice();
  }

  getBuyPrice() {
    MissionUtils.Console.readLine("구입금액읍 입력해 주세요. \n", (price) => {
      this.buyPrice = price;
      this.priceValidate();
      this.createLottoNumber();

      MissionUtils.Console.close();
    });
  }

  priceValidate() {
    if (this.buyPrice % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
    }
  }

  buyAmountCalculate() {
    this.buyAmount = this.buyPrice / 1000;
    MissionUtils.Console.print("\n" + this.buyAmount + "개를 구매했습니다.");
  }

  createLottoNumber() {
    this.buyAmountCalculate();

    for (let index = 0; index < this.buyAmount; index++) {
      this.lottoArray.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
    }

    this.lottoArray.map((data) => {
      console.log(data);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
