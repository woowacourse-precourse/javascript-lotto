const Random = require('../utils/Random');

class Ticket {
  static pickParam = {
    startInclusive: 1,
    endInclusive: 45,
    count: 6,
  };

  static get() {
    return Random.pickUniqueNumbersInRange({
      startInclusive: Ticket.pickParam.startInclusive,
      endInclusive: Ticket.pickParam.endInclusive,
      count: Ticket.pickParam.count,
    });
  }

  static sortByAscendingNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }
}

module.exports = Ticket;
