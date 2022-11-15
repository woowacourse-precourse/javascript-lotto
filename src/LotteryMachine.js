const { Console, Random } = require('@woowacourse/mission-utils');
const {
  MESSAGE,
  COUNT,
  ERROR_MESSAGE,
  NUMBER,
} = require('./constants');
const Lotto = require('./Lotto');
const { makeErrorMsg } = require('./utils');

class LotteryMachine {
  static issueTicket() {
    let lottos = [];

    Console.readLine(MESSAGE.LOTTERY_MACHINE.INPUT_MONEY, (input) => {
      const money = Number(input);
      LotteryMachine.#validateMoney(money);
      lottos = LotteryMachine.generateLottos(money);
    });

    return lottos;
  }

  static #validateMoney(money) {
    if (Number.isNaN(money)) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_NUMBER));
    }

    if (money % NUMBER.MONEY_UNIT) {
      throw new Error(makeErrorMsg(ERROR_MESSAGE.MONEY_UNIT));
    }
  }

  static generateLottos(money) {
    const purchaseQuantity = money / NUMBER.MONEY_UNIT;
    const lottos = new Array(purchaseQuantity).fill(true);

    return lottos.map(() => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        COUNT.MIN_LOTTO_NUMBER,
        COUNT.MAX_LOTTO_NUMBER,
        COUNT.LOTTO_NUMBER,
      );
      return new Lotto(lottoNumbers);
    });
  }
}

module.exports = LotteryMachine;
