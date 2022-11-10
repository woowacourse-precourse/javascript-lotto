const Ticket = require('./Ticket');
const Tickets = require('./Tickets');

class Lotto {
  #numbers;

  static publish(lottos, lottoNumber) {
    if (lottos.length >= lottoNumber) {
      return lottos;
    }
    let tempLottos = [...lottos];

    tempLottos = Tickets.get(lottos, Ticket.get());
    tempLottos = Tickets.removeDuplicatedLotto(tempLottos);

    return Lotto.publish(tempLottos, lottoNumber);
  }
}

module.exports = Lotto;
