const Random = require('../utils/Random');

const MIN_TICKET_NUMBER = 1;
const MAX_TICKET_NUMBER = 45;
const TICKET_COUNT = 6;

class Ticket {
  static getTicket() {
    return Random.pickUniqueNumbersInRange(MIN_TICKET_NUMBER, MAX_TICKET_NUMBER, TICKET_COUNT);
  }

  static sortByAscendingNumber(lotto) {
    return lotto.sort((a, b) => a - b);
  }
}

module.exports = Ticket;
