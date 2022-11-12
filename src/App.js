const Input = require("./Input.js");
const keys = require("../src/utils/key");

class App {
  #purchaseMoney;
  #winningNumber;
  #bonusNumber;

  constructor() {}

  play() {
    Input.getValueWithType(keys.input.purchase_money, (money) => {
      this.#purchaseMoney = Number(money);
      this.winningNumberPhase();
    });
  }

  winningNumberPhase() {
    console.log("당첨번호 입력받는 페이즈");
    Input.getValueWithType(keys.input.winning_number, (winningNumber) => {
      this.#winningNumber = winningNumber.split(",");
      this.bonusNumberPhase();
    });
  }
  bonusNumberPhase() {
    console.log("보너스번호 입력받는 페이즈");
    Input.getValueWithType(
      keys.input.bonus_number,
      (bonusNumber) => {
        this.#bonusNumber = Number(bonusNumber);
        this.statisticPhase();
      },
      this.#winningNumber
    );
  }

  statisticPhase() {
    console.log("통계 페이즈");

    console.log(this.#purchaseMoney);
    console.log(this.#winningNumber);
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
