const { print, readLine, close } = require('../utils/missionUtil');
const { OUTPUT_MESSAGES, WINNING_AMOUNT } = require('../common/messages');
const { LOTTO_MATCH } = require('../common/constants');

class LottoView {
  static getUserInput(query, callback) {
    readLine(query, callback);
  }

  static printLottoQuantity(quantity) {
    print(`\n${OUTPUT_MESSAGES.BUY(quantity)}`);
  }

  static printUserLottos(lottos) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.join(', ');
      print(`[${lottoNumbers}]`);
    });
  }

  static printStatsMessage() {
    print(`\n${OUTPUT_MESSAGES.WIN_STATS}`);
  }

  static printMatchNumbers({ three, four, five, bonus, six }) {
    print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.THREE}`, WINNING_AMOUNT[0], three)}`);
    print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.FOUR}`, WINNING_AMOUNT[1], four)}`);
    print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.FIVE}`, WINNING_AMOUNT[2], five)}`);
    print(`${OUTPUT_MESSAGES.TOTAL_BONUS(WINNING_AMOUNT[3], bonus)}`);
    print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.SIX}`, WINNING_AMOUNT[4], six)}`);
  }

  static printRate(rate) {
    print(`${OUTPUT_MESSAGES.TOTAL_PROFIT(rate)}`);
    close();
  }
}

module.exports = LottoView;
