const { CONSTANTS } = require('./constants');

class Player {
  #tickets;
  #profit;
  constructor(tickets) {
    this.#tickets = tickets;
    this.#profit = 0
  }

  get tickets() {
    return this.#tickets;
  }

  get profit() {
    return this.#profit 
  }  

  set profit(money) {
    this.#profit += money;
  }  

  sumAllProfit(matchedCount) {
    const { ZERO, FINISH, PRIZE } = CONSTANTS;
    for ( let index = ZERO; index < FINISH; index++ ) {
      this.profit = PRIZE[index] * matchedCount[index];
    }
  }

}

module.exports = Player;
