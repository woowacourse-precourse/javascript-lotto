const MissionUtils = require("@woowacourse/mission-utils");
const { INGAME_INFORM } = require("./constants");
const purchased = require("./utils/listPurchased");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  issue(tickets) {
    MissionUtils.Console.print(tickets + INGAME_INFORM.PURCHASED);

    purchased(tickets);
  }

  result() {
    //winning, profit
  }
}

module.exports = Lotto;
