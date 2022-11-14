const Input = require("./Input.js");
const keys = require("../src/utils/key");

class App {
  #purchaseMoney;
  #lotteryNumber;
  #bonusNumber;

  constructor() {}

  play() {
    Input.getValueWithType(keys.inputType.purchaseMoney, (money) => {
      this.#purchaseMoney = Number(money);
      this.lotteryNumberPhase();
    });
  }

  lotteryNumberPhase() {
    console.log("당첨번호 입력받는 페이즈");
    Input.getValueWithType(keys.inputType.lotteryNumber, (lotteryNumber) => {
      this.#lotteryNumber = lotteryNumber.split(",");
      this.bonusNumberPhase();
    });
  }
  bonusNumberPhase() {
    console.log("보너스번호 입력받는 페이즈");
    Input.getValueWithType(
      keys.inputType.bonusNumber,
      (bonusNumber) => {
        this.#bonusNumber = Number(bonusNumber);
        this.statisticPhase();
      },
      this.#lotteryNumber
    );
  }

  statisticPhase() {
    console.log("통계 페이즈");

    console.log(this.#purchaseMoney);
    console.log(this.#lotteryNumber);
    console.log(this.#bonusNumber);
    this.end();
  }

  end() {
    console.log("끝");
    Input.close();
  }
}

const app = new App();
app.play();
module.exports = App;
