const Constant = require("./utils/Constant");
const Validate = require("./utils/Validate");

const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class Customer {
  #lotto;

  constructor() {
    this.lottoList = [];
    this.money = 0;
  }
  setMoney(money) {
    this.money = money;
  }
  purchaseLotto() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_MONEY,
      (answer) => {
        this.publishLotto(answer);
        this.setMoney(answer);

        this.getWinningNumber();
      }
    );
  }
  publishLotto(money) {
    Validate.InputMoneyValidation(money);

    const lottoNum = Math.floor(money / Constant.LOTTO.LOTTO_PRICE);
    MissionUtils.Console.print(
      Constant.MESSAGE.GUIDE.SUCCESS_TO_PURCHASE(lottoNum)
    );
    for (let i = 0; i < lottoNum; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(`[${numbers.join(", ")}]`);

      this.lottoList.push(numbers);
    }
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_NUMBER,
      (answer) => {
        const numbersArr = answer.split(",").map((elem) => parseInt(elem));

        this.#lotto = new Lotto(numbersArr, this.lottoList, this.money);
        this.getBonusNumber();
      }
    );
  }
  getBonusNumber() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_BONUS_NUMBER,
      (answer) => {
        this.#lotto.setBonusNum(parseInt(answer));
        this.#lotto.checkNumber();
      }
    );
  }
}

module.exports = Customer;
