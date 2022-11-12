const { Console } = require('./utils/missionUtil');
const { OUTPUT_MESSAGES, WINNING_AMOUNT } = require('./common/messages');

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

  static printMatchNumbers() {
    Console.print(`${OUTPUT_MESSAGES.TOTAL(3, `${WINNING_AMOUNT[5]}`, 0)}`); // 카운트 추가 및 하드코딩 수정하기
    Console.print(`${OUTPUT_MESSAGES.TOTAL(4, `${WINNING_AMOUNT[4]}`, 0)}`); // 카운트 추가 및 하드코딩 수정하기
    Console.print(`${OUTPUT_MESSAGES.TOTAL(5, `${WINNING_AMOUNT[3]}`, 0)}`); // 카운트 추가 및 하드코딩 수정하기
    Console.print(`${OUTPUT_MESSAGES.TOTAL_BONUS(`${WINNING_AMOUNT[2]}`, 0)}`); // 카운트 추가 및 하드코딩 수정하기
    Console.print(`${OUTPUT_MESSAGES.TOTAL(6, `${WINNING_AMOUNT[1]}`, 0)}`); // 카운트 추가 및 하드코딩 수정하기
  }
}

module.exports = LottoView;
