const { Console, Random } = require('@woowacourse/mission-utils');
const {
  MESSAGE,
  COUNT,
  ERROR_MESSAGE,
  NUMBER,
} = require('./constants');
const { makeErrorMsg } = require('./utils');

class LotteryMachine {
  static issueTicket() {
    let lottos = [];

    Console.readLine(MESSAGE.LOTTERY_MACHINE.INPUT_MONEY, (input) => {
      const money = Number(input);
      LotteryMachine.#validateMoney(money);
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
}

module.exports = LotteryMachine;
