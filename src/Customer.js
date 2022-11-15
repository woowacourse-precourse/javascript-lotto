const Constant = require("./utils/Constant");
const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class Customer {
  #lotto;

  constructor() {
    this.lottoList = [];
    this.money = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(Constant.MESSAGE.ERROR.OUT_OF_RANGE);
    }
  }
  purchaseLotto() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_MONEY,
      (answer) => {
        //유효성검사
        this.publishLotto(answer);
        this.money = answer;
        this.getWinningNumber();
      }
    );
  }
  publishLotto(money) {
    const lottoNum = Math.floor(money / Constant.LOTTO.LOTTO_PRICE);
    MissionUtils.Console.print(
      Constant.MESSAGE.GUIDE.SUCCESS_TO_PURCHASE(lottoNum)
    );
    for (let i = 0; i < lottoNum; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoList.push(numbers);
      MissionUtils.Console.print(`[${numbers}]`);
    }
  }

  getWinningNumber() {
    MissionUtils.Console.readLine(
      Constant.MESSAGE.GUIDE.ENTER_NUMBER,
      (answer) => {
        this.#lotto = new Lotto(answer, this.lottoList, this.money);
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
