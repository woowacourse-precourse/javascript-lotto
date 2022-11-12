const { Console } = require('./utils/missionUtil');
const { OUTPUT_MESSAGES, WINNING_AMOUNT } = require('./common/messages');
const { LOTTO_MATCH } = require('./common/constants');

class LottoView {
  static getUserInput(query, callback) {
    Console.readLine(query, callback);
  }

  static printLottoCount(count) {
    Console.print(`\n${OUTPUT_MESSAGES.BUY(count)}`);
  }

  static printUserLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  }

  static printStatsMessage() {
    Console.print(`\n${OUTPUT_MESSAGES.WIN_STATS}`);
  }

  static printMatchNumbers({ three, four, five, fiveBounus, six }) {
    Console.print(
      `${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.THREE}`, `${WINNING_AMOUNT[5]}`, three)}`
    );
    Console.print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.FOUR}`, `${WINNING_AMOUNT[4]}`, four)}`);
    Console.print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.FIVE}`, `${WINNING_AMOUNT[3]}`, five)}`);
    Console.print(`${OUTPUT_MESSAGES.TOTAL_BONUS(`${WINNING_AMOUNT[2]}`, fiveBounus)}`);
    Console.print(`${OUTPUT_MESSAGES.TOTAL(`${LOTTO_MATCH.SIX}`, `${WINNING_AMOUNT[1]}`, six)}`);
  }
}

module.exports = LottoView;
