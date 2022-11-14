const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../Validation");
const { CONFIG } = require("../constants");

const listPurchased = (tickets) => {
  const purchased = [];
  const validation = new Validation();

  //generate

  while (tickets !== 0) {
    const ticket = MissionUtils.Random.pickUniqueNumbersInRange(
      CONFIG.START,
      CONFIG.END,
      CONFIG.COUNT
    );

    if (validation.checkSixNumbers(ticket)) {
      purchased.push(ticket);
    }

    tickets--;
  }

  //show

  purchased.map((el) => MissionUtils.Console.print(el));
};

module.exports = listPurchased;
