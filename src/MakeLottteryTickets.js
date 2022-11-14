const { RANDOM_UTIL } = require("./Constants");

class MakeLotteryTickets {
  makeTickets() {
    const randomNumbers = RANDOM_UTIL.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = MakeLotteryTickets;
