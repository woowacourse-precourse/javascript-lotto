const { RANDOM_UTIL } = require("./Constants");

class MakeLotteryTickets {
  constructor(userMoney, numberOfTickets) {
    this.userMoney = userMoney;
    this.numberOfTickets = numberOfTickets;
    this.lotteryTickets = [];
  }

  makeTickets() {
    let numberOfRepetition = this.numberOfTickets + 1;
    while (numberOfRepetition--) {
      const randomNumbers = RANDOM_UTIL.pickUniqueNumbersInRange(1, 45, 6);
      this.lotteryTickets.push(randomNumbers);
    }
  }
}

module.exports = MakeLotteryTickets;
