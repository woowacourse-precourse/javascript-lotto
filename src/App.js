const Input = require("./Input.js");
const MissionUtils = require("@woowacourse/mission-utils");
const keys = require("../src/utils/key");
const Customer = require("./Customer");
const Print = require("./Print");
class App {
  #purchaseMoney;
  #lotteryNumber;
  #bonusNumber;
  customer;

  constructor() {
    this.customer = new Customer();
  }

  play() {
    Input.getValueWithType(keys.inputType.purchaseMoney, (money) => {
      this.#purchaseMoney = Number(money);
      this.customer.buyLotto(this.#purchaseMoney);
      this.lotteryNumberPhase();
    });
  }

  lotteryNumberPhase() {
    Input.getValueWithType(keys.inputType.lotteryNumber, (lotteryNumber) => {
      this.#lotteryNumber = lotteryNumber.split(",").map(Number);
      this.bonusNumberPhase();
    });
  }
  bonusNumberPhase() {
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
    const winningLottoNumber = {
      lottery: this.#lotteryNumber,
      bonus: this.#bonusNumber,
    };
    const lottoResult = this.customer.allLottoConfirm(winningLottoNumber);
    Print.it(lottoResult);
    Print.it({
      profit: this.customer.profit,
      purchaseMoney: this.customer.purchaseMoney,
    });
    this.end();
  }

  end() {
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
