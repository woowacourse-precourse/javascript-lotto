const MissionUtils = require('@woowacourse/mission-utils');

class GenreateLotto {
  lottoTickets = [];

  generateLottoTickets(ticketNumber) {
    for (let ticket = 0; ticket < ticketNumber; ticket += 1) {
      const LOTTO = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      // Sort by increasing order
      LOTTO.sort((a, b) => a - b);
      this.lottoTickets.push(LOTTO);
    }
  }
}

module.exports = GenreateLotto;
