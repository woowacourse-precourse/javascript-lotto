"use strict";

const Lotto = require("./Lotto");
const { Notice, Result } = require("./Constants");
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
    this.score = {
      three: 0,
      four: 0,
      five: 0,
      fiveWithBonus: 0,
      six: 0,
    };
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
      return this.calcResult();
    });
  }

  calcResult() {
    Array.from(this.#tickets).forEach((number) => {
      const intersection = Array.from(number).filter((x) => {
        return this.#winningNumbers.includes(x);
      });
      this.calcScore(intersection.length, number.includes(this.#bonusNumber));
    });
    return this.printResult();
  }

  calcScore(count, hasBonus) {
    if (count === 6) {
      this.score.six++;
    } else if (count === 5 && hasBonus) {
      this.score.fiveWithBonus++;
    } else if (count === 5) {
      this.score.five++;
    } else if (count === 4) {
      this.score.four++;
    } else if (count === 3) {
      this.score.three++;
    }
    return;
  }

  printResult() {
    Console.print(Result.title);
    Console.print(Result.line);
    Console.print(`${Result.three}${this.score.three}${Result.unit}`);
    Console.print(`${Result.four}${this.score.four}${Result.unit}`);
    Console.print(`${Result.five}${this.score.five}${Result.unit}`);
    Console.print(
      `${Result.fiveWithBonus}${this.score.fiveWithBonus}${Result.unit}`
    );
    Console.print(`${Result.six}${this.score.six}${Result.unit}`);

    return;
  }
}

module.exports = Game;
