"use strict";

const { Notice } = require("./Constants");
const { validateUserMoney } = require("./Utils");
const MissionUtils = require("@woowacourse/mission-utils");
const [Console] = [MissionUtils.Console, MissionUtils.Random];

class Game {
  #money;

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
}

module.exports = Game;
