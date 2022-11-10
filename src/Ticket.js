const Random = require('./utils/Random');

class Ticket {
  static get() {
    Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = Ticket;
