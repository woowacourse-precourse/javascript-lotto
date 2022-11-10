const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.buyPrice;
    this.buyAmount;
    this.lottoArray = [];
    this.winningNumber;
  }
  play() {
    this.gameStart();
  }

  gameStart() {
    this.getBuyPrice();
  }

  getBuyPrice() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n", (price) => {
      this.buyPrice = price;
      this.priceValidate();
      this.createLottoNumber();
      this.getWinningNumber();
    });
  }

  priceValidate() {
    if (this.buyPrice % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
    }
  }
  winningNumberValidate() {
    if (this.winningNumber.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6자리여야 합니다.");
    }

    this.winningNumber.map((number) => {
      if (Number(number) > 45 || Number(number) === 0) {
        throw new Error("[ERROR] 당첨 번호가 1~45가 아닙니다.");
      }
    });
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

  getWinningNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해 주세요. \n",
      (number) => {
        this.winningNumber = this.splitWinningNumber(number);
        this.winningNumberValidate();

        this.getBonusNumber();
      }
    );
  }

  getBonusNumber() {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해 주세요.\n",
      (number) => {
        this.winningNumber.push(number);

        MissionUtils.Console.close();
      }
    );
  }

  splitWinningNumber(number) {
    return number.split(",");
  }
}

const app = new App();
app.play();

module.exports = App;
