"use strict";

const Lotto = require("./Lotto");
const { Notice } = require("./Constants");
const {
  validateUserMoney,
  sortAscending,
  validateBonusNumber,
} = require("./Utils");
const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class Game {
  #money;
  #tickets;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(Notice.start, (userMoney) => {
      validateUserMoney(userMoney);
      this.#money = Number(userMoney);
      Console.print(`${userMoney / 1000}${Notice.amounts}`);
      return this.randomPurchase(userMoney / 1000);
    });
  }

  randomPurchase(amounts) {
    const tickets = [];
    for (let i = 0; i < amounts; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      sortAscending(numbers);
      Console.print("[" + numbers.join(", ") + "]");
      tickets.push(numbers);
    }
    this.#tickets = tickets;

    return this.inputWinningNumbers();
  }

  inputWinningNumbers() {
    Console.readLine(Notice.inputWinningNumbers, (userInput) => {
      const input = userInput.split(",");
      new Lotto(input);
      this.#winningNumbers = input.map((number) => Number(number));
      return this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(Notice.inputBonusNumbers, (userInput) => {
      validateBonusNumber(userInput, this.#winningNumbers);
      this.#bonusNumber = userInput;
      return;
    });
  }
}

module.exports = Game;
