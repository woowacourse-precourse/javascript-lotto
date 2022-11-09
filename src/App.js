const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyPirce;
    this.lottoNumbers = [];
  }

  async play() {
    this.getBuyPrice();
  }

  getBuyPrice() {
    MissionUtils.Console.readLine("구입금액읍 입력해 주세요. \n", (price) => {
      this.buyPirce = price;
      this.priceValidate();
      MissionUtils.Console.close();
    });
  }

  priceValidate() {
    if (this.buyPirce % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
    }
  }
}

const app = new App();
app.play();

module.exports = App;
