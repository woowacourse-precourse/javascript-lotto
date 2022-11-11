const { Console } = require("@woowacourse/mission-utils");
const LottoMachine = require("./domain/LottoMachine");

const MESSAGE = Object.freeze({
  PLEASE_MONEY: "구입금액을 입력해 주세요.\n",
});

const ERROR = Object.freeze({
  MONEY_NOT_NUMBER: "[ERROR] 금액은 숫자여야 합니다.",
});

class App {
  constructor() {
    this.money = null;
    this.lottoMachine = new LottoMachine();
  }

  play() {
    Console.readLine(MESSAGE.PLEASE_MONEY, this.pleaseMoney.bind(this));
  }

  isValidMoney(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR.MONEY_NOT_NUMBER);
    }
  }

  pleaseMoney(money) {
    this.isValidMoney(money);
    this.money = parseInt(money, 10);
  }
}

module.exports = App;
