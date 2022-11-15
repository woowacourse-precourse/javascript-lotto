const MissionUtils = require("@woowacourse/mission-utils");
const { INGAME_INFORM } = require("./constants");
const purchased = require("./utils/listPurchased");
const Player = require("./Player");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  issue(tickets) {
    MissionUtils.Console.print(tickets + INGAME_INFORM.PURCHASED);
    purchased(tickets);
  }

  input() {
    //안넘어감 문제
    // new Player().insertNumbers();
    new Player().insertBonusNumber();
  }

  result() {
    //winning, profit
  }
}

module.exports = Lotto;
