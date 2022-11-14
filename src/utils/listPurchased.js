const MissionUtils = require("@woowacourse/mission-utils");
const { CONFIG } = require("../constants");

const listPurchased = (tickets) => {
  const purchased = [];

  //generate

  while (tickets !== 0) {
    purchased.push(
      MissionUtils.Random.pickUniqueNumbersInRange(
        CONFIG.START,
        CONFIG.END,
        CONFIG.COUNT
      )
    );
    tickets--;
  }

  //show

  purchased.map((el) => MissionUtils.Console.print(el));
};

module.exports = listPurchased;
