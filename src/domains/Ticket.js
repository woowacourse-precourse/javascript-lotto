const Random = require('./Random');

class Ticket {
  static get() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  static sortByAscendingNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }
}

module.exports = Ticket;
